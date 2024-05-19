import "dotenv/config";

console.log(process.env.PORT);

export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
};
