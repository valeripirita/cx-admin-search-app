package gamesys.csp.searchbffservice.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "site-config-service")
public class SiteConfigServiceProperties {
    private String host;
    private String path;

    private String apiKey;

    public String getSiteConfigServiceUrl() {
        return host + path;
    }
}
