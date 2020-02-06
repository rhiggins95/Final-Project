const express = require("express");
const path = require("path");

const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/user", require("./routes/image"));
app.use("/api/user", require("./routes/payment"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res, sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
