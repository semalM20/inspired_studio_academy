const mongoose = require("mongoose");

const financePlanSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        query: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const financePlanModel = mongoose.model("financePlanQueries", financePlanSchema);

module.exports = financePlanModel;
