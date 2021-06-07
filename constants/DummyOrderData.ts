import { MenuItem, OrderItem } from "../types";

let MenuData:MenuItem[] = [
  {
    name:"Broad Bean Hummus",
    category:"Entrees",
    changes: ["No pitas"],
    description:"Hummus with hot broad beans seasoned with parsley, hot paprika, cumin and olive oil served with homemade garlic-lemon sauce on the side",
    id:"1",
    imageUrl:"https://wolt-menu-images-cdn.wolt.com/menu-images/1a0a6ff8-fc96-11e8-88d8-0a5864604d09__DSC6739.jpeg",
    price:40

  },
  {
    name: "Large Salad",
    category:"Entrees",
    description: "Cucumber, tomato, white cabbage, red cabbage and parsley",
    changes: ["No cucumbers", "No tomatos", "No parsley"],
    imageUrl:
      "https://wolt-menu-images-cdn.wolt.com/menu-images/9f080744-fc94-11e8-b551-0a5864601a5c__DSC6820.jpeg",
    price: 23.5,
    id:"2"
  },
  {
    name: "The Artichoke",
    category:"Main Course",
    description:"Brown butter, garlic, parmiggiano, oregano, white wine and parsle",
    changes: ["No butter", "No oregano"],
    imageUrl:
      "https://wolt-menu-images-cdn.wolt.com/menu-images/bc338324-73fe-11ea-909b-0a5864623c05______________________.jpeg",
    price: 51,
    id:"3"
  },
  {
    name: "Mushroom Risotto",
    category:"Main Course",
    description:"With truffles paste, leek, cream and white wine",
    changes: ["No cream", "Without white wine"],
    imageUrl:
    "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/694ff592-e0ba-11ea-9829-32cd0b1c3b44______________.jpeg",
    price: 51,
    id:"4"
  },
  {
    category:"Main Course",
    name: "Red Hot",
    description: "Tomatoes, chilli and confit onion with red wine",
    changes: ["No onions"],
    imageUrl:
      "https://wolt-menu-images-cdn.wolt.com/menu-images/5c3333acaf2ae7000981f12c/5d511308-e0b9-11ea-9b04-960c7043b1e8__________.jpeg",
    price: 41,
    id:"5"
  },
  {
    category:"Deserts",
    name: "Muhallebi",
    description: "Cream, peanuts, coconut and rose water sauce milky",
    changes: ["No peanuts", "No coconut"],
    imageUrl:
      "https://wolt-menu-images-cdn.wolt.com/menu-images/5f82e795e0794047d8c1ec86/9be6d9ba-12bc-11eb-bab0-72e011ad79f6_____.jpeg",
    price: 10,
    id:"6"
  }
];

export default MenuData;
