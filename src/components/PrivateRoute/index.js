import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect , Route } from 'react-router-dom';

class PrivateRoute extends Component {
    
    render () {

        let content;

        if (this.props.token === null) {
            content = <Redirect to="/" />
        } else {
            content = <Route path={this.props.path} component={this.props.component} />
        }

        return (
            content
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
};

export default connect(mapStateToProps)(PrivateRoute);