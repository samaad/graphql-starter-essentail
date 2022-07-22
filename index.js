import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { resolvers } from "./resolvers";
const app = express();

const PORT = process.env.PORT || 8082;

app.get("/", (req, res) => {
  res.send("Graphql is amazing");
});

const root = resolvers;

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
