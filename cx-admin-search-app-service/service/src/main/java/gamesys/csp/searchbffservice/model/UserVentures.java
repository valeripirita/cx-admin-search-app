package gamesys.csp.searchbffservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;


@Getter
@Setter
public class UserVentures {

    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;
}
