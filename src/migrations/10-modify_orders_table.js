'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "order" on table "orders"
 *
 **/

var info = {
    "revision": 10,
    "name": "modify_orders_table",
    "created": "2023-11-28T17:15:10.298Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "orders",
        "order",
        {
            "type": Sequelize.TEXT,
            "field": "order"
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
