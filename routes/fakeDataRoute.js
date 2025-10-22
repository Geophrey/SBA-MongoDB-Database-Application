import express from "express";
import db from "../index.js";
import basicDataSchemaModel from "../schemas/basicDataSchema.js";
import discography from "../data/fakeData.js";

const router = express.Router();

// http://localhost:7777/fakeData/create-fake-data
router.get("/create-fake-data", async (req, res) => {
    try {
        await basicDataSchemaModel.deleteMany({});
        console.log(`All data has been deleted from the database`);

        await basicDataSchemaModel.insertMany(discography);
        console.log(`Basic seed data has been added to the database`);

        // await basicDataSchemaModel.index({ name: 1 })

        const fakeData = await basicDataSchemaModel.find({});
        console.log(`All data from the database is sent`);
        res.send(fakeData);
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
});

router.post("/", (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

// http://localhost:7777/fakeData/delete-all
router.delete("/delete-all", async (req, res) => {
    try {
        await basicDataSchemaModel.deleteMany({});
        console.log(`All data has been deleted from the database`);
        //res.send(basicDataSchemaModel.find({}))
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})

// http://localhost:7777/fakeData/delete-data/
router.delete("/delete-data/:artist", async (req, res) => {
    try {
        await basicDataSchemaModel.deleteOne({name: req.params.artist})
        console.log(`Artist, "${req.params.artist}" data has been deleted`);
    } catch (error) {
        console.log(error);
        res.json({ error: error.message }).status(400);
    }
})


// router.post("/seed", async (req, res) => {
//     try {
//         // const test = await db.collection("discographies")
//         await basicDataSchemaModel.deleteMany({});
//         console.log(`All data has been deleted from the database`);

//         await basicDataSchemaModel.insertMany(req.body);
//         console.log(`Basic seed data has been added to the database`);

//         const seed = await basicDataSchemaModel.find({});
//         console.log(`All data from the database is sent`);
//         res.send(seed);
//     } catch (error) {
//         console.log(error);
//         res.json({ error: error.message }).status(400);
//     }
// });

// http://localhost:7777/basic-discos/all-discos
// router.get("/all-discos", async (req, res) => {
//     try {
//         const seed = await basicDataSchemaModel.find({});
//         console.log(`All data from the database is sent`);
//         res.send(seed);
//     } catch (error) {
//         console.log(error);
//         res.json({ error: error.message }).status(400);
//     }
// });

export default router;
