import React from 'react';
import styled from 'styled-components';

const CartItem = ()=>{
    const handleRemove = (ev)=>{
        ev.preventDefault(); 
        console.log("clicked remove button");
    };

    return (
        <Wrapper>
            <ItemImage><img src="" alt="item"/></ItemImage>
            <Item>
                <Brand>Brand</Brand>
                <p>Brand</p>
                <p>Description</p>
            </Item>
            <Price>$240.00 CAD</Price>
            <Remove>
                <button 
                onClick={handleRemove}
                >
                    X
                </button>
            </Remove>
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
width:100%; 
border-top: 1px solid grey;
border-bottom: 1px solid grey;
display:flex;
height: 200px;
`; 

const ItemImage = styled.div`
flex:3;
height:100%; 
display: flex;
justify-content:center;
* {
    border:1px solid grey;
    height:100%; 
};
`;

const Item = styled.div`
flex:10;
display: flex; 
flex-direction:column; 
`;

const Brand = styled.div`
font-weight:bolder;
`;

const Price = styled.div`
flex:3;
`;

const Remove = styled.div`
flex:1;
`;


export default CartItem; 