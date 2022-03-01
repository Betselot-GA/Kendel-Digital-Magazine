const cloudinary = require("cloudinary").v2;
import { IncomingForm } from "formidable";

cloudinary.config({
  cloud_name:"instant-chat",
  api_key:"695445746752269",
  api_secret:"32Mumw4vAUNmkmC36qTn951vR54",
});

export function uploadImage(imageUploaded) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      imageUploaded,
      { width: 400, height: 300, crop: "fill" },
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
}

export async function getImage(formData) {
  const data = await new Promise(function (resolve, reject) {
    const form = new IncomingForm({ keepExtensions: true });
    form.parse(formData, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  return data;
}


