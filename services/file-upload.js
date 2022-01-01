const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const imageMaxSize = 5 * Math.pow(10, 6);

// authentication credentials
const AWS_SECRET_KEY = require("../config/keys").AWS_SECRET_KEY;
const AWS_KEY_ID = require("../config/keys").AWS_KEY_ID;

aws.config.update({
  secretAccessKey: AWS_SECRET_KEY,
  accessKeyId: AWS_KEY_ID,
  region: "eu-central-1"
});

var s3 = new aws.S3({});

const fileFilter = (req, file, cb) => {
  console.log("Filtering file", file);
  if (
    file.mimetype !== "image/jpeg" &&
    file.mimetype !== "image/jpg" &&
    file.mimetype !== "image/png"
  ) {
    cb(new Error("Type not allowed, post only jpeg and png"), false);
  } else if (file.size > imageMaxSize) {
    cb(new Error("Too big, less than 3mb!"), false);
  } else {
    cb(null, true);
  }
};

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "ebz-project-images",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
