import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();

const PORT = process.env.PORT || 8082;

app.get("/", (req, res) => {
  res.send("Graphql is amazing");
});

const root = {
  product: () => {
    return {
      id: 277673172,
      name: "widget",
      description: "Beautiful widget to use in your garden",
      price: 34.99,
      soldout: false,
    };
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Running server on port localhost:${PORT}/graphql`)
);
