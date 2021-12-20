const PRODUCTS = [
    {
        id: 100,     
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
       
    },
    {
        id: 101,
       
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
    },
    {
        id: 102,
       
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
    },
   
    {
        id: 103,
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
    },
    {
        id: 104,
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
    },
    {
        id: 105,
        price: 350,
        image: 'https://buyonic.herokuapp.com/media/Screenshot_68.png',
        name: "Wool",
        cost: 150,
        description: "1 metre",
        stock_status: true,
        created_on: "2021-12-19T05:42:25.143807Z",
        trend: 11,
        production_state: "Maharashtra"
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}