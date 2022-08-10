package gamesys.csp.searchbffservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import gamesys.csp.searchbffservice.configuration.SearchServiceProperties;
import gamesys.csp.searchbffservice.model.SearchAttributes;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
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

    @CrossOrigin
    @PostMapping(path = "/search")
    public String search(@RequestBody SearchAttributes searchAttributes) {
        log.info("Search is started");
        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        //headers.set("Api-Key", properties.getApiKey());

        try {
            var body = getBody(searchAttributes);
            var requestEntity = new HttpEntity(body, headers);
            var response = restTemplate.postForEntity(properties.getAccountServiceUrl() + "/search", requestEntity, String.class);
            log.info("Search is completed");
            return response.getBody();
        } catch (JsonProcessingException ex) {
            log.error("Json serialization problem: " + ex.getMessage());
            return "";
        }
        catch (RestClientException ex){
            log.error("Issue during post request: " + ex.getMessage());
            return "";
        }
    }

    private String getBody(SearchAttributes attributes) throws JsonProcessingException {
        var mapper = new ObjectMapper();
        return mapper.writeValueAsString(attributes);
    }
}