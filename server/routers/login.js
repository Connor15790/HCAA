const router = require('express').Router();
const user = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('cookie-parser');


router.route('/')
    .get((req, res) => {
        console.log("Route hit")
        res.send("hello")
    })
    .post(async (req, res) => {
        console.log(req.body, "hit route")
        var username = req.body.username;
        var password = req.body.password;

        const userFound = await user.findOne({ username })

        if (userFound == null) {
            return res.json({
                status: 401,
                message: "User does ont exist"
            });
        } else {
            const passMatch = await bcrypt.compare(password, userFound.password)

            if (passMatch) {
                // var accessToken = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET);

                const result = await user.findOneAndUpdate({ username }, {
                    $set: {
                        accessToken
                    }
                })
                console.log(result)
                if (result !== null) {
                    res.json({
                        status: 200,
                        message: "User validated"
                    });
                } else {
                    res.status(401).json({
                        status: 401,
                        message: "Invalid credentials"
                    });
                }
            } else {
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                })
            }
        }
    })

module.exports = router