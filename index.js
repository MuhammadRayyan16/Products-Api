const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(bodyParser.json());


let products = [
    { id: 1, title: "iPhone 11 Pro", price: 999, description: "Apple iPhone 11 Pro with A13 Bionic chip, triple-camera system, and 5.8-inch Super Retina display.", image: "https://tse4.mm.bing.net/th?id=OIP.hxntYXGXdm66L_u521_lpAAAAA&pid=Api&P=0&h=220" },
    { id: 2, title: "MacBook Air", price: 1200, description: "Apple MacBook Air with M1 chip, 13.3-inch Retina display, and 8GB RAM.", image: "https://tse4.mm.bing.net/th?id=OIP.CxR7xx2DWXxctoX42eUzfAHaEK&pid=Api&P=0&h=220" },
    // Add more products as needed...
];


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/products', (req, res) => {
    res.json(products);
});


app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.json(newProduct);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
