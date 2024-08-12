const financePlanModel = require("../../models/financePlan/financePlan");

async function allFinancePlanQuery(req, res) {
    try {
        const allFinancePlanQueries = await financePlanModel.find();

        res.status(200).json({
            message: "All Queries",
            data: allFinancePlanQueries,
            success: true,
            error: false,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        });
    }
}

module.exports = allFinancePlanQuery;
