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

import basicRouter from "./routes/basicDataRoute.js"

app.use(express.json())

//http://localhost:7777/
app.get("/", (req, res) => {
    res.send(`This is the default Music Discography API page.`)
})

app.use("/basic-discos", basicRouter)

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}\nThe server is running`)
})

export default db