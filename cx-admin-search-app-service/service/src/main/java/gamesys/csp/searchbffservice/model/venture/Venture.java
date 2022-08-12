package gamesys.csp.searchbffservice.model.venture;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class Venture {
    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("obsolete")
    private boolean obsolete;

    @JsonProperty("partnerIds")
    private int[] partnerIds;
}
