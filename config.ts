import { Pool } from "pg";

let dbUrl:any;

switch (process.env.NODE_ENV) {
  case "production":
    dbUrl = process.env.DATABASE_URL;
    break;
  case "development":
    dbUrl = process.env.TEST_DATABASE_URL;
    break;
};

let db = new Pool({
    connectionString: dbUrl,
    ssl: {
        rejectUnauthorized: false
    }
});

export default db;