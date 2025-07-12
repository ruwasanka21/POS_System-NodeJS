//register
const bcrypt = require('bcryptjs');
const userSchema = require('../model/userSchema');
const jwt = require('jsonwebtoken');

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
const login = async(req, res) => {
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(400).json({'message':"Bad Request"});
        }

        const user = await userSchema.findOne({username:username});
        if(!user){
            return res.status(404).json({'message':"User not found!.."});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({'message':"Password is wrong!"});
        }

        const token = jwt.sign({id:user_id, username:username},
            process.env.JWT_SECRET || 'sjfsdfasdjfksfugadsfajfug',
        {expiresIn: '24h'}
        );
        return res.status(200).json({'message':'Login Successful!'});

    }catch (e) {
        return res.status(500).json({'message':"Try Again!.."});
    }
}

module.exports = {
    register,login
};