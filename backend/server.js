const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: [
    "https://resicode.com",
    "https://www.resicode.com",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));


app.use(express.json());


app.use("/api/contact", require("./routes/contactRoutes"));


app.get("/", (req, res) => {
  res.send("RESICODE Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
