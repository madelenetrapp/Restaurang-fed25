
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
  // {
  //   name: "",
  //   type: "",

  //   price: ,

  //   description: "",
  //   // ingredients: tbh?

  //   tags: {
  //     vegan: false,
  //     glutenFree: false,
  //     spicy: 0
  //   }
  // },

]