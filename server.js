const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
