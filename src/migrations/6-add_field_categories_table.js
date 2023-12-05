'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "ninkename" to table "categories"
 *
 **/

var info = {
    "revision": 6,
    "name": "add_field_categories_table",
    "created": "2023-11-22T13:19:37.980Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "categories",
        "ninkename",
        {
            "type": Sequelize.STRING,
            "field": "ninkename"
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
