import jwt from "jsonwebtoken"

export async function authenticateUserMessages(req, res, next) {
    const token = req.headers.authorization.split(" ")[1] // to turn the auth token into an array - ['Bearer', 'actual_token']
    console.log(token);
    try {
        const authenticatedUser = await jwt.verify(token, "very-cool-secret");
        req.user = authenticatedUser
        return next();
    } catch (err) {
        return res.send("could not authenticate user")
    }
};

export function validateNewMessage(req, res, next) {
    // de-hash the user message & translate?
    console.log("validateNewMessage auth");
    next();
};
