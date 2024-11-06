import mongoose from "mongoose"

const dbconnect = () => {
    mongoose.connect(link, {}, (err,res)=>
    {
        if(!err){
            console.log("Conexión correcta")
        }
        else{
            console.log("Error de conexión")
        }
    }     
)
}

export default dbconnect;