package gamesys.csp.searchbffservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import gamesys.csp.searchbffservice.model.SearchAttributes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@Slf4j
public class SearchApiService {
    private final WebClient searchWebClient;

    public SearchApiService(@Qualifier("accountSearchWebClient") WebClient searchWebClient) {
        this.searchWebClient = searchWebClient;
    }

    public Mono<String> getAccountInfo(SearchAttributes searchAttributes) throws JsonProcessingException {
        return searchWebClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/search")
                        .build())
                .body(BodyInserters.fromValue(getBody(searchAttributes)))
                .retrieve()
                .bodyToMono(String.class).
                map(response -> response);
    }

    private String getBody(SearchAttributes attributes) throws JsonProcessingException {
        var mapper = new ObjectMapper();
        return mapper.writeValueAsString(attributes);
    }

}
