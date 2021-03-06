import { List } from "lodash";

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
  description?: string;
  possibleChanges: string[];
  imageSrc:string;
  price: number;
};

export type OrderSummaryItem = {
    changes: Object[],
    name: string,
    price: number,
}

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
  email: string;
  id: string;
  privateName: string;
  lastName: string;
  locale: string;
  fullName: string;
  picture: string;
  verifiedEmail: boolean;
}