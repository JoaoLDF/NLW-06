import { Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin, password} = request.body;

        const crateUserService = new CreateUserService();

        const user = await crateUserService.execute({ name, email, admin, password});

        return response.json(user);
    }
};

export { CreateUserController};