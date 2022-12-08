export enum ProductTypes {
  NATIONAL_EXPRESS = "nationalExpress",
  NATIONAL = "national",
  REGIONAL_EXP = "regionalExp",
  REGIONAL = "regional",
  SUBURBAN = "suburban",
  BUS = "bus",
  FERRY = "ferry",
  SUBWAY = "subway",
  TRAM = "tram",
  TAXI = "taxi",
}

export type StopProduct = {
  [key in ProductTypes]: boolean;
};

export function productsFromJSON(json: any): StopProduct[] {
  const jsonArray = json?.stopProducts || json || [];
  const stopProducts: StopProduct[] = [];
  if (Array.isArray(jsonArray)) {
    for (const object of jsonArray) {
      const stopProductObject = productFromJSON(object);
      if (stopProductObject) stopProducts.push(stopProductObject);
    }
  }
  return stopProducts;
}

export function productFromJSON(json: any): StopProduct | undefined {
  const jsonObject = json?.stopProduct || json || {};
  let stopProduct: StopProduct | undefined;
  if (typeof jsonObject == "object")
    stopProduct = (jsonObject.id, jsonObject.latitude, jsonObject.description);
  return stopProduct;
}
