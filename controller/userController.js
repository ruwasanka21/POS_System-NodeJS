//register
const bcrypt = require('bcryptjs');
const userSchema = require('../model/userSchema');
const register = async(req, res) => {
    try{
        const {username,password,fullName,address,status,city} = req.body;

        if(!username || !password || !fullName || !address || !status || !city){
            return res.status(400).send({error:"Bad Request"});
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        // Store hash in your password DB

        const user = new userSchema({
            username: username,
            password: hash,
            fullName: fullName,
            address: address,
            status: true,
            city: city
        });

        const saveData = await user.save();
        return res.status(201).json({'message':'Success', data : saveData});


    }catch (e){
        return res.status(500).json({'message':'Try Again',error:e});
    }
}