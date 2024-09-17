import {Router} from 'express'
import { getUsuarios, getOneusuario, postUsarios, putUsuario, deleteUsuarios } from '../controller/usuarioController.js'

const usuarioRouter = Router()

usuarioRouter.get('/',getUsuarios )
usuarioRouter.get('/:id',getOneusuario)
usuarioRouter.post('/',postUsarios )
usuarioRouter.put('/:id',putUsuario )
usuarioRouter.delete('/:id',deleteUsuarios )

export default usuarioRouter