const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

router.route('/getUser')
    .get(async (req, res) => {
        const result = await user.find()
        if (result) {
            res.json({ status: 200, message: result })
        } else {
            res.json({ status: 401, message: "No users found" })
        }
    })

router.route('/changepassword')
    .post(async (req, res) => {
        // try {
        //     const allUser = await user.find({})
        //     const userFound = allUser[allUser.length - 1]
        //     console.log(userFound)
        //     console.log(req.body)

        //     const result = await bcrypt.compare(req.body.previousPassword, userFound.password);
        //     console.log(result)
        //     if (result) {
        //         const newHash = await bcrypt.hash(req.body.newPassword, 10);

        //         userFound.password = newHash
        //         const resultUserFound = await userFound.save()

        //         if (resultUserFound)
        //             res.json({ status: 200, message: "Password changed" })
        //         else
        //             res.json({ status: 400, message: "Some error occured" })
        //     } else {
        //         res.json({ status: 400, message: "Password dosen't match" })
        //     }
        // } catch (error) {
        //     res.json({ status: 500, message: "Internal server error" })
        // }
        try {
            const allUser = await User.find({})
            const user = allUser[allUser.length - 1]

            if (!user) {
                return res.status(404).json({ status: 404, message: "User not found" });
            }

            const isPasswordMatch = await bcrypt.compare(req.body.previousPassword, user.password);
            console.log(isPasswordMatch)

            if (!isPasswordMatch) {
                return res.json({ status: 400, message: "Current password is incorrect" });
            }

            // Hash the new password
            const newHash = await bcrypt.hash(req.body.newPassword, 10);

            // Update the user's password
            user.password = newHash;
            await user.save();

            return res.json({ status: 200, message: "Password changed successfully" });
        } catch (error) {
            console.error(error);
            return res.json({ status: 500, message: "Internal server error" });
        }
    })

module.exports = router
