import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Mensaje guardado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al guardar" });
  }
});

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener" });
  }
});

export default router;
