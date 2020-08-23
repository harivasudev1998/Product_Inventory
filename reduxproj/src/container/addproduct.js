import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import addProductBroadcast from '../action/addproductbroadcast'
import { Card, Container } from 'react-bootstrap';
import { createHashHistory } from 'history';

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            price:0,
            rating:0,
            stock:0,
            image:'',
            description:'',
            category: ''
           
        }

    }

    captureName = (event)=>{
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }

    capturePrice = (event)=>{
        console.log(event.target.value);
        this.setState({price: event.target.value})
    }

    captureStock = (event)=>{
        console.log(event.target.value);
        this.setState({stock: event.target.value})
    }

    captureRating = (event)=>{
        console.log(event.target.value);
        this.setState({rating: event.target.value})
    }

    captureDescription = (event)=>{
        console.log(event.target.value);
        this.setState({description: event.target.value})
    }
  
  
    captureImage = (event)=>{
        console.log(event.target.value);
        this.setState({image: event.target.value.substr(12)})
    }

    captureCategory = (event)=>{
        console.log(event.target.value);
        this.setState({category: event.target.value})
    }

    captureProduct=()=>{
        let product = {
            name: this.state.name,
            price: this.state.price,
            rating:this.state.rating,
            stock:this.state.stock,
            description:this.state.description,
            image:this.state.image,
            category: this.state.category,
          
        }

        console.log(product);
        this.props.sendNewProduct(product)
        this.props.history.push('/')
    }

    render() { 
        const cardStyle={
            borderStyle:"solid",
            borderColor:"black",
            margin:"20px",
            width:"25%",
            display:"inline-block",
             backgroundColor:"goldenrod",
             borderWidth:"5px",
             justifyContent:"center",
             textAlign:"center"
        }
        return ( 
            <Container style={{backgroundColor:"wheat",padding:"170px",justifyContent:"center",textAlign:"center"}}>
            <Card style={cardStyle}>
              
            <div>
               <b> <h3>Add Product</h3>
                Name: <input type="text" onChange={this.captureName}></input> 
                <br></br>
                Price: <input type="number" onChange={this.capturePrice}></input> 
                <br></br>
                Stock: <input type="number" onChange={this.captureStock}></input> 
                <br></br>
                Description: <input type="text" onChange={this.captureDescription}></input> 
                <br></br>
                Image: <input type="file" onChange={this.captureImage} multiple accept='image/*' />
                <br></br>
                Rating: <input type="number" onChange={this.captureRating}></input> 
                <br></br>
                Category:<select  id="category" name="category" onChange={this.captureCategory} >
                                        <option value=""></option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Groceries">Groceries</option>
                                    </select> </b>
             <br></br>                  
                {/* <input type="boolean" onChange={this.captureInstock}></input> {this.state.instock}
                <br></br> */}

               <button onClick={this.captureProduct}>Add</button>
            </div>
           
            </Card>
            </Container>
         );
    }
}


function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        sendNewProduct: addProductBroadcast 
    }, dispatch)
}
 
export default connect(null, convertPropToEventAndBroadcast)(AddProduct);
export const history = createHashHistory();