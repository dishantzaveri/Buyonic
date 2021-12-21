const PRODUCTS = [
    {
        id: 1,     
        cost: 350,
        photo: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        rating: 1,
        production_state: "Maharashtra"
       
    },
    {
        id: 2,
        photo: 'https://buyonic.herokuapp.com/media/Screenshot_78.png',
        name: "Ball point Pens",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        rating: 4,
        production_state: "Delhi"
    },
    {
        id: 3,
       
        name: "Paper",
        cost: 50.0,
        description: "A set of all colours of paper.",
        stock_status: true,
       
        photo: "https://buyonic.herokuapp.com/media/Screenshot_78.png",
        rating: 5,
        production_state: "Delhi"
    },
    {
        id: 4,
      
        name: "Ball point Pens",
        cost: 200.0,
        description: "Box of pens containing 30 pcs.",
        stock_status: true,
        
        photo: "https://buyonic.herokuapp.com/media/Screenshot_80.png",
        rating: 4,
        production_state: "Delhi"
    },
    {
        id: 5,
        name: "Notebook",
        cost: 200.0,
        description: "Set of 6 notebooks",
        stock_status: true,
        created_on: "2021-12-20T20:13:11.610433Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_79.png",
        rating: 3,
        production_state: "Delhi"
    },
    {
        id: 7,
        name: "Cement",
        cost: 30.0,
        description: "500gm of best in class cement",
        stock_status: true,
        created_on: "2021-12-20T19:56:52.032325Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_73.png",
        rating: 3,
        production_state: "Uttar Pradesh"
    },
    {
        id: 7,
       
        name: "Yarn",
        cost: 160.0,
        description: "Available in all colours. No one can match its prestige.",
        stock_status: true,
        created_on: "2021-12-20T19:39:25.678280Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_71.png",
        rating: 2,
        production_state: "Punjab"
    },
    {
        id: 8,
      
        name: "Plaster of Paris",
        cost: 50.0,
        description: "500gm of POP",
        stock_status: true,
        created_on: "2021-12-20T20:02:24.100293Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_76.png",
        rating: 2,
        production_state: "Uttar Pradesh"
    },
    {
        id: 9,
     
        name: "Plywood",
        cost: 200.0,
        description: "Best furnished",
        stock_status: true,
        created_on: "2021-12-20T20:17:53.160673Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_81.png",
        rating: 2,
        production_state: "Haryana"
    },
    {
        id: 10,
     
        name: "Bricks",
        cost: 200.0,
        description: "Strong bricks.",
        stock_status: true,
        
        photo: "https://buyonic.herokuapp.com/media/Screenshot_75.png",
        rating: 1,
        production_state: "Uttar Pradesh"
    },
    {
        id: 11,
        
        name: "Wool",
        cost: 150.0,
        description: "1 metre",
        stock_status: true,
        
        photo: "https://buyonic.herokuapp.com/media/Screenshot_68.png",
        rating: 1,
        production_state: "Maharashtra"
    },
    {
        id: 12,
       
        name: "Paints",
        cost: 800.0,
        description: "Oil based paints.",
        stock_status: true,
        created_on: "2021-12-20T19:57:54.400766Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_74.png",
        rating: 1,
        production_state: "Rajasthan"
    },
    {
        id: 13,
       
        name: "Cotton",
        cost: 120.0,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:41:46.077969Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_69.png",
        rating: 5,
        production_state: "Maharashtra"
    },
    {
        id: 14,
       
        name: "Jute",
        cost: 130.0,
        description: "Best quality Jute Fabric, 1 m long.",
        stock_status: true,
        
        photo: "https://buyonic.herokuapp.com/media/Screenshot_70.png",
        rating: 5,
        production_state: "Punjab"
    },
    {
        id: 15,
       
        name: "Polyester",
        cost: 90.0,
        description: "Cheapest Fabric.",
        stock_status: true,
        created_on: "2021-12-20T19:40:17.728524Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_72.png",
        rating: 2,
        production_state: "Uttar Pradesh"
    },
    {
        id: 16,
       
        name: "Brass Sheets",
        cost: 200.0,
        description: "Thick brass sheets",
        stock_status: true,
       
        photo: "https://buyonic.herokuapp.com/media/Screenshot_84.png",
        rating: 4,
        production_state: "Maharashtra"
    },
    {
        id: 17,
        
        name: "Wire",
        cost: 10.0,
        description: "Durable",
        stock_status: true,
        created_on: "2021-12-20T07:42:16.969669Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_67.png",
        rating: 0,
        production_state: "Haryana"
    },
    {
        id: 18,
      
        name: "Bolt Set",
        cost: 60.0,
        description: "A set of all bolts.",
        stock_status: true,
        created_on: "2021-12-20T20:05:32.560586Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_77_8cnRbja.png",
        rating: 0,
        production_state: "Rajasthan"
    },
    {
        id: 19,
    
        name: "Hinge Joint",
        cost: 20.0,
        description: "Set of 2",
        stock_status: true,
        created_on: "2021-12-20T20:18:37.513937Z",
        photo: "https://buyonic.herokuapp.com/media/Screenshot_82.png",
        rating: 4,
        production_state: "Rajasthan"
    },
    {
        id: 20,
        name: "Wood",
        cost: 900.0,
        description: "Wooden Logs for construction",
        stock_status: true,
       
        photo: "https://buyonic.herokuapp.com/media/Screenshot_83.png",
        rating: 3,
        production_state: "Maharashtra"
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}