const { client, tours } = require("../data.js");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

//client
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    photo: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const TourType = new GraphQLObjectType({
  name: "Tour",
  fields: () =>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    duration: { type: GraphQLString },
    maxGroupSize: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    guides: { type: GraphQLString },
    price: { type: GraphQLString },
    summary: { type: GraphQLString },
    description: { type: GraphQLString },
    imageCover: { type: GraphQLString },
    locations: { type: GraphQLString },
    ratingsAverage: { type: GraphQLString },
    ratingsQuantity: { type: GraphQLString },
    images: { type: GraphQLString },
    startDates: { type: GraphQLString },
    startLocation: { type: GraphQLString },    
  })
})

//Query for client
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tours: {
      type: new GraphQLList(TourType),
      resolve(parent, args) {
        return tours;
      },
    },
    tour: {
      type: TourType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {        
        return tours.find((tour) => tour._id === args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return client;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return client.find((client) => client._id === args.id);
      },
    },
  },
});








module.exports = new GraphQLSchema({
  query: RootQuery,
});
