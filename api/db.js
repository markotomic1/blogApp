import mysql, { createConnection } from "mysql2";
export const db = createConnection({
  host: "localhost",
  user: "root",
  password: "Ntomic59!",
  database: "blog",
});
