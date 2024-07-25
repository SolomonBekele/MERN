import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import {
     getUsersForSidebar,
    getUserbyId,updateUserById,deleteUserById,
    getUserByUsername,updateUserByUsername,deleteUserByUsername 
} from "../controller/user.controller.js"

const router = express.Router()
router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUserbyId);
router.put("/:id", protectRoute, updateUserById);
router.delete("/:id", protectRoute, deleteUserById);
router.get("/username/:username", protectRoute, getUserByUsername);
router.patch("/username/:username", protectRoute, updateUserByUsername);
router.delete("/username/:username", protectRoute, deleteUserByUsername);
export default router