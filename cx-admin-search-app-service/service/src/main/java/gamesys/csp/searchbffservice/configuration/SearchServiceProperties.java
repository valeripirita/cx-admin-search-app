package gamesys.csp.searchbffservice.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "account-service")
public class SearchServiceProperties {
    private String host;

    private String path;

    public String getAccountServiceUrl() {
        return host + path;
    }
}
