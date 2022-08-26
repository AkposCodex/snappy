export class Products {
  static productList = [
    {
      id: 1,
      price: 20000,
      packageName: "PAX Daily",
      image: "https://www.horizonpay.ng/assets/img/partner6.png",
      description:
        "You receive ownership of the POS for a single day to to do transactions.",
      qty: 0,
    },
    {
      id: 2,
      price: 50000,
      packageName: "PAX Weekly",
      image: "/src/assets/images/products/POS.png",
      description:
        "You receive ownership of the POS for a single week to to do transactions.",
      qty: 0,
    },
    {
      id: 3,
      price: 72000,
      packageName: "PAX Monthly",
      image: "/src/assets/images/products/POS.png",
      description:
        "You receive ownership of the POS for a single month to to do transactions.",
      qty: 0,
    },
    {
      id: 4,
      price: 30000,
      packageName: "SRS Daily",
      image: "/src/assets/images/products/Payment-Tablet-Terminal.png",
      description:
        "You receive ownership of the POS for a single day to to do transactions.",
      qty: 0,
    },
    {
      id: 5,
      price: 55000,
      packageName: "SRS Weekly",
      image: "/src/assets/images/products/Payment-Tablet-Terminal.png",
      description:
        "You receive ownership of the POS for a single week to to do transactions.",
      qty: 0,
    },
    {
      id: 6,
      price: 80000,
      packageName: "SRS Monthly",
      image: "/src/assets/images/products/Payment-Tablet-Terminal.png",
      description:
        "You receive ownership of the POS for a single month to to do transactions.",
      qty: 0,
    },
  ];

  static getProductList() {
    return this.productList;
  }
}
