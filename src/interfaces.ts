export default interface Product {
  id: number;
  name: string;
  main_image: string;
  currentPrice: number;
  quantity: number;
  title: string;
  rating: number;
  discount: boolean;
  availableItems: string;
  previousPrice: string;
  color: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}

export interface ProductCardInterface {
  product?: Product;
  cardWidth: boolean;
  showOnlyProductsWithSale?: boolean;
  newBtn?: boolean;
  showBtns?: boolean;
  isInWhishList?: boolean;
}
