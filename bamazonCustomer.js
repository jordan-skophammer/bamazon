var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    displayItems();
    // itemQuery()
});

function displayItems() {

    
    connection.query("SELECT * FROM products", function(err, res) {
        for (let i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " " + "$" + res[i].price);
        }

        itemQuery()
    })   
}

function itemQuery() {

    inquirer.prompt([
        {
            type: "input",
            name: "item",
            message: "Please choose the number of the item you would like to purchase."
        },
        {
            type: "input",
            name: "quanity",
            message: "How many items would you like to purchase?"
        }
    ])
}