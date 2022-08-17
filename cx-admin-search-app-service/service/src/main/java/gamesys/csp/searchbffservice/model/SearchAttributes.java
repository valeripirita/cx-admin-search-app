package gamesys.csp.searchbffservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import lombok.*;

@Getter
public class SearchAttributes {
    @JsonProperty("ventures")
    private ArrayList<String> ventures;

    @JsonProperty("accountId")
    private String memberId;

    @JsonProperty("emailAddress")
    private String email;

    @JsonProperty("postCode")
    private String postCode;

    @JsonProperty("phone")
    private String phoneNumber;

    @JsonProperty("screenName")
    private String screenName;

    @JsonProperty("firstName")
    private String firstName;

    @JsonProperty("surname")
    private String surname;

    @JsonProperty("dateOfBirth")
    private String dateOfBirth;

    @JsonProperty("partial")
    private Boolean partial = true;

    @JsonProperty("identityNumber")
    private String identityNumber;

    @JsonProperty("limit")
    private final int limit = 10;

}
