const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { generate } = require('../utils/password');
const { User } = require('../utils/db');
const _p = require('../utils/promise_errors');

const signupValidator = [
    check('name').exists(),
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
];

// আমরা রিকুয়েস্টের সাথে তিনটা ডাটা নিবো, সবসময় রিকুয়েস্টের ডাটা ভ্যালিডেট করতে হবে 
router.post('/signup', signupValidator, async (req, res) => {
    const errors = (validationResult(req));
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .json({ errors: errors.array() })
    }
    // পাসওয়ার্ড সেভ করার আগে হ্যাশ করে নেয়া হবে
    const chunks = generate(req.body.password);
    // সল্ট আর হ্যাশ একসাথে কম্বাইন করে একটা ডাটা তৈরী করে নিয়ে, সেটাই ডাটাবেজে সেভ রাখা হবে
    let password = `${chunks.salt}.${chunks.hash}`;

    let { name, email } = req.body;
    let [usErr, userCreated] = await _p(User.create({
        name, email, password
    }));
    if (usErr && !userCreated) {
        res.status(400).json({ error: true, message: usErr.message });
    } else {
        res.json({ error: false, message: "User Created!" });
    }
})

module.exports = router;