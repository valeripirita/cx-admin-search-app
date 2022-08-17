package gamesys.csp.searchbffservice.dto;

import java.util.List;
import lombok.Data;

@Data
public class AccountResponseDto {

    private int offset;
    private int totalResults;
    private List<AccountDto> accounts;
}
