export type SaleModel = {
  date_time: string;
  orderID: number;
  charge: number;
  receipt_str?: string;
  chosenSpecialOfferID?: string;
  synchronized?: boolean;
};
