import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }
    handleLoginLogout = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                    isLoggedIn={this.state.isLoggedIn}
                    handleLoginLogout={this.handleLoginLogout}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent