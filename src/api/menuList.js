
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
    name: "Vitlöksbröd",
    type: "Starter",

    price: 49,

    description: "Toasted garlic bread with a golden crust, generously brushed with herb butter made from fresh parsley, garlic, and a hint of lemon. Crisp on the outside, soft on the inside – a flavorful classic elevated with wheat flour, butter, and aromatic garlic",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Cheeze Sticks",
    type: "Starter",

    price: 56,

    description: "Crispy golden cheese sticks made from seasoned wheat flour dough, filled with rich, melted mozzarella and lightly seasoned with a touch of herbs. Crunchy on the outside, irresistibly gooey on the inside – a refined take on a classic comfort favorite",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Buffalo wings",
    type: "Starter",

    price: 62,

    description: "Honey-glazed Buffalo wings, crafted from tender chicken and infused with garlic, spices, and tomato purée. Finished with a bold blend of oil, white wine vinegar, Tabasco, Worcestershire sauce, and a touch of honey – delivering a refined balance of heat, tang, and subtle sweetness",
    // ingredients: ["kyckling", "vitlök", "kryddor", "tomatpure", "olja", "vitvinsvinäger", "honung", "tabasco", "worcestershiresås"],

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

    description: "Andreas’ Spicy Smashed Burger – a bold, flame-seared smashed patty with crispy edges, layered with melted cheese and a fiery house-made chili sauce. Served in a toasted bun with carefully selected toppings – an intense, heat-forward experience with deep, savory character",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 3
    }
  },
  {
    name: "Antoninas Green Ember Vegan Burger",
    type: "main",

    price: 210,

    description: "– a plant-based patty with a perfectly seared crust, layered with dairy-free cheese and a vibrant, slightly spicy herb dressing. Served in a toasted bun with fresh, crisp toppings – a modern, flavor-driven vegan option with depth and balance",
   

    tags: {
      vegan: true,
      glutenFree: false,
      spicy: 2
    }
  },

    {
    name: "Maddes Golden Herb Chicken Burger",
    type: "main",

    price: 267,

    description: "– a tender, juicy chicken fillet, perfectly seasoned and grilled to a golden finish, layered with melted cheese and a delicate herb-infused dressing. Served in a toasted brioche bun with crisp, fresh toppings – a refined balance of flavor and texture.",
    // ingredients: tbh?

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
    {
    name: "Valentinos Midnight Reserve Beef Burger",
    type: "main",

    price: 298,

    description: "– a premium beef patty, expertly smashed and seared for a deep caramelized crust, layered with aged cheese and a rich, savory house dressing. Served in a toasted brioche bun with carefully selected toppings – a bold yet refined expression of the classic beef burger.",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 1
    }
  },

      {
    name: "Henriks Signature Prime Beef Burger",
    type: "main",

    price: 298,

    description: "– a finely ground prime beef patty, seared to a rich, caramelized finish and layered with melted aged cheese. Finished with a smooth, house-crafted dressing and served in a lightly toasted brioche bun with crisp, balanced toppings – a modern, elevated take on the classic burger.",


    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

        {
    name: "Arnors Pure Craft Gluten-Free Burger",
    type: "main",

    price: 298,

    description: "– a premium beef patty, expertly seared for a rich caramelized crust and layered with melted cheese. Served in a soft gluten-free bun with fresh, carefully selected toppings and a refined house dressing – a balanced, full-flavor experience without compromise.",


    tags: {
      vegan: false,
      glutenFree: true,
      spicy: 0
    }
  },

]