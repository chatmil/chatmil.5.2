"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Tags", "rollbackLaneId", {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Tags", "rollbackLaneId");
    }
};
