"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let dbUrl;
switch (process.env.NODE_ENV) {
    case "production":
        dbUrl = process.env.DATABASE_URL;
        break;
    case "development":
        dbUrl = process.env.TEST_DATABASE_URL;
        break;
}
;
let db = new pg_1.Pool({
    connectionString: dbUrl,
    ssl: {
        rejectUnauthorized: false
    }
});
exports.default = db;
