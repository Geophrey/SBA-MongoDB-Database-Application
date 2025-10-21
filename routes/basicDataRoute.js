import express from "express"
import db from "../index.js"
import basicDataSchemaModel from "../schemas/basicDataSchema.js"
import discography from "../seed/basicData.js"

const router = express.Router()

// http://localhost:7777/seed
router.get("/", async (req, res) => {
    try {
        // const test = await db.collection("discographies")
        await basicDataSchemaModel.deleteMany({})
        console.log(`All data has been deleted from the database`)

        await basicDataSchemaModel.insertMany(req.body)
        console.log(`Basic seed data has been added to the database`)

        const seed = await basicDataSchemaModel.find({})
        console.log(`All data from the database is sent`)
        res.send(seed)
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})

router.post("/seed", async (req, res) => {
    try {
        // const test = await db.collection("discographies")
        await basicDataSchemaModel.deleteMany({})
        console.log(`All data has been deleted from the database`)

        await basicDataSchemaModel.insertMany(req.body)
        console.log(`Basic seed data has been added to the database`)

        const seed = await basicDataSchemaModel.find({})
        console.log(`All data from the database is sent`)
        res.send(seed)
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})

// http://localhost:7777/basic-discos/all-discos
// router.get("/all-discos", async (req, res) => {
//     try {
//         const seed = await basicDataSchemaModel.find({})
//         console.log(`All data from the database is sent`)
//         res.send(seed)
//     } catch (error) {
//         console.log(error);
//         res.json({ error: error.message }).status(400);
//     }
// })

export default router