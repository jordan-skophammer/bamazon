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
    displayInventory();
});


function displayInventory() {
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
            var productName = res[answer.item].product_name
            var productPrice = res[answer.item].price
            var stock_quanity = res[answer.item].stock_quanity
    
            itemQuery(customerItem, productName, customerQuanity, productPrice, stock_quanity)
        })
    }) 
}
    
  


function itemQuery(id, product, quanity, price, stock) {

    var updatedStock = stock - quanity;
    var total = price * quanity;

    if(updatedStock >= 0) {
        connection.query("UPDATE products SET stock_quanity = ? WHERE item_id = ?", [updatedStock, id], function(err, res) {
            if (err) throw err;
            console.log("\nYour Order Summary: \n\n " + product + "     Qty: " + quanity + "\n\n Total: $" + total)
        })

    }else {
        console.log("\nSorry, Bamazon has a insufficient quanity to fulfill your order.\n")
        displayInventory();
    }

    connection.end();
}