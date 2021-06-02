export const avatarFileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const contentFileFilter = (req, file, cb) => {
  if (
    file.mimetype === "video/mp4" ||
    file.mimetype === "video/x-ms-wmv" ||
    file.mimetype === "video/x-msvideo" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
