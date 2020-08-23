import React from 'react';
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'
import { createHashHistory } from 'history';
import deleteProductBroadcast from '../action/deleteProductBroadcast'
import { bindActionCreators } from 'redux';
import { Container } from 'react-bootstrap';

class Productlist extends React.Component {

    displayPropsReceivedFromStore=()=>{
        const cardStyle={
            borderStyle:"solid",
            borderColor:"black",
            margin:"20px",
            width:"40rem",
             backgroundColor:"cyan",
             borderWidth:"5px",
             display:"inline-block",
            //  textAlign:"center",
            justifyContent:"center",
            marginLeft:'25%'
        
        
        }
        return this.props.products.map(f=>{
            return (  
<div >
               
       <Container >         
        <Card style={cardStyle} key={f.id}>
            <Card-title>
            <img  src={"images/" + f.image} 
                alt="productImage" style={{width:"100%",flexWrap:"wrap",flexDirection:"row"}}></img>
             <b style={{color:"red"}}>Product Name: {f.name}</b>
             </Card-title>
             <Card-body>
             <br></br>
             <b>Price: Rs.{f.price}</b>
             <br></br>
             <b>Rating: {f.rating}</b>
             <br></br>
            <b>Stock: {f.stock}</b>
            <br></br>
            <b>Category: {f.category}</b>
            <br></br>
            <b>Description: {f.description}</b>
            <br></br>
            <br></br>
            <button style={{color:"yellow",backgroundColor:"red",padding:'10px',margin:"10px"}} onClick={()=>this.props.deleteProduct(f)}>delete</button>
            <button style={{color:"yellow",backgroundColor:"green",padding:'10px',margin:"10px"}} onClick={()=>this.editProduct(f.id)} type="submit">edit</button>
            </Card-body>
            </Card>
            </Container>
        </div>
            )

        })
    }


    editProduct=(id)=>{
        history.push('/editproduct/'+id);
    }

    addProd(){
        // window.location.href = '/addproduct'
       history.push('/addproduct');
    }
    render() {
        return (
            <div style={{backgroundColor:"wheat"}}>
                 <button  onClick={this.addProd}
                style={{  padding: '10px', width: '15%',height: '5%',border: '1px solid black',background: 'green',color: 'aqua',textAlign:"center",marginLeft:"40%"}}>Add a new product</button>
                <ol >
                   {this.displayPropsReceivedFromStore()}
                </ol>
            </div>
        );
    }
}
const storeToProps = (store) => {
    console.log("storethis is ", store);
    return {
        products: store.allproducts
    }
}

const dispatchEvent = (dispatch) => {
    return bindActionCreators({
        deleteProduct: deleteProductBroadcast,
    }, dispatch)
}
export default connect(storeToProps,dispatchEvent)(Productlist);
export const history = createHashHistory();