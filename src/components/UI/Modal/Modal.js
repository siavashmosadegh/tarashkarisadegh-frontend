import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
// import myStyle from './style';

class Modal extends Component  {

    render () {

        // const style = myStyle();

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    // className={style.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        position: "fixed",
                        zIndex: "500",
                        backgroundColor: "white",
                        width: "70%",
                        border: "1px solid #ccc",
                        boxShadow: "1px 1px 1px black",
                        padding: "16px",
                        left: "15%",
                        top: "30%",
                        boxSizing: "border-box",
                        transition: "all 0.3s ease-out"
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;