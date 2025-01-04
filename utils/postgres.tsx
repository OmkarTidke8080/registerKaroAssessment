// import { Pool } from "pg";

// const pool = new Pool({
//   host: "localhost",
//   port: "5432",
//   user: "postgres",
//   password: "Omkar@8080",
//   database: "postgres",
// });

// export default pool;

import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this is set in your `.env.local`
});

export default pool;
