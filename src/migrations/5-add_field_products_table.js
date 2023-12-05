'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "cat_id" on table "products"
 *
 **/

var info = {
    "revision": 5,
    "name": "add_field_products_table",
    "created": "2023-11-22T00:16:25.333Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "products",
        "cat_id",
        {
            "type": Sequelize.INTEGER,
            "onUpdate": "CASCADE",
            "onDelete": "CASCADE",
            "references": {
                "model": "categories",
                "key": "id"
            },
            "allowNull": true,
            "field": "cat_id"
        }
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
