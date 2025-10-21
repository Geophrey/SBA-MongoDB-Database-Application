import express from "express"
import db from "../index.js"
import basicDataSchemaModel from "../schemas/basicDataSchema.js"
import discography from "../seed/basicData.js"

const router = express.Router()

router.get("/seed", async (req, res) => {
    try {
        // const test = await db.collection("discographies")
        await basicDataSchemaModel.deleteMany({})
        console.log(`All data has been deleted from the database`)

        await basicDataSchemaModel.insertMany(discography)
        console.log(`Basic seed data has been added to the database`)

        const test = await basicDataSchemaModel.find({})
        console.log(`All data from the database is sent`)
        res.send(test)
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})

router.get("/all-discos", async (req, res) => {
    try {
        const music = await db.collection("discographies")
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})

export default router