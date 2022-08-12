package gamesys.csp.searchbffservice.model.venture;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.ArrayList;
import lombok.Getter;

@Getter
public class VentureResponse {
    ArrayList<Venture> ventures;
}
