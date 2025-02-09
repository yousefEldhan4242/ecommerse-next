export default interface Product {
  id: number;
  name: string;
  currentPrice: number;
  quantity: number;
  title: string;
  rating: number;
  discount: boolean;
  availableItems: string;
  previousPrice: string;
  color: string;
  description: string;
  price:{
    value:string
  }
  image:string;
  asin:string;
  main_image:{
    link:string
  };
  images:ProductImage[]
}
// export interface ProductByAsin{

// }

interface ProductImage {
    link:string
  
}

export interface ProductCardInterface {
  product: Product;
  cardWidth: boolean;
  showOnlyProductsWithSale?: boolean;
  newBtn?: boolean;
  showBtns?: boolean;
  isInWhishList?: boolean;
  isInProductsPage?: boolean;
  showDiscount?: boolean;
  showPrevPrice?: boolean;
}

export interface CategoryInterface {
  title: string;
  name: string;
  icon?: React.ReactElement;
}


export interface ChildNavBarProps {
  isInSignUpOrLogIn?: boolean;
  whishList: object[];
  cart: object[];
  isLoggedIn: boolean;
  searchBarRef: React.RefObject<HTMLInputElement>;
}