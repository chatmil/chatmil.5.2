"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Whatsapps", "timeCreateNewTicket", {
            type: sequelize_1.DataTypes.INTEGER
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Whatsapps", "timeCreateNewTicket");
    }
};
