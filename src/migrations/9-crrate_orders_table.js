'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "orders", deps: [users]
 *
 **/

var info = {
    "revision": 9,
    "name": "crrate_orders_table",
    "created": "2023-11-27T23:18:34.032Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "orders",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "order": {
                "type": Sequelize.STRING,
                "field": "order"
            },
            "user_id": {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "users",
                    "key": "id"
                },
                "allowNull": true,
                "field": "user_id",
                "default": 3
            },
            "status": {
                "type": Sequelize.BOOLEAN,
                "field": "status",
                "defaultValue": true
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "created_at",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updated_at",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
