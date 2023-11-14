"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHealth = void 0;
function checkHealth(req, res) {
    try {
        res.send("Healthy");
    }
    catch (e) {
        console.log(e);
    }
}
exports.checkHealth = checkHealth;
