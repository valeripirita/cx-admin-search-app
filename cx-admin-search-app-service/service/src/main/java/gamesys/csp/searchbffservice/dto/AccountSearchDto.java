package gamesys.csp.searchbffservice.dto;

import java.util.Date;
import lombok.Data;

@Data
public class AccountSearchDto {

    private Long accountId;
    private String venture;
    private String firstName;
    private String surname;
    private Date dateOfBirth;
    private String title;
    private boolean open;
    private String emailAddress;
    private String screenName;
    private String addressLine2;
    private String postCode;
    private String countryCode;
    private String number;



}


