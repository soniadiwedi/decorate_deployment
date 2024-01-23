const express=require('express')
const colors=require('colors')
const morgan =require('morgan')
const cors =require('cors')
const connectDB = require('./config/db')
require("dotenv").config()
const { router: authRoutes } = require('./routes/authRoute');
const { router: categoryRoutes } = require('./routes/categoryRoutes');
const { router: productRoutes } = require('./routes/productRoutes');



//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on dev mode on port ${PORT}`.bgCyan
      .white
  );
});
