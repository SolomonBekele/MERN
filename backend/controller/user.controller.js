import User from "../models/user.model.js";
import Message from "../models/message.model.js"
import Conversation from "../models/conversation.model.js"

export const getUsersForSidebar = async(req,res) =>{
    try {
        
        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filteredUser)

    } catch (error) {
        console.log("error in getUserForSidebar controller", error.message)
        res.status(500).json({ error: "internal server error"})
        
    }
}
export const getUserById= async(req,res) =>{
    try {
        
        const { userId } = req.params;

        const user = await User.findById(userId);
  
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user)

    } catch (error) {
        console.log("error in getUserForSidebar controller", error.message)
        res.status(500).json({ error: "internal server error"})
        
    }
}
export const getUserByUsername = async (req, res) => {
    try {
      const { username } = req.params;
  
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.log('Error in getUserByUsername controller', error.message);
      return res.status(500).json({ error: error.message });
    }
  };
  

export const userUpdate = async (req, res) => {
    try {
      const { userId } = req.params;
      const { fullName, username, password, confirmPassword, gender } = req.body;
  
      // Fetch the user from the database using the userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // hash password here
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Update the user's information
      user.fullName = fullName;
      user.username = username;
      user.password = hashedPassword;
      user.confirmPassword = confirmPassword;
      user.gender = gender;
  
      // Save the updated user to the database
      await user.save();
  
      return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.log('Error in userUpdate controller', error.message);
      return res.status(500).json({ error: error.message });
    }
  };


  export const deleteUserById = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Delete the user from the database using findByIdAndDelete()
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Delete the message from the database using if the user is 
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('Error in deleteUser controller', error.message);
      return res.status(500).json({ error: error.message });
    }
  };
  export const deleteUserByUsername = async (req, res) => {
    try {
      const { username } = req.params;
  
      // Delete the user from the database using findOneAndDelete() by username
      const deletedUser = await User.findOneAndDelete({ username });
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('Error in deleteUser controller', error.message);
      return res.status(500).json({ error: error.message });
    }
  };