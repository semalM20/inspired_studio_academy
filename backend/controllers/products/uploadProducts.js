const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/products/productModel");

async function UploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();

    res.status(201).json({
      message: "Product uploaded successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}

module.exports = UploadProductController;
