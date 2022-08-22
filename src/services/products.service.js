export class ProductService {
  static productList = [
    {
      id: 1,
      productName: "PAX-90 Sturdy POS",
      isSelected: false,
      image: "/src/assets/images/products/POS.png",
      plans: [
        {
          id: 1,
          name: "Daily Rental",
          price: 20000,
          description:
            "You receive ownership of the POS for a single day to to do transactions.",
          isPlanSelected: false,
        },
        {
          id: 2,
          name: "Weekly Rental",
          price: 50000,
          description:
            "You receive ownership of the POS for a week to to do transactions.",
          isPlanSelected: false,
        },
        {
          id: 3,
          name: "Monthly Rental",
          price: 72000,
          description:
            "You receive ownership of the POS for a month to to do transactions.",
          isPlanSelected: false,
        },
      ],
    },
    {
      id: 2,
      productName: "SRS-90 Android POS",
      image: "/src/assets/images/products/Payment-Tablet-Terminal.png",
      isSelected: false,
      plans: [
        {
          id: 1,
          name: "Daily Rental",
          price: 30000,
          description:
            "You receive ownership of the POS for a single day to to do transactions.",
          isPlanSelected: false,
        },
        {
          id: 2,
          name: "Weekly Rental",
          price: 55000,
          description:
            "You receive ownership of the POS for a week to to do transactions.",
          isPlanSelected: false,
        },
        {
          id: 3,
          name: "Monthly Rental",
          price: 80000,
          description:
            "You receive ownership of the POS for a month to to do transactions.",
          isPlanSelected: false,
        },
      ],
    },
  ];

  static getProductList() {
    return this.productList;
  }
}
