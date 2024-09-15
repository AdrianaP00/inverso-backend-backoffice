const Menu = require("../models/menu-model");

const getMenu = async (req, res) => {
  try {
    const allMenus = await Menu.findOne({ active: true })
      .populate({
        path: 'categories', 
        populate: {
          path: 'items',  
        },
      });

    if (!allMenus) {
      return res.status(404).json({ message: 'No se encontró un menú activo.' });
    }

    return res.status(200).json(allMenus);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el menú', error });
  }
};

module.exports = { getMenu };
