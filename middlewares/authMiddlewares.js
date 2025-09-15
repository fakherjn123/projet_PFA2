const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const requireAuthUser = (req, res, next) => {
    let token = req.cookies.jwt_Token; // PostMan
    
    // Fallback → Authorization Header (for FrontEnd)
    if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        }
    }
    
    if (token) {
        // ✅ USE THE SAME SECRET AS IN userController.js
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Invalid token" });
            } else {
                try {
                    const user = await userModel.findById(decodedToken.id);
                    if (!user) {
                        return res.status(401).json({ message: "User not found" });
                    }
                    req.user = user;
                    next();
                } catch (error) {
                    return res.status(500).json({ message: "Server error" });
                }
            }
        });
    } else {
        return res.status(401).json({ message: "No token provided" });
    }
};

module.exports = { requireAuthUser };