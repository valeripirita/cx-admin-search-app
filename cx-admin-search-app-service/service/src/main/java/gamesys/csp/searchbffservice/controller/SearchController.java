package gamesys.csp.searchbffservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import gamesys.csp.searchbffservice.configuration.AccountSecurityServiceProperties;
import gamesys.csp.searchbffservice.configuration.SearchServiceProperties;
import gamesys.csp.searchbffservice.configuration.SiteConfigServiceProperties;
import gamesys.csp.searchbffservice.model.SearchAttributes;
import gamesys.csp.searchbffservice.model.venture.Venture;
import gamesys.csp.searchbffservice.service.VentureApiService;
import gamesys.csp.searchbffservice.service.SearchApiService;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import reactor.core.publisher.Mono;

@Slf4j
@RestController
public class SearchController {
    RestTemplate restTemplate = new RestTemplate();
    private final SearchServiceProperties searchServiceProperties;
    private final AccountSecurityServiceProperties accountSecurityServiceProperties;
    private final SiteConfigServiceProperties siteConfigServiceProperties;

    private final SearchApiService searchApiService;
    private final VentureApiService accountSecurityApiService;

    public SearchController(
            SearchServiceProperties properties,
            AccountSecurityServiceProperties accountSecurityServiceProperties,
            SiteConfigServiceProperties siteConfigServiceProperties, SearchApiService searchApiService,
            VentureApiService accountSecurityApiService) {
        this.searchServiceProperties = properties;
        this.accountSecurityServiceProperties = accountSecurityServiceProperties;
        this.siteConfigServiceProperties = siteConfigServiceProperties;
        this.searchApiService = searchApiService;
        this.accountSecurityApiService = accountSecurityApiService;
    }

    @GetMapping(path = "/healthcheck")
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("ok");
    }

    @CrossOrigin
    @PostMapping(path = "/search")
    public Mono<String> search(@RequestBody SearchAttributes searchAttributes) throws JsonProcessingException {
        log.info("Users search is started");
        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
//        headers.set("Api-Key", properties.getApiKey());

        return  searchApiService.getAccountInfo(searchAttributes);
    }

    @CrossOrigin
    @GetMapping (path = "/ventures")
    public Mono<String> getAccountVentures(@RequestParam int userId) throws JsonProcessingException {
        log.info("User info search is started");
        return accountSecurityApiService.getUserVentures(userId);
    }
}
