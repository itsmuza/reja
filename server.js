const http = require('http')
const mongodb = require('mongodb')


const connectionString = 'mongodb+srv://muza:apple.One1@cluster0.sk6h5i1.mongodb.net/Plan'
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB")
    else {
        console.log("MongoDB connection succeed")
        const db = client.db();
        module.exports = db;
        const app = require('./app')
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port ${PORT}, http://localhost:${PORT}`)
        })
    }    
})


