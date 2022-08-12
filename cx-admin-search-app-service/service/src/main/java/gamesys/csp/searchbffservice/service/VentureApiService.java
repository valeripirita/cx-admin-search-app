package gamesys.csp.searchbffservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import gamesys.csp.searchbffservice.model.account.AccountResponse;
import gamesys.csp.searchbffservice.model.venture.Venture;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Service
@Slf4j
public class VentureApiService {
    private final WebClient accountSecurityWebClient;
    private final WebClient siteConfigWebClient;

    public VentureApiService(
            @Qualifier("accountSecurityWebClient") WebClient accountSecurityWebClient,
            @Qualifier("siteConfigWebClient")  WebClient siteConfigWebClient
    ) {
        this.accountSecurityWebClient = accountSecurityWebClient;
        this.siteConfigWebClient = siteConfigWebClient;
    }

    public Mono<String> getUserVentures(int userId) {
        var usersVenturesMono = getUserInfo(userId);
        var allVenturesMono = getAllVentures();

        Mono<Tuple2<List<String>, Venture[]>> tuple = Mono.zip(usersVenturesMono, allVenturesMono);
        return tuple.map(result -> {
                    var allVentures =  result.getT2();
                    var usersVentures = result.getT1();
                    var filteredVentures = Arrays.stream(allVentures).filter(v -> usersVentures.contains(v.getName().toLowerCase())).collect(Collectors.toList());
            try {
                return venturesToJson(filteredVentures);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private Mono<List<String>> getUserInfo(int userId){
        return accountSecurityWebClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/users")
                        .queryParam("userId", userId)
                        .build())
                .retrieve()
                .bodyToMono(AccountResponse.class)
                .map(r -> r.getEmbedded().getAccounts().get(0).getVentures().stream().map(v -> v.toLowerCase()).collect(Collectors.toList()));
    }

    private Mono<Venture[]> getAllVentures() {
        return siteConfigWebClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/ventures")
                        .build())
                .retrieve()
                .bodyToMono(Venture[].class);
    }

    private String venturesToJson(List<Venture> ventures) throws JsonProcessingException {
        var mapper = new ObjectMapper();
        var rootNode = mapper.createObjectNode();

        ArrayNode venturesNode = mapper.valueToTree(ventures);
        rootNode.putArray("ventures").addAll(venturesNode);
        return mapper.writeValueAsString(rootNode);
    }

}
