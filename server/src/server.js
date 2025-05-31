const app = require("./app");
const { config } = require("./config/config");
const connectDB = require("./config/db");


const PORT = config.PORT;
const server = async() => {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
server();