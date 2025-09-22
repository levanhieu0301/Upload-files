import { Request, Response } from "express";
import  fs  from "fs";
import path from "path";


export const fileManager = (req:Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
  const saveLinks: any[] = []; 
  const pathMedia = path.join(__dirname,'../media')
  files.forEach(file => {
    const filename = `${Date.now()}-${file.originalname}`;
    const savePath = path.join(pathMedia, filename);
    // Lưu file vào thư mục media
    // fs.writeFileSync(savePath, file.buffer);
    fs.writeFileSync(savePath, file.buffer);
    saveLinks.push({
      folder: "/media",
      filename: filename,
      mimetype: file.mimetype,
      size: file.size,
    });

  })
  res.json({
    code: "success",
    message:"Thành công!",
    saveLink: saveLinks
  })
  } catch (error) {
    res.json({
    code: "error",
    message:"Thất bại!",

  })
  }
}