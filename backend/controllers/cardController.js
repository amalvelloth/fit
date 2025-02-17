const Card = require("../models/Card");

// Get all cards
const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new card
const addCard = async (req, res) => {
  const card = new Card({
    title: req.body.title,
    column: req.body.column,
  });

  try {
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCardColumn = async (req, res) => {
  try {
      const { cards } = req.body;  // Changed to match your frontend data structure
      
      // Update each card in the database
      const updatePromises = cards.map(card => 
          Card.findByIdAndUpdate(
              card.id,
              { column: card.column },
              { new: true }
          )
      );
      
      await Promise.all(updatePromises);
      res.json({ message: 'Cards updated successfully' });
  } catch (error) {
      console.error('Error updating cards:', error);
      res.status(400).json({ error: error.message });
  }
};

const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCard = await Card.findByIdAndDelete(id);
        
        if (!deletedCard) {
            return res.status(404).json({ error: "Card not found" });
        }
        
        res.json({ message: 'Card deleted successfully' });
    } catch (error) {
        console.error('Error deleting card:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  getAllCards,
  addCard,
  updateCardColumn,
  deleteCard
};