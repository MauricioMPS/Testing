const pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "mauricio",
  port: 5432
};

pgtools.createdb(config, "testdb", function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});