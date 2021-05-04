export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type OrderItem = {
  name: string;
  price: number;
};

export type Resturant = {
  id: string;
  name: string;
  address: string;
  openingHours: string[];
  imageUrl: string;
}

export type MenuItem = {
  category: string;
  changes: string[];
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number
}

export type Menu = {
  id: string;
  items: MenuItem[];
}