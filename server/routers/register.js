const router = require('express').Router();
const user = require('../models/User')
require('cookie-parser');

router.route('/')
    .post(async (req, res) => {
        console.log(req.body, "req.body")
        // return res.json({ status: 200, message: "User created succesfully" })
        const userExist = await user.findOne({ idnumber: req.body.idnumber })
        if (userExist) {
            return res.json({ status: 401, message: "Sorry user already exists" })
        }
        const newUser = new user(req.body)
        //generating token
        const token = await newUser.generateAuthToken();

        const result = await newUser.save()
        console.log(result, "result")
        if (result) {

            // req.session.message = {
            //     message: 'user inserted succesfully',
            //     type: 'success'
            // }
            res.status(200).json({
                status: 200,
                message: 'User created succesfully'
            })
        }
        else {
            res.json({ status: 401, message: err.message })
        }
    })

module.exports = router