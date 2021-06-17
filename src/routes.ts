import {
    Router
} from "express"

import authMiddleware from "./middlewares/authMiddleware"

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

routes.get('/users', authMiddleware, UserController.index)
routes.post('/users', [authMiddleware, UserValidation()], UserController.store)
routes.put('/users/:userId', authMiddleware, UserController.edit)
routes.delete('/users/:userId', authMiddleware, UserController.delete)

routes.get('/dreams', authMiddleware,DreamController.index)
routes.post('/dreams', [authMiddleware, DreamValidation()], DreamController.store)
routes.put('/dreams/:dreamId', authMiddleware, DreamController.edit)
routes.delete('/dreams/:dreamId', authMiddleware, DreamController.delete)

export default routes