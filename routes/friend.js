const express = require('express')
const Friend = require('../models/Friend')
const router = express.Router()


router.post("/friend", async (req, res) => {
    let newfriend = new Friend({
        userA: req.body.uid1,
        userB: req.body.uid2,
        status: "Not Accepted",
        nameA: req.body.nameA,
    })
    const stat = await Friend.findOne({ userA: req.body.uid1, userB: req.body.uid2 });
    if (stat) {
        if (stat.status === "Accepted") return res.send({ message: "Friends", success: "success" })
        return res.json({ message: "Sended", success: "success" })
    }
    await newfriend.save();
    return res.send({ message: "Sended", success: "success" })
})
router.post("/myRequests", async (req, res) => {
    try {
        const status = await Friend.find({ userB: req.body.uid, status: "Not Accepted" });
        return res.json({ requests: status, message: "All Request", success: "success" })
    } catch (error) {
        return res.status(400).json({ message: "error occured", success: "fail" });
    }
})

router.post("/accept", async (req, res) => {
    try {
        const status = await Friend.findOneAndUpdate({ userA: req.body.uid2, userB: req.body.uid1 }, { status: "Accepted", nameB: req.body.nameB }, {
            new: true
        });
        return res.json({ message: "Request Accepted", success: "success" })
    } catch (error) {
        return res.status(400).json({ message: "error occured", success: "fail" });
    }
})
router.post("/Delete", async (req, res) => {
    try {
        const status = await Friend.findOneAndUpdate({ userA: req.body.uid2, userB: req.body.uid1 }, { status: "Rejected", nameB: req.body.user }, {
            new: true
        });
        return res.json({ message: "Request Accepted", success: "success" })
    } catch (error) {
        return res.status(400).json({ message: "error occured", success: "fail" });
    }
})
router.post("/mychats", async (req, res) => {
    try {
        const chat1 = await Friend.find({ userB: req.body.id })
        return res.json({ chat1: chat1, message: "Request Accepted", success: "success" })
    } catch (error) {
        return res.status(400).json({ message: "error occured", success: "fail" });
    }
})

module.exports = router;