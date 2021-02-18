// import {ApolloServer} from 'apollo-server-express';
const {ApolloServer} = require('apollo-server-express')
import express from 'express';
import { resolvers, typeDefs } from "../graphql";
import http, { createServer } from "http";

import cors from "cors"
import bodyParser from "body-parser"

const HOST = "localhost";
//const HOST = "192.168.1.228";
const PORT = "3001";
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended: true})));


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : async ({ req, connection }) => {
        if(connection){
            return connection.context;
        }else{
            try {
                const token = req.headers.authorization;
                return { token };
            } catch (error) {
                return { token: "" }
            }
        }
    },
    
    subscriptions: {
        onConnect: (connectionParams, webSocket, context) => {
            const token = connectionParams['Authorization'];
            return {token};
        }
    }
});

server.applyMiddleware({ app });

const httpserver = http.createServer(app);
server.installSubscriptionHandlers(httpserver)

httpserver.listen({ port: PORT, host: HOST }, () => {
    console.log(`server ready http://${HOST}:${PORT}${server.graphqlPath}`);
});
