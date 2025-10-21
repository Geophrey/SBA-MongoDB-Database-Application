import mongoose from "mongoose"

const basicDataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    genre: {type: String, required: true},
    // the type for awards, singles, and albums may be changed to objects to hold more information
    awards: {type: [String], required: false},
    singles: {type: [String], required: false},
    albums: {type: [String], required: false}
})

const basicDataSchemaModel = mongoose.model("discographies", basicDataSchema)

export default basicDataSchemaModel