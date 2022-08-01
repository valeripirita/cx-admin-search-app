package gamesys.csp.searchbffservice.controller;

import gamesys.csp.searchbffservice.configuration.SearchServiceProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@Slf4j
@RestController
public class SearchController {
    RestTemplate restTemplate = new RestTemplate();

    private final SearchServiceProperties properties;

    public SearchController(SearchServiceProperties properties) {
        this.properties = properties;
    }

    @GetMapping(path = "/healthcheck")
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("ok");
    }

    @PostMapping(path = "/search")
    public ResponseEntity<String> response() {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String url = properties.getAccountServiceUrl();
        HttpEntity requestEntity = new HttpEntity(null, headers);

        return restTemplate.postForEntity(url + "/search", requestEntity, String.class);
    }
}