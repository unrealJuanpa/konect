import express from "express"
import { getAllContactos, getContactos, createContactos, updateContactos, deleteContactos } from "../controllers/ContactosController.js"

const router = express.Router()

router.get("/", getAllContactos);
router.get("/:id", getContactos);
router.post("/", createContactos);
router.put("/:id", updateContactos);
router.delete("/:id", deleteContactos);

export default router

