import multer from "multer";
import path from "path";
import { checkFileType } from "../config/multer-config";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ 
    storage: storage,
    fileFilter(req, file, callback) {
        checkFileType(file, callback);
    },
})

export default upload;