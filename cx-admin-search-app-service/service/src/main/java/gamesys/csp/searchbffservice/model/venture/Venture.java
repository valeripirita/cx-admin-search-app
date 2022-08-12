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

//    public Venture(int id, String name, boolean obsolete, int[] partnerIds) {
//        this.id = id;
//        this.name = name;
//        this.obsolete = obsolete;
//        this.partnerIds = partnerIds;
//    }
}
