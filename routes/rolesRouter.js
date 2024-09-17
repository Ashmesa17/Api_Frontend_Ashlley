import {Router} from 'express'
import { getRoles, getOneRol, postRoles, putRoles, deleteRoles } from '../controller/rolesController.js'

const rolesRouter = Router()

rolesRouter.get('/',getRoles )
rolesRouter.get('/:id',getOneRol)
rolesRouter.post('/',postRoles )
rolesRouter.put('/:id',putRoles )
rolesRouter.delete('/:id',deleteRoles )

export default rolesRouter