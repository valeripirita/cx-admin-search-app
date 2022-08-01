package gamesys.csp.anybffservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class SearchController {
    //private final AnyServiceProperties properties;

    //public SearchController(AnyServiceProperties properties) {
    //  this.properties = properties;
    //}

    @GetMapping(path = "/healthcheck")
    public ResponseEntity<String> healthcheck() {
        return ResponseEntity.ok("ok");
    }

    @GetMapping(path = "/some-endpoint")
    public ResponseEntity<String> response() {

        // String host = properties.getHost();
        // String path = properties.getPath();
        // restTemplate.getForEntity(host + path, String.class)
        return new ResponseEntity<>("[{\"totalResults\" : \"1\"}, {\"accounts\" : [{\"accountId\" : \"21009294\", \"emailAddress\" : \"example@example.com\", \"dateOfBirth\" : \"26.11.2005\", \"firstName\" : \"Merlin\", \"surname\" : \"Goodwin\", \"postCode\" : \"SA151EW\", \"mobilePhone\" : \"07136458464\", \"venture\" : \"JPJ\"}]}]", HttpStatus.OK);
    }
}