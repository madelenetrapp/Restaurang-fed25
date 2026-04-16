
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

    description: "Toasted garlic bread with a golden surface, generously brushed with herb butter on fresh parsley, garlic and a hint of lemon.",
    // ingredients: ["vetemjöl", "vitlök", "smör"],

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

    description: "Crispy fried breadsticks filled with melted cheese, golden on the outside and wonderfully creamy on the inside. Served piping hot – perfect for sharing (or not)",

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

    description: "Chicken wings glazed with honey and hot buffalo sauce, grilled to a perfectly caramelized surface. Served with crispy celery and a creamy blue cheese dip that balances heat and sweetness.",
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

    description: "Juicy premium burger made from freshly ground prime rib, grilled to a perfectly caramelized surface and topped with aged cheese. Served in a lightly toasted brioche bun with carefully selected toppings and the house's signature dressing - a balanced and elegant interpretation of a modern classic.",
    // ingredients: tbh?

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

    description: "Antoninas’ plant-based patty with a perfectly seared crust, layered with dairy-free cheese and a vibrant, slightly spicy herb dressing. Served in a toasted bun with fresh, crisp toppings – a modern, flavor-driven vegan option with depth and balance",


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

    description: "Maddes’ tender, juicy chicken fillet, perfectly seasoned and grilled to a golden finish, layered with melted cheese and a delicate herb-infused dressing. Served in a toasted brioche bun with crisp, fresh toppings – a refined balance of flavor and texture.",

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

    description: "Valentinos’ premium beef patty, expertly smashed and seared for a deep caramelized crust, layered with aged cheese and a rich, savory house dressing. Served in a toasted brioche bun with carefully selected toppings – a bold yet refined expression of the classic beef burger.",


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

    description: "Henriks’ a finely ground prime beef patty, seared to a rich, caramelized finish and layered with melted aged cheese. Finished with a smooth, house-crafted dressing and served in a lightly toasted brioche bun with crisp, balanced toppings – a modern, elevated take on the classic burger.",


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

    description: "Arnors’ a premium beef patty, expertly seared for a rich caramelized crust and layered with melted cheese. Served in a soft gluten-free bun with fresh, carefully selected toppings and a refined house dressing – a balanced, full-flavor experience without compromise.",


    tags: {
      vegan: false,
      glutenFree: true,
      spicy: 0
    }
  },

]