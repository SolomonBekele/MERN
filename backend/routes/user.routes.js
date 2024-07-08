import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import { deleteUserById, deleteUserByUsername, getUserById, getUserByUsername, getUsersForSidebar, userUpdate } from "../controller/user.controller.js"

const router = express.Router()

router.get("/",protectRoute,getUsersForSidebar)
router.get("/:userId",protectRoute,getUserById)
router.get("/username/:username",protectRoute,getUserByUsername)
router.post("/update/:userId",protectRoute,userUpdate);
router.delete('/delete/:userId', protectRoute, deleteUserById);
router.delete('/deleteuser/:username', protectRoute, deleteUserByUsername);

export default router