const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('Home page. Go to /heroes to know more');
});

app.get('/heroes', (req, res) => {
    // Api sending response as json
    // res.json([{name: 'Bruce'}, {name: 'Clark'}]);
    const newProducts = products.map((product) => {     // Businness logic
        const { id, firstName } = product               // or any operation to
        return { id, firstName };                       // modify the json
    });
    res.json(newProducts);     // Send response as json
});

app.get('/hero/:heroId', (req, res) => {
    // console.log(req.params);    // "params" are parameters added in the requested url (heroId in this case)
    const { heroId } = req.params;  // Destructuring params to be used to run operations
    const singleProduct = products.find((product) => product.id === Number(heroId));
    if (!singleProduct) {
        res.status(404).send('This hero does not exist');   // if statement to check if single product exists
    }
    res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);     // "query" are query parameters added after ('/query?_val1_&_val2_')
    const { search, limit } = req.query;
    let sortedProducts = [...products]      // copying the data using spread operator
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.firstName.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('Not found');
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});