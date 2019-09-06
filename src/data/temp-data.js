import Product from '../models/product';

export const CATEGORIES = [
  { id: "1" ,title: "כלי פלסטיק", iconName: "archive", color: "#f5428d" },
  { id: "2" ,title: "חד פעמי", iconName: "utensils", color: "#f54242" },
  { id: "3" ,title: "מטבח ואפייה", iconName: "utensil-spoon", color: "#41d95d" },
  { id: "4" ,title: "כלי עבודה", iconName: "tools", color: "#368dff" },
  { id: "5" ,title: "מוצרי ניקיון", iconName: "spray-can", color: "#9eecff" },
  { id: "6" ,title: "מוצרי חשמל", iconName: "charging-station", color: "#f5d142" },
  { id: "7" ,title: "ריהוט ונוי", iconName: "chair", color: "#b9ffb0" },
  { id: "8" ,title: "טקסטיל", iconName: "bed", color: "#ffc7ff" },
  { id: "9" ,title: "מוצרי אמבט", iconName: "shower", color: "#47fced" },
  { id: "10" ,title: "צעצועים", iconName: "basketball-ball", color: "#f5a442" },
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

export const IMAGES = [
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i244.jpg",
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i3.jpg",
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i14.jpg",
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i13.jpg",
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i5.jpg",
  "https://mahseney-hastock-92765.herokuapp.com/resources/img/i7.jpg",
]

// export const IMAGES = [
//   "https://i.ytimg.com/vi/KCpWzgXALLg/maxresdefault.jpg",
//   "https://res.cloudinary.com/exite/image/upload/f_auto/exitetogo/www.secal.co.il/gallery/sitepics/3AC57C00-4439-728A-409C-5E1411691B40.jpg",
//   "https://www.kipa.co.il/userFiles/296656_94aa0597694f124cd73bdf355bacf879.jpg",
//   "https://www.21.tv/ArutzV2Images/PICS_500X500/48573.jpg",
//   "https://www.hashikma-rishon.co.il/wp-content/uploads/2018/11/5f215cff49f7f1ab9b60094d465d378f-e1543435275773.jpg",
//   "https://anima-uploads.s3.amazonaws.com/5bf2d35eaf33d2000b99b102/5d21d25581549dad72fcb2c0/5d21d256aae9d73c55860b5f/img/artboard320-imgcat1@2x.jpg",
// ]
