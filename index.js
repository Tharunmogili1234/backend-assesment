// index.js
const express = require('express');
// import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, Express Innovator!'));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
