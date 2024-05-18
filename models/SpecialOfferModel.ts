export type SpecialOfferModel = {
  name: string;
  applicable_products: {all: boolean; products?: string[]};
  type: {name: string};
};
