const { GraphQLServer } = require('graphql-yoga');


let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length;
const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: () => links
    },
    Mutation: {
        post: (parent, args) => {
            console.log(parent)
            
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link);
            return link;
        },
        updateLink: (parent, args) => {
            console.log(parent);
            console.log(args);
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => console.log("Server is running on htpp://localhost:4000"));