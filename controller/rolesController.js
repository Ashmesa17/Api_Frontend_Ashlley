import Roles from '../models/roles.js'

export async function getRoles(req, res){
    const roles = await Roles.find()
    res.json({roles})
}

export async function getOneRol(req, res){
    const {id}= req.params
    const roles = await Roles.findById(id)
    res.json(roles)
}

export async function postRoles(req, res){
    const body = req.body //Get the body send from postman or a form
    let msg = 'rol registrado correctamente'
    try {
        const roles = new Roles(body)//Create the object Vehicle in RAM
        await roles.save() //Insert object at the collection
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function putRoles(req, res){
    const {Name, State} = req.body
    const id = req.params.id
    let msg = 'Rol actualizado'
    try {
        await Roles.findOneAndUpdate({_id:id}, {Name: Name, State: State})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function deleteRoles(req, res){
    let msg = 'Rol eliminado'
    const id = req.params.id
    try {
        await Roles.findByIdAndDelete({_id: id})
    } catch (error) {
        msg = 'hubo un problema al eliminar'
    }
    res.json({msg:msg})
}