import mongoose from "mongoose";

const basicDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    genre: { type: String, required: true },
    // the type for awards, singles, and albums may be changed to objects to hold more information
    awards: {
        type: [
            {
                name: String,
                presenter: String,
                prestige: {
                    type: Number,
                    min: [1, `Prestige is a 1-5 Stars rating`],
                    max: [5, `Prestige is a 1-5 Stars rating`],
                },
                dateReceived: String,
            },
        ],
        required: false,
    },
    singles: {
        type: [
            {
                name: String,
                features: [String],
                lyrics: String,
                songLength: String,
                releaseDate: String,
                rating: String,
                reviews: [String],
            },
        ],
        required: false,
    },
    albums: {
        type: [
            {
                name: String,
                numberOfSongs: {
                    type: Number,
                    min: [2, `Must have at least 1 song on an album`],
                },
                albumLength: String,
                releaseDate: String,
                rating: String,
                reviews: [String],
            },
        ],
        required: false,
    },
});

const basicDataSchemaModel = mongoose.model("discographies", basicDataSchema);

export default basicDataSchemaModel;
