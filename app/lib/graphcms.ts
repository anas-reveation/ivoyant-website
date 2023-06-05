import { GraphQLClient } from "graphql-request";

export const graphcmsClient = new GraphQLClient(
  process.env.STRAPI_URL!+"/graphql",
  {
  }
);
graphcmsClient.setHeader('authorization', 'Bearer '+"b4c164423c6e8b5bb4964ae45c5e0bfd3c8c49d3b2af73406093198b53df0818a00cd9da3a9fb2376e985bbc36fe1dbc629d32e8381e82c0e131a67a30875579f921cdcaf6b26451ed1ed6a20e023e922accd9c6cd8da1a2c505f89a614f07c6167ea71eef27488ef363b5b1cafc96d781e014ca63e910a8804c8e0619fa05b0")
