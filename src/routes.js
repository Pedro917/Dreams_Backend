import {
    Router
} from "express"

import UserController from "./controllers/UserController"
import DreamController from "./controllers/DreamControllers"

import { UserValidation } from "./validation/UserValidation"
import { DreamValidation } from "./validation/DreamValidation"

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({
        version: "v1",
        aplication: "Api Node"
    })
})

routes.get('/users', UserController.index)
routes.post('/users', UserValidation() ,UserController.store)

routes.get('/dreams', DreamController.index)
routes.post('/dreams', DreamValidation() ,DreamController.store)

export default routes