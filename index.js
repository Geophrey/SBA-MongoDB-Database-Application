import "dotenv/config"
import mongoose from "mongoose"
import express from "express"

await mongoose.connect(process.env.connectString)

const PORT = process.env.PORT
const app = express();
const db = mongoose.connection

if (db.readyState == 1) {
    console.log(`Mongoose is connected to the database`)
} else {
    console.log(`The ready state is: ${db.readyState}`)
}

import basicDataSchemaModel from "./schemas/basicDataSchema.js"
import seedRouter from "./routes/basicDataRoute.js"
import fakeDataRouter from "./routes/fakeDataRoute.js"

app.use(express.json())

//http://localhost:7777/
app.get("/", (req, res) => {
    res.send(`This is the default Music Discography API page.`)
})

app.use("/seed", seedRouter)
app.use("/fakeData", fakeDataRouter)

//http://localhost:7777/all-discos
app.get("/all-discos", async (req, res) => {
    try {
        const seed = await basicDataSchemaModel.find({})
        console.log(`All data from the database is sent`)
        res.send(seed)
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})



app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}\nThe server is running`)
})

export default db