package gamesys.csp.searchbffservice.model.accountsearch;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.Getter;

@Getter
public class Account {

    @JsonProperty("_embedded")
    private Embedded embedded;

    private Long accountId;
    private String currencyIso;
    private PersonalDetails personalDetails;
    private String screenName;
    private String venture;
    private String emailAddress;
    private Boolean open;

    @Getter
    public class Embedded{
        private List<ContactNumbersResponse> contactNumbers;
        private List<ResidentialAddress> residentialAddress;
    }
}
