
//TS definition
{
  id: string
  name: string
  type: string

  price: number

  ingredients: lista med strängar

  tags: extra instanceof
    description:
}



export const menu = [
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["vetemjöl", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: {
        state: false,
        amount: ""
      } //lite | medium | mycket
    },

    description: "Rostat vitlöksbröd med örtsmör"
  },
  {
    // id: "starter-1",
    name: "Cheeze Sticks", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 56, // SEK

    ingredients: ["ost", "sesamfrön", "vetemjöl", "kryddor", "ägg", "panko", "olja"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: {
        state: false,
        amount: ""
      } //lite | medium | mycket
    },

    description: "Friterade brödpinnar med ost"
  },
  {
    // id: "starter-1",
    name: "Buffalo wings", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 62, // SEK

    ingredients: ["kyckling", "vitlök", "kryddor", "tomatpure", "olja", "vitvinsvinäger", "honung", "tabasco", "worcestershiresås"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: {
        state: true,
        amount: "medium"
      } //lite | medium | mycket
    },

    description: "Rostat vitlöksbröd med örtsmör"
  },
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: {
        state: false,
        amount: ""
      } //lite | medium | mycket | inte-alls
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }
  {
    // id: "starter-1",
    name: "Vitlöksbröd", //eller använd name som id?
    type: "starter", // starter | main | dessert | dip | drink

    price: 49, // SEK

    ingredients: ["bröd", "vitlök", "smör"],

    tags: {
      vegan: false,
      glutenFree: false,
      spicy: false
    },

    description: "Rostat vitlöksbröd med örtsmör"
  }

]