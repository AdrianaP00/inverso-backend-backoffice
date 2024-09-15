const Category = require("../models/category-model");

const getCategory = async (req, res) => {
  try {
    const allCategories = await Category.find();

    if (allCategories.length === 0) {
      return res.status(404).json({ message: 'No se encontraron categorías.' });
    }

    return res.status(200).json(allCategories);
  } catch (error) {
    console.error('Error al obtener categorías:', error); 
    return res.status(500).json({ message: 'Error al obtener categorías.', error }); 
  }
};

module.exports = { getCategory };
