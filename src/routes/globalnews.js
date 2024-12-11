import express from "express";
import { clientDb  } from "../config/db.js";

const router = express.Router();

router.get("/getData", async (req, res) => {
  try {
    const db = clientDb.db("SIH");
    const collection = db.collection("globalnews");

    const globalNews = await collection.find().toArray();

    res.status(200).json(globalNews);
  } catch (error) {
    console.error("Error fetching state-wise data:", error);
    res.status(500).json({ error: "Failed to fetch state-wise data" });
  }
});


export default router;
