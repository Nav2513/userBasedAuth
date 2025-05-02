const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); 



const register = async (req, res) => {
    try{
    const { username, password, role} = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ username, password: hashedPassword, role});
    await newUser.save();
    res.status(201).json({ message: `User is registerd with ${username}`})
}   
 catch (err) {
    res.status(500).json({ message: "Something went wrong when registering user"});
}
}

const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        console.log(username, password)
        const user = await User.findOne({username});
        console.log(user);
        if(!user){
            res.status(404).json({ message: "User is not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.status(200).json({token});

    } catch (err) {
        res.status(500).json({ message: "Something went wrong"});
    }
}


module.exports = {
    register,
    login,
}