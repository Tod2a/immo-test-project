const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use('/assets/images', express.static('assets/images'));

const immo = {
    Name: 'Maison de rêve',
    Price: 300000,
    Description: 'Superbe maison avec vue sur la mer',
    Image: 'http://localhost:5050/assets/images/immo1.jpg'
};

// Exemple de route
app.get('/api/immo', (req, res) => {
    res.json(immo);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
