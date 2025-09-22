
import { Router } from "express";
const router = Router();
import * as linkFileController from "../controllers/link-file.controller"

router.get('/:filename', linkFileController.linkFile)

export default router;