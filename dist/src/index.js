"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
// mongodb connection
// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb://localhost:27017/fyp";
// mongodb connection
mongoose_1.default.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`DB Connected`);
}, (err) => {
    console.log(`DB not connected ${err}`);
});
const PORT = config_1.default.port || 3000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map