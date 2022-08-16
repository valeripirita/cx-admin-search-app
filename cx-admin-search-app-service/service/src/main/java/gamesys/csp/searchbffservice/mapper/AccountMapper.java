package gamesys.csp.searchbffservice.mapper;

import gamesys.csp.searchbffservice.dto.AccountDto;
import gamesys.csp.searchbffservice.dto.AccountResponseDto;
import gamesys.csp.searchbffservice.model.accountsearch.Account;
import gamesys.csp.searchbffservice.model.accountsearch.AccountResponse;
import gamesys.csp.searchbffservice.model.accountsearch.ContactNumbersResponse;
import gamesys.csp.searchbffservice.model.accountsearch.ResidentialAddress;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AccountMapper {

    AccountMapper INSTANCE = Mappers.getMapper(AccountMapper.class);
    @Mapping(target="firstName", source="personalDetails.firstName")
    @Mapping(target="surname", source="personalDetails.surname")
    @Mapping(target="dateOfBirth", source="personalDetails.dateOfBirth", dateFormat = "yyyy-MM-dd")
    @Mapping(target="title", source="personalDetails.title")
    @Mapping(target="number", source="embedded.contactNumbers")
    @Mapping(target="addressLine2", source="embedded.residentialAddress", qualifiedByName = "addressLine2")
    @Mapping(target="countryCode", source="embedded.residentialAddress", qualifiedByName = "countryCode")
    @Mapping(target="postCode", source="embedded.residentialAddress", qualifiedByName = "postCode")
    AccountDto accountResponseToAccountDto(Account account);

    List<AccountDto> accountListToAccountDtoList(List<Account> account);

    @Mapping(target= "accounts", source="embedded.accounts")
    AccountResponseDto accountResponseToAccountResponseDto(AccountResponse accountResponse);

    default String number(List<ContactNumbersResponse> contactNumbers) {
        if (contactNumbers.isEmpty()) {
            return null;
        }
        return contactNumbers.get(0).getMobile().getNumber();
    }

   @Named("addressLine2")
   default String addressLine2(List<ResidentialAddress> residentialAddress) {
        if (residentialAddress.isEmpty()) {
            return null;
        }
        return residentialAddress.get(0).getAddressLine2();
    }

    @Named("countryCode")
    default String countryCode(List<ResidentialAddress> residentialAddress) {
        if (residentialAddress.isEmpty()) {
            return null;
        }
        return residentialAddress.get(0).getCountryCode();
    }

   @Named("postCode")
   default String postCode(List<ResidentialAddress> residentialAddress) {
        if (residentialAddress.isEmpty()) {
            return null;
        }
        return residentialAddress.get(0).getPostCode();
    }

}
