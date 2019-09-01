import Product from '../models/product';

const PRODUCTS = [
  new Product(
    "p1",
    "קומקום חשמלי",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448511/y1t2xmx6nlimn4xytegg.png",
    59.99
  ),
  new Product(
    "p2",
    "מצנם",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448562/u7ei49hutr9sbuvo307j.jpg",
    39.99
  ),
  new Product(
    "p3",
    "טוסטר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448544/d1kphtifmazvetkluooz.jpg",
    49.99
  ),
  new Product(
    "p4",
    "מיקסר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448617/e2l2sqa6kom8xu7rodru.jpg",
    45.00
  ),
  new Product(
    "p5",
    "בלנדר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448586/marwn2hghpablzdvrzht.jpg",
    99.99
  ),
];

export default PRODUCTS;
