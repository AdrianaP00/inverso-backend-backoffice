const mongoose = require('mongoose');
const Menu = require('./models/Menu');
const Category = require('./models/Category');
const Item = require('./models/Item');

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.error("Error al conectar a MongoDB:", err));

// Datos de los items y categorías
const montanare = {
    title: "Perfectas para compartir",
    items: [
        {
            name: "‘LA MONTANARA’",
            description: "Pizza Frita con salsa de Tomate San Marzano y Parmigiano",
            alergenics: ["gluten"],
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/LA_MONTANARA_kj1rch.jpg",
            price: 10.5,
        },
        {
            name: "LA PEPPERONI",
            description: "Pizza Frita con crema de Ricotta y Spianata Calabrese",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927370/inverso-madrid/2024-MAY/comida/LA_PEPPERONI.jpg",
            alergenics: ["gluten", "lactosa", "cerdo", "frutos-secos"],
            price: 13,
        },
        {
            name: "LA FRESCA",
            description: "Pizza Frita con Tomate Beefsteak y Mayonesa de Albahaca",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927345/inverso-madrid/2024-MAY/comida/LA_FRESCA.jpg",
            alergenics: ["gluten", "lactosa"],
            price: 11,
        },
    ],
};

const caprichos = {
    title: "¿Un capricho para acompañar tu cerveza?",
    items: [
        {
            name: "UOVO & POMODORO",
            description: "Huevo cocido , Mayonesa de Tomate confit , Pane Guttiau",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927283/inverso-madrid/2024-MAY/comida/UOVO_POMODORO.jpg",
            alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
            price: 5.5,
        },
        {
            name: "CANNOLO TONNATO",
            description: "Cannolo crujiente relleno de Crema de Atún, Anchoas, Alcaparras y Tomate",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927352/inverso-madrid/2024-MAY/comida/CANNOLO_TONNATO.jpg",
            alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
            price: 7.5,
        },
        {
            name: "CROCCHETTA CACIO PEPE & LIMONE",
            description: "Croquetas de Queso Pecorino y Pimienta negra, Gel de limón",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927358/inverso-madrid/2024-MAY/comida/CROCCHETTA.jpg",
            alergenics: ["lactosa", "frutos-secos"],
            price: 7,
        },
    ],
};

const tapas = {
    title: "Classic Italian Tapas",
    items: [
        {
            name: "Tortilla de Pasta",
            description: "Tortilla de Spaghetti y Salame Napoli.",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833646/inverso-madrid/comida/TORTILLA_DE_PASTA_ayr1nh.jpg",
            alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
            price: 9,
        },
        {
            name: "Polpette",
            description: "Albóndigas en Salsa Tomate, Parmigiano, Ceniza de Pan",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1699833772/inverso-madrid/comida/photo_2023-11-13_01-02-23_lsh91x.jpg",
            alergenics: ["gluten", "cerdo", "lactosa", "huevo"],
            price: 12,
        },
        {
            name: "Burrata d’Estate",
            description: "Burrata de Puglia 200gr con ensalada de tomate y su salsa",
            img: "https://res.cloudinary.com/dlybwinmd/image/upload/v1714927333/inverso-madrid/2024-MAY/comida/BURRATA_D_ESTATE.jpg",
            alergenics: ["lactosa", "frutos-secos"],
            price: 14,
        },
    ],
};

const dolci = {
    title: "Dolci",
    items: [
        {
            name: "Tiramisú",
            description: "Tiramisú clásico con café y cacao",
            price: 6,
        },
        {
            name: "Panna Cotta",
            description: "Panna Cotta con frutos rojos",
            price: 5.5,
        },
    ],
};

const cocktails = {
    title: "Cocktails",
    items: [
        {
            name: "Negroni",
            description: "Gin, Campari, Vermouth Rojo",
            price: 8.5,
        },
        {
            name: "Spritz Aperol",
            description: "Aperol, Prosecco, Soda",
            price: 7,
        },
    ],
};

const bebidas = {
    title: "Bebidas",
    items: [
        {
            name: "Agua Mineral",
            description: "Agua mineral sin gas 500ml",
            price: 2.5,
        },
        {
            name: "Coca Cola",
            description: "Coca Cola clásica",
            price: 3,
        },
    ],
};

const VinosBlancos = {
    title: "Vinos Blancos",
    items: [
        {
            name: "Chardonnay",
            description: "Vino blanco fresco con notas de frutas tropicales",
            price: 18,
        },
        {
            name: "Sauvignon Blanc",
            description: "Vino blanco con aromas cítricos",
            price: 20,
        },
    ],
};

const VinosTintos = {
    title: "Vinos Tintos",
    items: [
        {
            name: "Cabernet Sauvignon",
            description: "Vino tinto robusto con notas de frutas rojas",
            price: 22,
        },
        {
            name: "Tempranillo",
            description: "Vino tinto suave y afrutado",
            price: 19,
        },
    ],
};

const VinosRosado = {
    title: "Vinos Rosado",
    items: [
        {
            name: "Rosado de la Casa",
            description: "Vino rosado suave y refrescante",
            price: 16,
        },
    ],
};

const Prosecco = {
    title: "Prosecco",
    items: [
        {
            name: "Prosecco Brut",
            description: "Prosecco con burbujas finas y sabor seco",
            price: 21,
        },
    ],
};

// Función para crear ítems
const createItems = async (items) => {
    const createdItems = [];
    for (let item of items) {
        const newItem = new Item(item);
        await newItem.save();
        createdItems.push(newItem._id);
    }
    return createdItems;
};

// Función para crear categorías
const createCategory = async (categoryData) => {
    const itemIds = await createItems(categoryData.items);
    const newCategory = new Category({ title: categoryData.title, items: itemIds });
    await newCategory.save();
    return newCategory._id;
};

// Función principal para crear el menú
const createMenu = async () => {
    try {
        // Crea las categorías y los ítems
        const montanareCategoryId = await createCategory(montanare);
        const caprichosCategoryId = await createCategory(caprichos);
        const tapasCategoryId = await createCategory(tapas);
        const dolciCategoryId = await createCategory(dolci);
        const cocktailsCategoryId = await createCategory(cocktails);
        const bebidasCategoryId = await createCategory(bebidas);
        const vinosBlancosCategoryId = await createCategory(VinosBlancos);
        const vinosTintosCategoryId = await createCategory(VinosTintos);
        const vinosRosadoCategoryId = await createCategory(VinosRosado);
        const proseccoCategoryId = await createCategory(Prosecco);

        // Crear menú
        const newMenu = new Menu({
            title: "Menu Italiano",
            categories: [
                montanareCategoryId,
                caprichosCategoryId,
                tapasCategoryId,
                dolciCategoryId,
                cocktailsCategoryId,
                bebidasCategoryId,
                vinosBlancosCategoryId,
                vinosTintosCategoryId,
                vinosRosadoCategoryId,
                proseccoCategoryId,
            ],
            active: true
        });

        await newMenu.save();
        console.log('Menú creado exitosamente');
    } catch (error) {
        console.error("Error al crear el menú:", error);
    } finally {
        mongoose.connection.close();
    }
};

// Ejecuta la función principal
createMenu();
