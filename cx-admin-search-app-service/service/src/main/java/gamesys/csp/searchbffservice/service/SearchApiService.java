package gamesys.csp.searchbffservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import gamesys.csp.searchbffservice.model.SearchAttributes;
import gamesys.csp.searchbffservice.model.accountsearch.AccountResponse;
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

    public Mono<AccountResponse> getAccountInfo(SearchAttributes searchAttributes) throws JsonProcessingException {
        return searchWebClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/search")
                        .build())
                .body(BodyInserters.fromValue(getBody(searchAttributes)))
                .retrieve()
                .bodyToMono(AccountResponse.class);

    }

    private String getBody(SearchAttributes attributes) throws JsonProcessingException {
        var mapper = new ObjectMapper();
        return mapper.writeValueAsString(attributes);
    }



}
