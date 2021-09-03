const mongoose = require("mongoose");
const uniqueValidator = require(`mongoose-unique-validator`);

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber:
        {
            type: Number
        },
        password:
        {
            type: String
        },
        image:
        {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        },
        userType:
        {
            type: String,
            default: "user"
        },
        address:
        {
            type:String
        }
    },
    {
        timestamps: true
    }
)
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);