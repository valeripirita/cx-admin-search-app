package gamesys.csp.searchbffservice.model.account;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import lombok.Getter;

@Getter
public class Account {
    @JsonProperty("userId")
    private int userId;

    @JsonProperty("userName")
    private String userName;

    @JsonProperty("email")
    private String email;

    @JsonProperty("surname")
    private String surname;

    @JsonProperty("firstName")
    private String firstName;

    @JsonProperty("ventures")
    private ArrayList<String> ventures;

    @JsonProperty("ventureGroup")
    private String ventureGroup;
}
