import { Router, type RequestHandler } from "express";
import { updateProfileImage, getUser, userLogin, userLogout, userSignup, forgetPassword, resetPassword } from "../auth-controllers/user.auth.controller.js";
import { isUser } from "../middlewares/is.user.js";
import { upload } from "../config/multer.config.js";

const router = Router();

router.get("/get-user", isUser, getUser)
router.post("/user-login", userLogin);
router.post("/user-signup", userSignup)
router.post("/user-logout", userLogout)
router.put(
	"/user-profile",
	isUser,
	upload.single("avatar"),
	updateProfileImage as unknown as RequestHandler,
)
router.post("/forget-password", forgetPassword)
router.post("/reset-password", resetPassword)

export default router;
