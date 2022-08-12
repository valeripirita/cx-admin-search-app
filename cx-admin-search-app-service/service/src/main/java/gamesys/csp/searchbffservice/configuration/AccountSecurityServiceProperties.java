package gamesys.csp.searchbffservice.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "account-security-service")
public class AccountSecurityServiceProperties {
    private String host;
    private String path;

    private String apiKey;

    public String getAccountServiceUrl() {
        return host + path;
    }
}
