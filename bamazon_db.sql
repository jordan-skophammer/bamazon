create database bamazon_db;

use bamazon_db;

create table products(
	item_id int not null auto_increment,
    product_name varchar(20) not null,
    department_name varchar(20) not null,
    price decimal(12,2) not null,
    stock_quanity int not null default 0,
    primary key (item_id)
    );
    
insert into products (product_name, department_name, price, stock_quanity)
values ("Headphones", "Electronics", 129.95, 59);

insert into products (product_name, department_name, price, stock_quanity)
values ("Running Shoes", "Apparel", 89.50, 23);

insert into products (product_name, department_name, price, stock_quanity)
values ("Bag of Twizlers", "Food", 19.99, 100);

insert into products (product_name, department_name, price, stock_quanity)
values ("HDTV", "Electronics", 1200.59, 356);

insert into products (product_name, department_name, price, stock_quanity)
values ("Batman Costume", "Apparel", 45.99, 12);

insert into products (product_name, department_name, price, stock_quanity) 
values ("Mountain Bike", "Sporting Goods", 529.49, 42);

insert into products (product_name, department_name, price, stock_quanity)
values ("Laundry Basket", "Home Goods", 12.50, 1050);

insert into products (product_name, department_name, price, stock_quanity)
values ("Apple MacBook", "Computers", 1350.99, 233);

insert into products (product_name, department_name, price, stock_quanity)
value ("Nails 100 Count", "Hardware", 8.99, 88);

insert into products (product_name, department_name, price, stock_quanity)
value ("Blue Sofa", "Funiture", 899.00, 3);