import User from "../models/user.model.js";
import generateTokenAndsetCookie from "../utils/generateTokens.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ error: "password don't match" })
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }
        // hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // random image

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilepic
        })

        if (newUser) {

            // Generate jwt token
            generateTokenAndsetCookie(newUser._id,res)

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                password: newUser.password,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        } else {    
            res.status(400).json({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("error in signUp controller", error.message)
        res.status(500).json({ error: error.message })
    }

}
export const login = async (req, res) => {
    try {
        const {username,password}=req.body
        
        const user = await User.findOne({ username });
        const isPassWordCorrect = await bcrypt.compare(password,user?.password || "")
        
        if(!user || !isPassWordCorrect){
            return res.status(400).json({ error: "Username or password not correct" }) 
            }
        
        generateTokenAndsetCookie(user._id,res)
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,

            gender: user.gender,
            profilePic: user.profilePic
            })
        } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({ error: error.message })   
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("error in login controller", error.message)
        res.status(500).json({ error: error.message })  
    }
}

