import { Router } from "express"
const router = Router();
import routeFileManager from "./file-manager.route"
import linkFileController from "./link-file.route"

router.use('/file-manager',routeFileManager)
router.use('/media',linkFileController)

export default router;