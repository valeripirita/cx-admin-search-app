package gamesys.csp.searchbffservice.model.account;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter

public class AccountResponse {
    @JsonProperty("_embedded")
    private Embedded embedded;
}
