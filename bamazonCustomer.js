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
});



    
connection.query("SELECT * FROM products", function(err, res) {
    for (let i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " " + "$" + res[i].price);
    }
    console.log("_____________________________")

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
    ]).then(function customerPO(answer){
        answer.item =  answer.item - 1
        var customerItem = res[answer.item].item_id
        var customerQuanity = answer.quanity
        var stock_quanity = res[answer.item].stock_quanity

        itemQuery(customerItem, customerQuanity, stock_quanity)
    })
})   


function itemQuery(product, quanity, stock) {

    var updatedStock = stock - quanity;

    // if(updatedStock >= 0) {
        connection.query("UPDATE products SET stock_quanity = ? WHERE item_id = ?", [updatedStock, product], function(err, res) {
            if (err) throw err;
            console.log(res)
        })

    // }
    console.log(product)
    console.log(quanity)
    console.log(updatedStock)
}