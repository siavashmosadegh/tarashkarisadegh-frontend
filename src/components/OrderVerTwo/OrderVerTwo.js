import React from 'react';
import myStyle from './style';
import OrderablePiece from './OrderablePiece/OrderablePiece';
import classes from './OrderVerTwo.module.css';
const orderVerTwo = (props) => {

    let style = classes.root;

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
        transformedPiece = <p>سفارش خود را تعیین کنید</p>
        style = classes.rootkhali;
    }

    //console.log(props.orderablePieceProps);

    // const classes = myclasses();

    return (
        <div className={classes.roottwo}>
            <div className={style}>
                {transformedPiece}
            </div>
        </div>
    );
}
export default orderVerTwo;