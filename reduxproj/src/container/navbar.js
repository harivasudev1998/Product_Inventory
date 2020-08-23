import React from 'react';
import { connect } from 'react-redux'





class Navbarname extends React.Component {
    constructor() {
        super();
        console.log('he tere');
    }
    
  display = () => {
      return this.props.products.map((f)=>{
        return (<h2>{f.name}</h2>)
      })
  }

  
    render() {  
     
        return (  
            <div style={{backgroundColor:"yellow"}}>
                    <h2> Name of the Product added is {this.props.productname}</h2>
                    <hr></hr>
                    
            </div>
        );
    }
}
const storeToProps = (store) => {
    console.log(store);
    return {
        products:store.allproducts,
        productname:store.productname
        
    }
}
export default connect(storeToProps)(Navbarname);
