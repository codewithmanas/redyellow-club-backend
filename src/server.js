
import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

// Create a server and pass the app to it
const server = http.createServer(app);

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});