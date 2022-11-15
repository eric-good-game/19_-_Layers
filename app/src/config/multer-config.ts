import { FileFilterCallback } from "multer";
import path from "path";
export const checkFileType = function (file:Express.Multer.File, cb:FileFilterCallback) {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb(new Error("Error: You can Only Upload Images!!"));
    }
};