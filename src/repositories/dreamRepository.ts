import Dream from "../models/Dream"
import { EntityRepository, Repository} from "typeorm"

@EntityRepository(Dream)
class DreamRepository extends Repository<Dream>{

    public async findByTitle(title: string): Promise<Dream|undefined>{

        const dream = this.findOne({
            where: {
                title
            }
        })
        
        return dream;
    }

}

export default DreamRepository;