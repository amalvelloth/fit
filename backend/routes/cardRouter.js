const express = require("express");
const {
  getAllCards,
  getCardById,
  addCard,
  updateCardColumn,
  deleteCard
} = require("../controllers/cardController");

const router = express.Router();

router.get("/", getAllCards);
router.get("/:id", getCardById);
router.post("/", addCard);
router.put("/:id", updateCardColumn);
router.delete("/:id", deleteCard);

module.exports = router;