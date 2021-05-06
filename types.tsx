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

export type Order = {
  arrivingTime: string;
  id: string;
  notes: string;
  orderTime: string;
  restaurantId: string;
  status: string;
  userId: string;
}

export type ItemInOrder = {
  comments: string[];
  id: string;
  orderId: string;
  selectedChanges: string[];
}

export type User = {
  address: string;
  id: string;
  isAdmin: boolean;
  username: string;
}