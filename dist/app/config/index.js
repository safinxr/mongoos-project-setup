"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
console.log(process.env.PORT);
exports.default = {
    port: process.env.PORT,
    mongodb_url: process.env.MONGODB_URL,
};
