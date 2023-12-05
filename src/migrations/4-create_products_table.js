'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "categories", deps: []
 * createTable "products", deps: [categories]
 * changeColumn "rol_id" on table "users"
 * changeColumn "rol_id" on table "users"
 * changeColumn "rol_id" on table "users"
 * changeColumn "rol_id" on table "users"
 *
 **/

var info = {
    "revision": 4,
    "name": "create_products_table",
    "created": "2023-11-21T23:55:49.726Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "categories",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
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
    },
    {
        fn: "createTable",
        params: [
            "products",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "brand": {
                    "type": Sequelize.STRING,
                    "field": "brand"
                },
                "sku": {
                    "type": Sequelize.STRING,
                    "field": "sku"
                },
                "condition": {
                    "type": Sequelize.STRING,
                    "field": "condition"
                },
                "sotck": {
                    "type": Sequelize.INTEGER,
                    "field": "sotck"
                },
                "desciption_short": {
                    "type": Sequelize.STRING,
                    "field": "desciption_short"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description"
                },
                "symbol": {
                    "type": Sequelize.STRING,
                    "field": "symbol"
                },
                "price": {
                    "type": Sequelize.INTEGER,
                    "field": "price"
                },
                "price_desc": {
                    "type": Sequelize.INTEGER,
                    "field": "price_desc"
                },
                "image_1": {
                    "type": Sequelize.STRING,
                    "field": "image_1"
                },
                "image_2": {
                    "type": Sequelize.STRING,
                    "field": "image_2"
                },
                "image_3": {
                    "type": Sequelize.STRING,
                    "field": "image_3"
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
                },
                "cat_id": {
                    "type": Sequelize.INTEGER,
                    "field": "cat_id",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "categories",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "rol_id",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "roles",
                    "key": "id"
                },
                "allowNull": true,
                "field": "rol_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "rol_id",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "roles",
                    "key": "id"
                },
                "allowNull": true,
                "field": "rol_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "rol_id",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "roles",
                    "key": "id"
                },
                "allowNull": true,
                "field": "rol_id"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "rol_id",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "roles",
                    "key": "id"
                },
                "allowNull": true,
                "field": "rol_id"
            }
        ]
    }
];

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
