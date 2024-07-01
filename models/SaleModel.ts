import {CartProductModel} from './CartProductModel';

export type SaleModel = {
  date_time: string;
  date_obj: Date;
  orderID: number;
  charge: number;
  receipt_str?: string;
  chosenSpecialOfferID?: string;
  synchronized?: boolean;
  isReturned?: boolean;
  cart?: CartProductModel[];
};
