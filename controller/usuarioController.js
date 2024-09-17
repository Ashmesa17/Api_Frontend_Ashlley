import usuario from '../models/usuario.js'
import Usuario from '../models/usuario.js'

export async function getUsuarios(req, res){
    const usuario = await Usuario.find()
    res.json({usuario})
}

export async function getOneusuario(req, res){
    const {id}= req.params
    const usuario = await Usuario.findById(id)
    res.json(usuario)
}

export async function postUsarios(req, res){
    const body = req.body //Get the body send from postman or a form
    let msg = 'usuario registrado correctamente'
    try {
        const usuario = new Usuario(body)//Create the object Vehicle in RAM
        await usuario.save() //Insert object at the collection
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

export async function putUsuario(req, res){
    const {Name, Email} = req.body
    const id = req.params.id
    let msg = 'usuario actualizado'
    try {
        await Usuario.findOneAndUpdate({_id:id}, {Name: Name, Email: Email})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}


export async function deleteUsuarios(req, res){
    let msg = 'usuario eliminado'
    const id = req.params.id
    try {
        await Usuario.findByIdAndDelete({_id: id})
    } catch (error) {
        msg = 'hubo un problema al eliminar'
    }
    res.json({msg:msg})
}
