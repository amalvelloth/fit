const express = require("express");
const { getAllCards, addCard, updateCardColumn } = require("../controllers/cardController");
const cardController = require("../controllers/cardController");

const router = express.Router();

router.get("/", getAllCards);
router.post("/", addCard);

router.delete("/:id", cardController.deleteCard);

module.exports = router;