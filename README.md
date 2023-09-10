## E-Commerce app

A node.js app for Ecommerce chat.

## Server features

1. Connects to the MysqlDB using sequelize for CRUD operations.
2. Used Express server to serve API endpoints.

## API endpoints

1. **/add-product**  - To add admin products.
2. **/products**  - To get admin products.
3. **/edit-product**  - To edit admin products.
4. **/delete-product**  - To delete admin products.
5. **/products**  - To get shop products.
6. **/products/:productId**  - To get shop product by it's id.
7. **/cart**  - To get the user cart.
8. **/cart-delete-item**  - TO delete cart item.
9. **/orders**  - To order.

## Dependencies

* Cors (Any origin works in our API)
* Express
* sequelize(to connect to mysql)
* Mysql (schemas)
* dotenv (get the .env file working with environment variables)
* body parser(to parse the incoming body requests)
 
