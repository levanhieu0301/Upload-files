import { Router } from "express"
import multer from "multer";
import * as fileManagerController from "../controllers/file-manager.controller"
const router = Router();
const upload = multer();

router.post('/upload', upload.array("files"), fileManagerController.fileManager )

export default router;