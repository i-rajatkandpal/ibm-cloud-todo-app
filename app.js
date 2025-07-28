const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static('public'));

// (Optional) Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
