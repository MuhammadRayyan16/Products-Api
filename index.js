

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let products = [
    { id: 1, title: "iPhone 11 Pro", price: 999, description: "Apple iPhone 11 Pro with A13 Bionic chip, triple-camera system, and 5.8-inch Super Retina display.", image: "https://tse4.mm.bing.net/th?id=OIP.hxntYXGXdm66L_u521_lpAAAAA&pid=Api&P=0&h=220" },
    { id: 2, title: "MacBook Air", price: 1200, description: "Apple MacBook Air with M1 chip, 13.3-inch Retina display, and 8GB RAM.", image: "https://tse4.mm.bing.net/th?id=OIP.CxR7xx2DWXxctoX42eUzfAHaEK&pid=Api&P=0&h=220" },
    { id: 3, title: "Samsung Galaxy S21", price: 850, description: "Samsung Galaxy S21 with Exynos 2100, 6.2-inch AMOLED display, and 128GB storage.", image: "https://tse4.mm.bing.net/th?id=OIP.i-VJnZag7h4IUTNb6a-7CAHaE7&pid=Api&P=0&h=220" },
    { id: 4, title: "Dell XPS 13", price: 1300, description: "Dell XPS 13 with Intel i7, 13.4-inch display, and 16GB RAM.", image: "https://tse3.mm.bing.net/th?id=OIP.v_ThjZ5ZH5pLkNzduGeFzgHaE8&pid=Api&P=0&h=220" },
    { id: 5, title: "Sony WH-1000XM4", price: 350, description: "Sony WH-1000XM4 noise-canceling wireless headphones.", image: "https://tse3.mm.bing.net/th?id=OIP.KeE0M-d206KUGLWZJB7oWgHaFj&pid=Api&P=0&h=220" },
    { id: 6, title: "Nintendo Switch", price: 299, description: "Nintendo Switch gaming console with detachable Joy-Con controllers.", image: "https://tse2.mm.bing.net/th?id=OIP.DoWjZW-h8ivZ-F93FKYORwHaEy&pid=Api&P=0&h=220" },
    { id: 7, title: "GoPro Hero 9", price: 400, description: "GoPro Hero 9 action camera with 5K video recording and HyperSmooth stabilization.", image: "https://tse3.mm.bing.net/th?id=OIP.Z_2lRzlte4TKKEDYhATUpAHaEK&pid=Api&P=0&h=220" },
    { id: 8, title: "Bose SoundLink", price: 199, description: "Bose SoundLink Bluetooth speaker with deep, powerful sound.", image: "https://tse1.mm.bing.net/th?id=OIP.qC7jTsyppCeBhG3UGUR8sgHaE8&pid=Api&P=0&h=220" },
    { id: 9, title: "Amazon Echo Dot", price: 50, description: "Amazon Echo Dot with Alexa voice assistant.", image: "https://tse3.mm.bing.net/th?id=OIP.Ik0WzFRarbxLZsznXVRitwHaFZ&pid=Api&P=0&h=220" },
    { id: 10, title: "Apple Watch Series 6", price: 399, description: "Apple Watch Series 6 with blood oxygen monitoring and ECG app.", image: "https://tse4.mm.bing.net/th?id=OIP.JFC1t9kN8asZxMWlzJJSzgHaEK&pid=Api&P=0&h=220" }
];

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










