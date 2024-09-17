const express = require('express');

const { connectdb } = require('./config/connection.js');
const User = require('./Models/User');

require('dotenv').config();

const app = express();


connectdb();


app.get('/api/v1/fetch', async (req, res) => {
    try {
        
        const response = await fetch('https://api.wazirx.com/api/v2/tickers');
        const data = await response.json();

    
        const tickerArray = Object.values(data).slice(0, 10);

        
        const savedItems = await Promise.all(tickerArray.map(async (item) => {
            
            const convertedItem = {
                base_unit: item.base_unit,
                quote_unit: item.quote_unit,
                low: parseFloat(item.low),
                high: parseFloat(item.high),
                last: parseFloat(item.last),
                type: item.type,
                open: parseFloat(item.open),
                volume: parseFloat(item.volume),
                sell: parseFloat(item.sell),
                buy: parseFloat(item.buy),
                at: item.at, 
                name: item.name
            };

            
            const newUser = new User(convertedItem);

        
            return await newUser.save();
        }));

        // Send a success response
        res.status(200).json({
            message: 'Data successfully saved!',
            savedItems
        });

        
    } catch (error) {
        console.error(error);  
        res.status(500).json({
            message: 'Error fetching or saving data'
        });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server is started on port ${process.env.PORT}`);
});
