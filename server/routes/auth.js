
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../model/Schema');
const { Cs } = require('../model/Schema1');
const { Srrr } = require('../model/Schemaa');
const jwt = require('jsonwebtoken');

//register route
router.post("/register", async (req, res) => {
    let { name, username, email, password } = req.body;
    //check the user already exist with this email
    const takenEmail = await User.findOne({ username: username });
    if (takenEmail) {
        return res.status(405).json("username already exists");
    } else {
        password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name,
            username,
            email,
            password,
        
        });
        await newUser.save();
        return res.json("user account created sucessfully...");
    }
});

//login user
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        //confirm the user is register or not
        const userexist = await User.findOne({ username: username });
        if (!userexist) {
            return res.status(404).json('user not found');
        }
        bcrypt.compare(password, userexist.password).then((isCorrect) => {
            if (isCorrect) {
                let payload = {
                    user: {
                        id: userexist.id
                    }
                }
                jwt.sign(payload, 'newsecreate', { expiresIn: 360000000 }, (err, token) => {
                    if (err) throw err;
                    return res.status(200).json({ token: token, name: userexist.name });
                });
            }
            else {
                return res.status(405).json('password is incorrect');
            }
        }
        );
    } catch (error) {
        return res.status(500).json("server error")
    }
});

//Admin login
router.post('/adminlogin', async(req, res) => {
    const {username, password} = req.body;
    if(username === "admin123" && password === "admin123") {
        return res.status(200).json('successful');
    }
    else {
        return res.status(405).json("user/password is incorrect");
    }
});





//class route
router.post("/classschedules", async (req, res) => {
    let { course,instructor,time} = req.body;
    //check the user already exist with this email
    const takenEmail = await Cs.findOne({ course: course });
    if (takenEmail) {
        return res.status(405).json("course already exists");
    } else {
        // password = await bcrypt.hash(req.body.password, 10);
        const newCs = new Cs({
            course,
            instructor,
            time,
        });
        await newCs.save();
        return res.json("Class Schedule added sucessfully...");
    }
});


//std route
router.post("/studentrecords", async (req, res) => {
    let {rollno,name,emailid,course,year,branch,gender,mobileno } = req.body;
    //check the user already exist with this email
    const takenEmail = await Srrr.findOne({ emailid:emailid });
    if (takenEmail) {
        return res.status(405).json("this emailid  already exists");
    } else {
        // password = await bcrypt.hash(req.body.password, 10);
        const newSrrr = new Srrr({
            rollno,
            name,
            emailid,
            course,
            year,
            branch,
            gender,
            mobileno,
        });
        await newSrrr.save();
        return res.json("Student Record added sucessfully...");
    }
});


module.exports = router;