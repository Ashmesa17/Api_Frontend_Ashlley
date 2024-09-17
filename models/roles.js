import { model, Schema } from 'mongoose'

const RolesSchema = new Schema({
    Name:{
        type: String,
        required:[true, 'The name is required'],
    },
    State: {
        type: Boolean,
        required:[true, 'The state is required'],
    },
    
})

export default model('Roles', RolesSchema, 'Roles')