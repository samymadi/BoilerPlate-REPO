const dotenv = require("dotenv");
const path = require('path');


const ENV_PATH = path.resolve(__dirname,`../.env.local.${process.env.NODE_ENV}`);

//stock ENV Variable to process.env 
dotenv.config({path:ENV_PATH});

const ENV = process.env;

module.exports={
  env: ENV.NODE_ENV,
  port: ENV.PORT,
  mysql: {
   
  },
  jwt: {
    secret: ENV.JWT_SECRET,
    accessExpirationMinutes: ENV.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: ENV.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: ENV.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: ENV.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: ENV.SMTP_HOST,
      port: ENV.SMTP_PORT,
      auth: {
        user: ENV.SMTP_USERNAME,
        pass: ENV.SMTP_PASSWORD,
      },
    },
    from: ENV.EMAIL_FROM,
}

}

