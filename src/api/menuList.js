
//TS definition
{
  // name: string //DETTA ANVÄNDS SOM IDENTIFIER/ID/Key
  // type: string
  // type kan vara ===
  // Starter | Main | dessert | dip | drink | Ny valfri.

  // price: number
  //Innehåller inte strängen SEK så den måste läggas till vid rendering.

  // ingredients: //Om ifall att... extra arbete xD

  // description: // paragraf om matens innehåll. Bör vara lockade för kunder.

  // tags: {
  //vegan: true / false
  //glutenfri: true / false
  //spicy: 0, 1, 2 eller 3 (0 är inte, 1 är lite, 2 är lagom, 3 är mycket)
}


export const menuList = [
  {
    name: "Garlic Bread",
    type: "Starter",

    price: 90,

    description: "Toasted garlic bread with a golden crust, brushed with herb butter of parsley, garlic, and a hint of lemon – a classic made with wheat flour, butter, and aromatic garlic",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Cheeze Sticks",
    type: "Starter",

    price: 90,

    description: "Crispy, golden cheese sticks made from seasoned wheat dough, filled with melted mozzarella and a hint of herbs – crunchy on the outside, soft and creamy on the inside",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Buffalo wings",
    type: "Starter",

    price: 162,

    description: "Honey-glazed Buffalo wings made from tender chicken, seasoned with garlic, spices, and tomato, with a kick of Tabasco, vinegar, and a hint of sweetness",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 2
    }
  },
  {
    name: "Spicy Smashed Burger",
    type: "Main",

    price: 298,

    description: "Andreas’ Spicy Smashed Burger – a flame-seared patty with crispy edges, melted cheese, and a bold chili sauce in a toasted bun – rich, savory, and spicy. Served with french fries and garlic aioli dip",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 3
    }
  },
  {
    name: "Green Ember Vegan Burger",
    type: "Main",

    price: 210,

    description: "Antonina’s plant-based burger – a seared patty with dairy-free cheese and a light spicy herb dressing in a toasted bun – fresh, balanced, and full of flavor. Served with french fries and vegan ranch dip",


    tags: {
      vegan: true,
      glutenFree: false,
      spicy: 2
    }
  },

  {
    name: "Golden Herb Chicken Burger",
    type: "Main",

    price: 267,

    description: "Maddes’ grilled chicken burger – a juicy, seasoned fillet with melted cheese and a light herb dressing in a toasted brioche bun – fresh, balanced, and flavorful. Served with french fries and honey mustard dip",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Midnight Reserve Beef Burger",
    type: "Main",

    price: 298,

    description: "Valentinos’ smashed beef burger – a caramelized patty with aged cheese and rich house dressing in a toasted brioche bun – bold, savory, and refined. Served with french fries and truffle mayo dip",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 1
    }
  },

  {
    name: "Signature Prime Beef Burger",
    type: "Main",

    price: 298,

    description: "Henriks’ prime beef burger – a seared patty with aged cheese and smooth house dressing in a toasted brioche bun – rich, balanced, and refined. Served with french fries and garlic aioli dip",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

  {
    name: " Pure Craft Gluten-Free Burger",
    type: "Main",

    price: 298,

    description: "Arnors’ beef burger – a seared patty with melted cheese and house dressing in a soft gluten-free bun – rich, balanced, and full of flavor. Served with french fries and BBQ sauce dip",


    tags: {
      vegan: false,
      glutenFree: true,
      spicy: 0
    }
  },

  {
    name: "Caramel Crème Brûlée",
    type: "Dessert",

    price: 125,

    description: "A silky vanilla custard topped with a crisp, caramelized sugar crust – smooth, rich, and delicately sweet",

    tags: {
      vegan: true,
      glutenFree: true,
      spicy: 0
    }
  },

  {
    name: "Chocolate Mousse",
    type: "Dessert",

    price: 115,

    description: "Smooth, airy chocolate dessert with a rich cocoa depth – light, creamy, and indulgent",

    tags: {
      vegan: true,
      glutenFree: false,
      spicy: 0
    }
  },


  {
    name: "Cheese Board",
    type: "Dessert",

    price: 190,

    description: "Curated selection of fine cheeses served with crisp crackers and seasonal accompaniments – rich, balanced, and flavorful",

    tags: {
      vegan: true,
      glutenFree: false,
      spicy: 0
    }
  },


  {
    name: "Stigbergets Amazing Haze",
    type: "Beer & Cider",

    price: 115,

    description: "(Hazy, citrus) 6.5% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

  {
    name: "Beerbliotek A Moment of Clarity",
    type: "Beer & Cider",

    price: 105,

    description: "(Crisp, hoppy) 5.0% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

  {
    name: "Briska Päron",
    type: "Beer & Cider",

    price: 85,

    description: "(Sweet, fruity) 4.5% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

    {
    name: "Göteborgs Nya Fresh Lemon",
    type: "Beer & Cider",

    price: 85,

    description: "(Fresh, citrus) 4.5% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

  {
    name: "Beerbliotek “404 Alcohol Not Found",
    type: "Beer & Cider",

    price: 75,

    description: "(Hoppy, citrus) 0.5% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

  {
    name: "Ahlafors Apple Cider",
    type: "Beer & Cider",

    price: 65,

    description: "(Fresh, apple) 0.0% 33cl",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

];