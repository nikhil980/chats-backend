import User from "../Models/userModels.js";

export const getUserForSidebar=async (req,res)=>{
    try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
          console.log(filteredUsers);
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}