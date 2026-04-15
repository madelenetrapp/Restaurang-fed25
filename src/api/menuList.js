
//TS definition
{
  name: string //DETTA ANVÄNDS SOM IDENTIFIER/ID/Key
  type: string
  // type kan vara ===
  // starter | main | dessert | dip | drink | Ny valfri.

  price: number
  //Innehåller inte strängen SEK så den måste läggas till vid rendering.

  ingredients: //Om ifall att... extra arbete xD

  description: // paragraf om matens innehåll. Bör vara lockade för kunder.

  tags: {
    //vegan: true / false
    //glutenfri: true / false
    //spicy: 0, 1, 2 eller 3 (0 är inte, 1 är lite, 2 är lagom, 3 är mycket)
  }
}



export const menu = [
  {
    name: "Vitlöksbröd",
    type: "starter",

    price: 49,

    description: "Rostat vitlöksbröd med örtsmör",
    // ingredients: ["vetemjöl", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Cheeze Sticks",
    type: "starter",

    price: 56,

    description: "Friterade brödpinnar med ost",

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },
  {
    name: "Buffalo wings",
    type: "starter",

    price: 62,

    description: "Honungs griljerade kyckling vingar med celleri och bluecheese dip",
    // ingredients: ["kyckling", "vitlök", "kryddor", "tomatpure", "olja", "vitvinsvinäger", "honung", "tabasco", "worcestershiresås"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 2
    }
  },
  {
    name: "Andreas spicy smashed burger",
    type: "main",

    price: 298,

    description: "Denna heta börgare är fullpackad med jalapeños, caramelisared lök, tryffelmajo i ett nybakat och rostat brioche bröd.",
    // ingredients: tbh?

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 3
    }
  },
  {
    name: "",
    type: "",

    price: ,

    description: "",
    // ingredients: tbh?

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: 0
    }
  },

]