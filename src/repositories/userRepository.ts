import User from "../models/User"
import { EntityRepository, Repository} from "typeorm"

@EntityRepository(User)
class UserRepository extends Repository<User>{

    public async findByEmail(email: string): Promise<User|undefined>{

        const user = this.findOne({
            where: {
                email
            }
        })
        
        return user;
    }

}

export default UserRepository;