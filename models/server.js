import express, { json } from 'express'
import dbConnect from '../database/config.js'
import usuarioRouter from '../routes/usuarioRouter.js'
import rolesRouter from '../routes/rolesRouter.js'
import cors from 'cors'

class Server{

    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathRoles = '/api/roles'
        this.pathUsuario = '/api/usuario'
        this.route()
    }

    async dbConnection() {
        await dbConnect() //LLamar al método conectar
    }

    route(){
        this.app.use(json());
        this.app.use( cors() );
        this.app.use(this.pathRoles, rolesRouter)
        this.app.use(this.pathUsuario, usuarioRouter)

       
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running')
        })
    }
}

export default Server //Exportar la clase server