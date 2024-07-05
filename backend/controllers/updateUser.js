const userModel = require("../models/userModel");

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const {
      userId,
      email,
      name,
      role,
      onlineCoursePayment,
      offlineBCoursePayment,
      offlineMCoursePayment,
    } = req.body;

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
      ...(onlineCoursePayment && { onlineCoursePayment: onlineCoursePayment }),
      ...(offlineBCoursePayment && {
        offlineBCoursePayment: offlineBCoursePayment,
      }),
      ...(offlineMCoursePayment && {
        offlineMCoursePayment: offlineMCoursePayment,
      }),
    };

    const user = await userModel.findById(sessionUser);
    console.log("user role", user.role);

    const updateUser = await userModel.findByIdAndUpdate(userId, payload);

    res.status(200).json({
      data: updateUser,
      message: "User Updated",
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

module.exports = updateUser;
