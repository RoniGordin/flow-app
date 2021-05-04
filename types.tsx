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

export type Resturant = {
  
}