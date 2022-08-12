package gamesys.csp.searchbffservice.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Slf4j
@Configuration
public class AccountSecurityServiceConfig {
    @Bean(name="accountSecurityWebClient")
    WebClient getWebClient(AccountSecurityServiceProperties configuration)
    {
        return WebClient.builder()
                .baseUrl(configuration.getAccountServiceUrl())
                .defaultHeader(CONTENT_TYPE, APPLICATION_JSON_VALUE)
                .build();
    }
}
