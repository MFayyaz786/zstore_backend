const sendNotificationEmail = require("./sendNotificationEmail");

const sendEmailNotificationInfo = {
  orderResponse: {
    title: "Z-Store Order alert",
    body: "You order has been placed successfully",
  },
  returnOrder: {
    title: "Z-Store Order ",
  },
  login: {
    title: "Z-Store login alert",
    body: "You are successfully Logged in!",
  },
  otpSend: {
    title: "OTP alert",
    body: "OTP has been sent please check your mail!",
  },
  otpVerify: {
    title: "OTP alert",
    body: "OTP received",
  },
  review: {
    title: "Review alert",
    body: "Review has been submitted thank you!",
  },
  password: {
    title: "Password Alert",
    body: "Your password has been updated!",
  },
  coupon: {
    title: "Z-Store Coupon Alert",
    body: "Z-Store offering  a new coupon. Open coupon and get spacial discount on order ",
  },
  promotion: {
    title: "Z-Store Promotion Alert",
    body: "Z-Store offering promotion discount to customer. You can get benefits on promotion discount",
  },
  dealProduct: {
    title: "Z-Store Deal Offer Alert",
    body: "Z-Store offering spacial deal on spacial product. please visit z store and get discount on deal",
  },
  product: {
    title: "Z-Store New Product Alert",
    body: "Z-Store add  a new ",
  },
};
module.exports = sendEmailNotificationInfo;
