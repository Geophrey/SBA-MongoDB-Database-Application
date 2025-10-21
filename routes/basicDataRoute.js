import express from "express"
import db from "../index.js"
import basicDataSchemaModel from "../schemas/basicDataSchema.js"
import discography from "../seed/basicData.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        // const test = await db.collection("discographies")
        const test = await basicDataSchemaModel.find()
        console.log(`Something was got in the try: ${test}`)
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