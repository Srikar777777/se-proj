const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { memoryStorage } = multer;

cloudinary.config({
  cloud_name: "dhemkc9q1",
  api_key: "367331654565754",
  api_secret: "0vxT-XZkRjOSe3NJ1EZ7BSShijo",
});

const storage = memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
