import {
    Router
} from "express"

import AuthController from "./controllers/AuthController"
import UserController from "./controllers/UserController"
import DreamController from "./controllers/DreamControllers"

import { AuthValidation } from "./validation/AuthValidation"
import { UserValidation } from "./validation/UserValidation"
import { DreamValidation } from "./validation/DreamValidation"

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        version: "v1",
        aplication: "Api Node"
    })
})

routes.post('/oauth/token', AuthValidation() ,AuthController.auth)

routes.get('/users', UserController.index)
routes.post('/users', UserValidation() ,UserController.store)

routes.get('/dreams', DreamController.index)
routes.post('/dreams', DreamValidation() ,DreamController.store)

export default routes