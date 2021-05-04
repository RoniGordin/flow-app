import { OrderItem } from "../types";

let data = [
  {
    name: "Entrees",
    items: [
      {
        name: "Broad Bean Hummus",
        description:
          "Hummus with hot broad beans seasoned with parsley, hot paprika, cumin and olive oil served with homemade garlic-lemon sauce on the side",
        possibleChanges: ["No pitas"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/1a0a6ff8-fc96-11e8-88d8-0a5864604d09__DSC6739.jpeg",
        price: 40,
      },
      {
        name: "Large Salad",
        description: "Cucumber, tomato, white cabbage, red cabbage and parsley",
        possibleChanges: ["No cucumbers", "No tomatos", "No parsley"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/9f080744-fc94-11e8-b551-0a5864601a5c__DSC6820.jpeg",
        price: 23.5,
      },
    ],
  },
  {
    name: "Main Courses",
    items: [
      {
        name: "The Artichoke",
        description:
          "Brown butter, garlic, parmiggiano, oregano, white wine and parsle",
        possibleChanges: ["No butter", "No oregano"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/bc338324-73fe-11ea-909b-0a5864623c05______________________.jpeg",
        price: 51,
      },
      {
        name: "Mushroom Risotto",
        description: "With truffles paste, leek, cream and white wine",
        possibleChanges: ["No cream", "Without white wine"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/694ff592-e0ba-11ea-9829-32cd0b1c3b44______________.jpeg",
        price: 67,
      },
      {
        name: "Red Hot",
        description: "Tomatoes, chilli and confit onion with red wine",
        possibleChanges: ["No onions"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/5d511308-e0b9-11ea-9b04-960c7043b1e8__________.jpeg",
        price: 41,
      },
    ],
  },
  {
    name: "Deserts",
    items: [
      {
        name: "Muhallebi",
        description: "Cream, peanuts, coconut and rose water sauce milky",
        possibleChanges: ["No peanuts", "No coconut"],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/5f82e795e0794047d8c1ec86/9be6d9ba-12bc-11eb-bab0-72e011ad79f6_____.jpeg",
        price: 10,
      },
      {
        name: "Biscuit Cake",
        description:
          "Vanilla cream, crispy chocolate and chocolate ganache icing",
        possibleChanges: [],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/e4b0e1b6-e0b9-11ea-af26-4a62de29460d________________.jpeg",
        price: 35,
      },
      {
        name: "Cheesecake",
        description: "Cheesecake with a layer of white chocolate on top",
        possibleChanges: [],
        imageSrc:
          "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/4c5c6d58-e0ba-11ea-aa0c-220072c04b84_________________.jpeg",
        price: 37,
      },
    ],
  },
];

export default data;
