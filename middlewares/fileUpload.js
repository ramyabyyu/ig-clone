import multer from "multer";
import path from "path";

const fileUpload = (destination, prefixName, fileFilter) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${prefixName}-${Date.now().toString()}${path.extname(
          file.originalname
        )}`
      );
    },
  });

  const upload = multer({ storage, fileFilter });

  return upload;
};

export default fileUpload;
