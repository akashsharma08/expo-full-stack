import express from "express";
const app = express();
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Health Get api is UP working!!" });
});

app.listen(3000, () => console.log("Server is running on port 3000✅"));
