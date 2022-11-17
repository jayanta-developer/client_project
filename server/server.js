const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const DB = require("../server/config/connectDB");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

//Database
DB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${process.env.NODE_ENV}`);
});
