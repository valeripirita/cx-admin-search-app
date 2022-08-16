package gamesys.csp.searchbffservice.model.accountsearch;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.Getter;

@Getter
public class AccountResponse {
    private int offset;
    private int totalResults;
    @JsonProperty("_embedded")
    private Embedded embedded;

    @Getter
    public class Embedded {
        private List<Account> accounts;

    }
}
