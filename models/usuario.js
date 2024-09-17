import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
    Name:{
        type: String,
        required:[true, 'The name is required'],
    },
    Email: {
        type: String,
        required:[true, 'The email is required'],
        minlength: [10, 'Min 10 characters']
    },
    
})

export default model('Usuario', UserSchema, 'Usuario')