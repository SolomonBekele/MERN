import User from "../models/user.model.js";


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
export const getUserbyId = async(req,res) =>{
    try {
        
        const id= req.params.id;

        const filteredUser = await User.findById(id).select("-password")

        res.status(200).json(filteredUser)

    } catch (error) {
        console.log("error in getUserForSidebar controller", error.message)
        res.status(500).json({ error: "internal server error"})
        
    }
}

export const updateUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = req.body;
  
      
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log('error in updateUserById controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
export const deleteUserById = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('error in deleteUserById controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const getUserByUsername = async (req, res) => {
    try {
      const username = req.params.username;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.log('error in getUserByUsername controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const updateUserByUsername = async (req, res) => {
    try {
      const username = req.params.username;
      const updatedData = req.body;
  
      const updatedUser = await User.findOneAndUpdate({ username }, updatedData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log('error in updateUserByUsername controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  export const deleteUserByUsername = async (req, res) => {
    try {
      const username = req.params.username;
      const deletedUser = await User.findOneAndDelete({ username });
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('error in deleteUserByUsername controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };