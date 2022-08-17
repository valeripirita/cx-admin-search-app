package gamesys.csp.searchbffservice.model.accountsearch;

import lombok.Getter;

@Getter
public class ContactNumbersResponse {

    private MobilePhoneNumber mobile;

    public class MobilePhoneNumber extends PhoneNumber {

    }
    @Getter
    public class PhoneNumber {
        private  String number;

    }

}

