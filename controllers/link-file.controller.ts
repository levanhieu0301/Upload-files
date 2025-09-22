import { Request, Response } from "express";
import path from "path";

export const linkFile = (req:Request, res:Response) => {
  const filename = req.params.filename;

  // Định nghĩa đường dẫn filenaem trả  về fontend
  const fileLink = path.join(__dirname,'../media', filename)

  res.sendFile(fileLink)

}
