import { randomUUID } from "node:crypto"

export class DatabasePostgres {
    list(search){
        let videos

        if(search){
            videos = sql`select * from videos where title ilike "%${search}%"`
        } else {
            videos = sql`select * from videos`
            
        }
        return videos
    }
        

    create(video){        

    }

    update(id, video){

    }

    delete(id){
        
    }
    
    
}
