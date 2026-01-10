let resList = [
  {
    id: "1",
    resName: "Urban Utopia",
    cuisines: "Biryani, North Indian, Asian",
    rating: "4.5 stars",
    time: "38 Mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4dG3cWJsa-Ti8xnspILPW1BygmLWHRA6dA",
    costForTwo: "₹400 for two",
    promoted: true,
    dishes: [
      {
        sectionName: "Signature Biryanis",
        items: [
          {
            name: "Hyderabadi Chicken Dum Biryani",
            price: "₹220",
            type: "non-veg",
            img: "https://crunchykitchen.com/wp-content/uploads/2021/11/dum-biryani.jpg"
          },
          {
            name: "Royal Mutton Dum Biryani",
            price: "₹280",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcv5MYfzKwVljhmNg6SezmBbwZhO_JR96gQ&s"
          }
        ]
      },
      {
        sectionName: "Starters",
        items: [
          {
            name: "Chicken 65",
            price: "₹180",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7dGQndZwDJKTmzB3dE55UYja2qHm-bchOA&s"
          },
          {
            name: "Paneer Tikka",
            price: "₹160",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQybxEglCFMvPGlyt9sCI0702ySHXeuvJ2Dg&s"
          }
        ]
      },
      {
        sectionName: "Thali & Combos",
        items: [
          {
            name: "Veg Mini Thali",
            price: "₹199",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmoYBxtWNuWxpDbNv7jeY91LPWwDTO9Nw3A&s"
          },
          {
            name: "Chicken Thali",
            price: "₹249",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBMT8yAzyIdvJxAryVXWZhP63eB3cBBVZ8g&s"
          }
        ]
      },
      {
        sectionName: "Cold Drinks",
        items: [
          {
            name: "Coke",
            price: "₹60",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps7YJDJcQJdQfe0FbYZWGgBRjUlgKVjZthg&s"
          },
          {
            name: "Sprite",
            price: "₹60",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps7YJDJcQJdQfe0FbYZWGgBRjUlgKVjZthg&s"
          }
        ]
      },
      {
        sectionName: "Desserts",
        items: [
          {
            name: "Double Ka Meetha",
            price: "₹90",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHpjmf-6lWzOzxaL_kZBfJtknukk1ZnnK_g&s"
          },
          {
            name: "Gulab Jamun",
            price: "₹80",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHpjmf-6lWzOzxaL_kZBfJtknukk1ZnnK_g&s"
          }
        ]
      }
    ]
  },

  {
    id: "2",
    resName: "KFC",
    cuisines: "Fast Food, Chicken",
    rating: "3.6 stars",
    time: "25 Mins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyf10aZrEd3Eag1Fm-KRxaZ_OW3FAy9-m95Q&s",
    costForTwo: "₹500 for two",
    promoted: false,
    dishes: [
      {
        sectionName: "Signature Burgers",
        items: [
          {
            name: "Classic Zinger Burger",
            price: "₹199",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qQ1JlbVNBaua8dTh1US2xzI8fGT2x3Cdgg&ss"
          }
        ]
      },
      {
        sectionName: "Chicken Buckets",
        items: [
          {
            name: "Hot & Crispy Chicken (6 pcs)",
            price: "₹399",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIVz5rLwxOslMFiflVE4Kp1QoQd1GyJU6VEA&s"
          }
        ]
      },
      {
        sectionName: "Cold Drinks",
        items: [
          {
            name: "Pepsi",
            price: "₹60",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps7YJDJcQJdQfe0FbYZWGgBRjUlgKVjZthg&s"
          }
        ]
      },
      {
        sectionName: "Desserts",
        items: [
          {
            name: "Chocolate Lava Cake",
            price: "₹139",
            type: "veg",
            img: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&"
          }
        ]
      }
    ]
  },

  {
    id: "3",
    resName: "Burger King",
    cuisines: "Burgers, Fast Food",
    rating: "3.9 stars",
    time: "30 Mins",
    img: "https://cdn.britannica.com/95/193895-050-F52A55E8/restaurant-Burger-King-Warsaw-Poland.jpg",
    costForTwo: "₹450 for two",
    promoted: false,
    dishes: [
      {
        sectionName: "Flame Grilled Burgers",
        items: [
          {
            name: "Chicken Whopper",
            price: "₹179",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rka2Jjz5DzH-ADWUZ8f2p7B4Q-cfE04p8g&s"
          }
        ]
      },
      {
        sectionName: "Sides",
        items: [
          {
            name: "French Fries",
            price: "₹99",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-yEQFkBTlySNv8Y-Vr-sdATg1tzy_kO2rg&s"
          }
        ]
      },
      {
        sectionName: "Cold Drinks",
        items: [
          {
            name: "Coke",
            price: "₹60",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps7YJDJcQJdQfe0FbYZWGgBRjUlgKVjZthg&s"
          }
        ]
      },
      {
        sectionName: "Desserts",
        items: [
          {
            name: "Chocolate Sundae",
            price: "₹89",
            type: "veg",
            img: "https://static01.nyt.com/images/2017/09/10/magazine/10ondessert/10ondessert-jumbo.jpg"
          }
        ]
      }
    ]
  },

  {
    id: "4",
    resName: "Haldiram's",
    cuisines: "North Indian, Sweets",
    rating: "3.9 stars",
    time: "30 Mins",
    img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1802794,resizemode-75,msid-120067625/industry/cons-products/food/a-new-chapter-begins-haldiram-ceo.jpg",
    costForTwo: "₹350 for two",
    promoted: true,
    dishes: [
      {
        sectionName: "Chaat",
        items: [
          {
            name: "Raj Kachori",
            price: "₹120",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_93odyj_OHy3kpq2-cY75IoU_wZODGLuXxw&s"
          }
        ]
      },
      {
        sectionName: "Main Course",
        items: [
          {
            name: "Chole Bhature",
            price: "₹180",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQR_U_PmOvD5A_0_p2xfrj1bfVW2Pj4YHKLg&s"
          }
        ]
      },
      {
        sectionName: "Thali",
        items: [
          {
            name: "North Indian Thali",
            price: "₹220",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcHPqeel_jGEooO4XZoeBswuxs6-U_khGWA&s"
          }
        ]
      },
      {
        sectionName: "Sweets & Desserts",
        items: [
          {
            name: "Rasgulla",
            price: "₹90",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s"
          }
        ]
      }
    ]
  },

  {
    id: "5",
    resName: "Wow! Momo",
    cuisines: "Tibetan, Fast Food",
    rating: "4.3 stars",
    time: "22 Mins",
    img: "https://www.dlfmallofindia.com/Assets/stores/wow%20momo.jpg",
    costForTwo: "₹300 for two",
    promoted: false,
    dishes: [
      {
        sectionName: "Steamed Momos",
        items: [
          {
            name: "Veg Steamed Momos",
            price: "₹99",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9RJ7PR6eSgJ1pUIQ_GmPJ9fYoOsfRPvHcg&s"
          }
        ]
      },
      {
        sectionName: "Fried Momos",
        items: [
          {
            name: "Chicken Fried Momos",
            price: "₹129",
            type: "non-veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0PtBniiMlWgXk85UwcRBM6bYdz3TnxXjEQ&s"
          }
        ]
      },
      {
        sectionName: "Cold Drinks",
        items: [
          {
            name: "Thumbs Up",
            price: "₹60",
            type: "veg",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeXQhjvMzTQ-NBF4inyiOpGjvw6AH5UJJeg&s"
          }
        ]
      }
    ]
  },

{
  id: "6",
  resName: "Domino's Pizza",
  cuisines: "Pizza, Fast Food",
  rating: "3.2 stars",
  time: "28 Mins",
  img: "https://www.investopedia.com/thmb/xSrHq05XS_InZ3xbZSxuGGe8EPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1585008568-5b61f13394be41dcbd7c3fa7928828a3.jpg",
  costForTwo: "₹600 for two",
  promoted: false ,
  dishes: [
    {
      sectionName: "Veg Pizzas",
      items: [
        {
          name: "Margherita",
          price: "₹199",
          type: "veg",
          img: "https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg"
        },
        {
          name: "Farmhouse",
          price: "₹299",
          type: "veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxErcFi8qUAm1sJwv1FUgwLpp8Myc0vfcB-g&s"
        }
      ]
    },
    {
      sectionName: "Non-Veg Pizzas",
      items: [
        {
          name: "Pepper Barbecue Chicken",
          price: "₹349",
          type: "non-veg",
          img: "https://www.dominos.co.in//files/items/MicrosoftTeams-image_(15).png"
        }
      ]
    },
    {
      sectionName: "Cold Drinks",
      items: [
        {
          name: "Coke",
          price: "₹60",
          type: "veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps7YJDJcQJdQfe0FbYZWGgBRjUlgKVjZthg&s"
        }
      ]
    }
  ]
},

{
  id: "7",
  resName: "Biryani Blues",
  cuisines: "Biryani, Mughlai",
  rating: "4.4 stars",
  time: "35 Mins",
  img: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  costForTwo: "₹450 for two",
  promoted: true,
  dishes: [
    {
      sectionName: "Biryanis",
      items: [
        {
          name: "Chicken Biryani",
          price: "₹249",
          type: "non-veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&s"
        }
      ]
    },
    {
      sectionName: "Kebabs",
      items: [
        {
          name: "Chicken Seekh Kebab",
          price: "₹199",
          type: "non-veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5J_FngmU2ilfiCqLj6xyAyEZzFvvN63JIlA&s"
        }
      ]
    },
    {
      sectionName: "Desserts",
      items: [
        {
          name: "Phirni",
          price: "₹90",
          type: "veg",
          img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/phirni-firni-recipe.jpg"
        }
      ]
    }
  ]
},

{
  id: "8",
  resName: "Chinese Wok",
  cuisines: "Chinese, Asian",
  rating: "4.0 stars",
  time: "26 Mins",
  img: "https://www.claridges.co.uk/siteassets/restaurants--bars/claridges-restaurants-and-bars-listing-1920x720artboard-1.jpg",
  costForTwo: "₹350 for two",
  promoted: false,
  dishes: [
    {
      sectionName: "Noodles",
      items: [
        {
          name: "Veg Hakka Noodles",
          price: "₹149",
          type: "veg",
          img: "https://pupswithchopsticks.com/wp-content/uploads/hakka-noodles-3.webp"
        }
      ]
    },
    {
      sectionName: "Rice",
      items: [
        {
          name: "Chicken Fried Rice",
          price: "₹179",
          type: "non-veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYscNsOtcOqTmjr0kQES62GqlrNLyk3D7Lg&s"
        }
      ]
    },
    {
      sectionName: "Manchurian",
      items: [
        {
          name: "Veg Manchurian",
          price: "₹159",
          type: "veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cxOC3gRDq-E8q4jNTLsfArjoGvNwfqJyaw&s"
        }
      ]
    }
  ]
},

{
  id: "9",
  resName: "Udupi Upahar",
  cuisines: "South Indian",
  rating: "4.3 stars",
  time: "20 Mins",
  img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/26/ac/0f/89/salle-restaurant-nuit.jpg",
  costForTwo: "₹250 for two",
  promoted: true,
  dishes: [
    {
      sectionName: "Dosas",
      items: [
        {
          name: "Masala Dosa",
          price: "₹120",
          type: "veg",
          img: "https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled-scaled.jpg"
        }
      ]
    },
    {
      sectionName: "Idli & Vada",
      items: [
        {
          name: "Idli Vada Combo",
          price: "₹90",
          type: "veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU7VXA7_KvIX5mMPxI1TluuU7owbWRzvQkA&s"
        }
      ]
    },
    {
      sectionName: "Beverages",
      items: [
        {
          name: "Filter Coffee",
          price: "₹40",
          type: "veg",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQI_WPf9FIXul2GGoUAUdrx_WPj-S3lhM0PQ&s"
        }
      ]
    }
  ]
},

{
  id: "10",
  resName: "Cafe Coffee Day",
  cuisines: "Cafe, Beverages",
  rating: "4.1 stars",
  time: "24 Mins",
  img: "https://images.unsplash.com/photo-1722739541715-1d59cde9cca4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  costForTwo: "₹500 for two",
  promoted: false,
  dishes: [
    {
      sectionName: "Hot Coffee",
      items: [
        {
          name: "Cappuccino",
          price: "₹180",
          type: "veg",
          img: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader.jpg?v=1758119315&width=1200"
        }
      ]
    },
    {
      sectionName: "Cold Coffee",
      items: [
        {
          name: "Cold Coffee",
          price: "₹200",
          type: "veg",
          img: "https://amritfood.com/wp-content/uploads/2021/11/Cold-Coffee.png"
        }
      ]
    },
    {
      sectionName: "Snacks",
      items: [
        {
          name: "Garlic Bread",
          price: "₹150",
          type: "veg",
          img: "https://www.spicebangla.com/wp-content/uploads/2020/12/Garlic-Bread.webp"
        }
      ]
    }
  ]
}
];

export default resList;
