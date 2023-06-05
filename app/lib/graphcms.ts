import { GraphQLClient } from "graphql-request";

export const graphcmsClient = new GraphQLClient(
  process.env.STRAPI_URL!+"/graphql",
  {
  }
);
graphcmsClient.setHeader('authorization', 'Bearer '+process.env.STRAPI_TOKEN)
