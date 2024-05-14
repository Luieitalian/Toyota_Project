import {ProductModel} from './ProductModel';

export type CartProductModel = {
  prod: ProductModel;
  _cart_amount: number;
};
