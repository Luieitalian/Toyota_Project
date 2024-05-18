export type SpecialOfferModel = {
  id: string;
  name: string;
  applicable_products: {all: boolean; products?: string[]};
  type: {name: string};
};
