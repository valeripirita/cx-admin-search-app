package gamesys.csp.searchbffservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import gamesys.csp.searchbffservice.model.SearchAttributes;
import gamesys.csp.searchbffservice.model.accountsearch.AccountResponse;
import gamesys.csp.searchbffservice.service.VentureApiService;
import gamesys.csp.searchbffservice.service.SearchApiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@Slf4j
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(path = "/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public class SearchController {
    private final SearchApiService searchApiService;
    private final VentureApiService accountSecurityApiService;

    public SearchController(
            SearchApiService searchApiService,
            VentureApiService accountSecurityApiService
    ) {
        this.searchApiService = searchApiService;
        this.accountSecurityApiService = accountSecurityApiService;
    }

    @GetMapping(path = "/healthcheck")
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("ok");
    }


    @PostMapping(path = "/search")
    public Mono<AccountResponse> search(@RequestBody SearchAttributes searchAttributes) throws JsonProcessingException {
        log.info("Users search is started");
        return  searchApiService.getAccountInfo(searchAttributes);
    }

    @GetMapping (path = "/ventures")
    public Mono<String> getAccountVentures(@RequestParam int userId) throws JsonProcessingException {
        log.info("User info search is started");
        return accountSecurityApiService.getUserVentures(userId);
    }
}
