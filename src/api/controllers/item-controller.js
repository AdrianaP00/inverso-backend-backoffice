const Item = require("../models/items-model");

const getItem = async (req, res) => {
  try {
    const allItems = await Item.find();

    if (allItems.length === 0) {
      return res.status(404).json({ message: 'No se encontraron ítems.' });
    }

    return res.status(200).json(allItems);
  } catch (error) {
    console.error('Error al obtener ítems:', error); 
    return res.status(500).json({ message: 'Error al obtener ítems.', error });
  }
};

module.exports = { getItem };
