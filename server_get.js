const express = require("express");
const app = express();

// Utility function to concatenate two strings
const concatenateStrings = (str1, str2) => {
    return str1 + " " + str2;
};

// Route handler for /concatenateStrings endpoint
const concatenateStringsHandler = (req, res) => {
    const str1 = req.query.str1 || "";
    const str2 = req.query.str2 || "";
    const result = concatenateStrings(str1, str2);
    res.json({ statuscode: 200, data: result });
};

// Route handler for root endpoint
const rootHandler = (req, res) => {
    const htmlContent = "<html><body><h1>HELLO THERE</h1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(htmlContent);
};

// Define routes
app.get("/concatenateStrings", concatenateStringsHandler);
app.get("/", rootHandler);

// Start the server
const port = 3040;
const serverStartMessage = "Server listening on port " + port;
app.listen(port, () => {
    console.log(serverStartMessage);
});
