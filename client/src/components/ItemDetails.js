import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addItem } from '../actions';
import styled from "styled-components";

import { requestItemDetails, receiveItemDetails, receiveItemDetailsError } from '../actions';
import { addItem } from '../actions';

// onClick of item in grid sends get request

const ItemDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const currentItem = useSelector((state) => state.itemDetailsReducer.currentItem);
    const status = useSelector((state) => state.itemDetailsReducer.status);

    useEffect(() => {
        dispatch(requestItemDetails());
        fetch(`/product/${productId}`)
        .then((res) => res.json())
        .then((response) => dispatch(receiveItemDetails(response.data)))
        .catch((error) => dispatch(receiveItemDetailsError(error)))
    }, []);

    const handleClick=() => {
        dispatch(addItem(currentItem));
    };


    // To be added on an Add to Cart button 
    const handleClick=() => {
        dispatch(addItem(currentItem));
    };

    return (
        <>
        {status === 'loading'
        ? <h1>Loading...</h1>
        : (!currentItem)
        ? <h1>Loading...</h1>
        :
        <ProductContainer>
            <ProductImage src={currentItem["imageSrc"]} alt={currentItem["name"]} />
            <ProductInfoContainer>
                <h3>{currentItem["name"]}</h3>
                <p>{currentItem["price"]}</p>
                <div>
                    <h4>Product Information:</h4>
                    <p><Span>Body Location: </Span>{currentItem["body_location"]}</p>
                    <p><Span>Technology Type: </Span> {currentItem["category"]}</p>
                </div>
                <Button onClick={() => handleClick()}>Add to Cart</Button>
            </ProductInfoContainer>
        </ProductContainer>
        }   
        </>
    )
};

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    left: 5%;
    top: 20px;
`;

const ProductImage = styled.img`
    width: 300px;
    height: 300px;
`;

const ProductInfoContainer = styled.div`
    width: 400px;
`;

const Span = styled.span`
    font-weight: bold;
`;

const Button = styled.button`
    margin-top: 15px;
    color: #6565EE;

    &:hover {
        cursor: pointer;
    }
`;

export default ItemDetails;

