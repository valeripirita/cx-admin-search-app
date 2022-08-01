package gamesys.csp.searchbffservice.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class SearchServiceConfig {

    @Bean(name="accountServiceRestTemplate")
    public RestTemplate accountServiceRestTemplate(SearchServiceProperties properties) throws java.security.GeneralSecurityException {

        final RestTemplate restTemplate = new RestTemplate();

        return restTemplate;
    }
}
