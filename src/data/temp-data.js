import Product from '../models/product';

export const CATEGORIES = [
  { id: "1" ,title: "כלי פלסטיק", iconName: "archive" },
  { id: "2" ,title: "חד פעמי", iconName: "utensils" },
  { id: "3" ,title: "מטבח ואפייה", iconName: "utensil-spoon" },
  { id: "4" ,title: "כלי עבודה", iconName: "tools" },
  { id: "5" ,title: "מוצרי ניקיון", iconName: "spray-can" },
  { id: "6" ,title: "מוצרי חשמל", iconName: "charging-station" },
  { id: "7" ,title: "ריהוט ונוי", iconName: "chair" },
  { id: "8" ,title: "טקסטיל", iconName: "bed" },
  { id: "9" ,title: "צעצועים", iconName: "basketball-ball" },
]

export const PRODUCTS = [
  new Product(
    "מוצרי חשמל",
    "p1",
    "קומקום חשמלי",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448511/y1t2xmx6nlimn4xytegg.png",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    59.99
  ),
  new Product(
    "מוצרי חשמל",
    "p2",
    "מצנם",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448562/u7ei49hutr9sbuvo307j.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    39.99
  ),
  new Product(
    "מוצרי חשמל",
    "p3",
    "טוסטר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448544/d1kphtifmazvetkluooz.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    49.99
  ),
  new Product(
    "מוצרי חשמל",
    "p4",
    "מיקסר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448617/e2l2sqa6kom8xu7rodru.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    49.99
  ),
  new Product(
    "מוצרי חשמל",
    "p5",
    "בלנדר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448586/marwn2hghpablzdvrzht.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    99.99
  ),
  new Product(
    "כלי עבודה",
    "p6",
    "פטיש",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448260/ncxkzcwy5aam19lkcnjr.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    14.99
  ),
  new Product(
    "כלי עבודה",
    "p7",
    "פלייר",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448219/ry3wp9ohrez3ro6wu3xk.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    9.99
  ),
  new Product(
    "כלי עבודה",
    "p8",
    "מברג",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448234/yyv5riqdt4fr6pkxztwy.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    4.99
  ),
  new Product(
    "כלי עבודה",
    "p9",
    "מפתח שוודי",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448290/ujhtlbpvqebpyjsjdyt0.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    5.99
  ),
  new Product(
    "כלי עבודה",
    "p10",
    "מזמרה",
    "https://res.cloudinary.com/my-gallery/image/upload/v1557448275/yldq35o2sikapt6yknjx.jpg",
    "הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.",
    14.99
  ),
];
