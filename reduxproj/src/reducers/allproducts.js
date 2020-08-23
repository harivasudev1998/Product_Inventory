
const initialState = [
  {
 name: "One plus Nord 5G",
 price: "32500",
 rating: "10",
 stock: 139,
 category: "Mobile",
 description: "Very new awesome product",
 image: "1.jpg",
 id: 1
},
{
 name: "Oppo",
 price: "20000",
 rating: "9",
 stock: 150,
 category: "Mobile",
 description: "Brand new mobile by oppo",
 image: "2.jpg",
 id: 2
},
{
 name: "Redmi",
 price: "14000",
 rating: "9",
 stock: 161,
 category: "Mobile",
 description: "Brand New Mobile by Redmi",
 image: "3.jpg",
 id: 3
},
{
 name: "Samsung Galaxy M31",
 price: "20000",
 rating: "9",
 stock: 139,
 category: "Mobile",
 description: "Brand new mobile by Samsung ",
 image: "4.jpg",
 id: 4
},
{
 name: "Asus",
 price: "50000",
 rating: "10",
 stock: "132",
 category: "Laptop",
 description: "New Laptop at reasonable rates",
 image: "6.jpg",
 id: 5
}
];

const myallproductsreducer = function allProductsReducer(state = initialState, action) {

    switch (action.type) {
        case "NEW_PRODUCT":
            console.log('add name, price for new product....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newallproducts = [{ 
                                        id:length+1, 
                                        name: action.payload.name,
                                        price: action.payload.price,
                                        rating: action.payload.rating,
                                        stock:action.payload.stock,
                                        category:action.payload.stock,
                                        image:action.payload.image,
                                        description:action.payload.description,
                                  
                                    }, ...state]
            return newallproducts;
      case 'EDIT_PRODUCT':
                const product = {
                  id: action.payload.id,
                  name: action.payload.name,
                  price: action.payload.price,
                  description: action.payload.description,
                  stock: action.payload.stock,
                  rating: action.payload.rating,
                  category: action.payload.category,
                  image: action.payload.image
                }
         let allProducts = state;
         const index = allProducts.findIndex(product => product.id===action.payload.id);
         allProducts[index] = product;
         console.log("allProductsReducer -> allProducts", allProducts)
         return allProducts;
         
      case "DELETE_PRODUCT":
      console.log("DELETE_PRODUCT", action.payload);
      const updatedProducts = state.filter((product) => {
        return (product.id !== action.payload.id)
      })
      return updatedProducts;

    default: return state;
    }
}

export default myallproductsreducer