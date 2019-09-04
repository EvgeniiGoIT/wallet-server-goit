"use strict";
const app = require("./src/server");
const { PORT } = require("./src/server/config");
app.listen(PORT, () => console.log("Server is running on " + PORT));
