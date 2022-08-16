package gamesys.csp.searchbffservice.dto.userventures;

import lombok.*;


@Getter
public class UserVentures {
    private int id;
    private String name;

    public UserVentures(int id, String name){
     this.id = id;
     this.name = name;
    }
}
