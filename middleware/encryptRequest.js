const { json } = require("body-parser");
var CryptoJS = require("crypto-js");
const cryptkey = CryptoJS.enc.Utf8.parse(process.env.CRYPTKEY);
const cryptiv = CryptoJS.enc.Utf8.parse(process.env.CRYPTIV);
const encryptRequest = (data) => {
  var encrypt = CryptoJS.AES.encrypt(JSON.stringify(data), cryptkey, {
    iv: cryptiv,
    mode: CryptoJS.mode.CTR,
  });
  const cipher = encrypt.toString();
  return { cipher };
};
module.exports = encryptRequest;
