import React from 'react';
import myStyle from './style';
import OrderablePiece from './OrderablePiece/OrderablePiece';

const orderVerTwo = (props) => {

    let transformedPiece = Object.keys(props.orderablePieceProps)
        .map( igKey => {
            return [...Array(props.orderablePieceProps[igKey])].map((_,i ) => {
                return <OrderablePiece key={igKey + i} nameOfThePiece={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
    if (transformedPiece.length === 0) {
        transformedPiece = <p>Please Start adding ingredients</p>
    }

    //console.log(props.orderablePieceProps);

    const style = myStyle();

    return (
        <div className={style.root}>
            {transformedPiece}
        </div>
    );
}
export default orderVerTwo;