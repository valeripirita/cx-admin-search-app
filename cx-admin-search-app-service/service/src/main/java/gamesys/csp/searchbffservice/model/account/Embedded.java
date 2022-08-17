package gamesys.csp.searchbffservice.model.account;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import lombok.Getter;

@Getter
public class Embedded {
    @JsonProperty("users")
    private ArrayList<Account> accounts;
}
