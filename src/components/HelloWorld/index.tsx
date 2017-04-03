import { IRootState } from '../../interfaces/IRootState';
import { IApp } from '../../interfaces/IApp';
import { IAction } from '../../interfaces/IAction';
import React, { Component } from "react";
import { View, Text } from "react-native";

// See src/declarations.d.ts
import Button from "react-native-button";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../../actions/app.actions';
interface Props {
    max: number;
    message?: string | number;
    alert?: string | number;
    style: React.ViewStyle;
    loading:boolean;
    actions:any;
}

interface State {
    counter: number;
}

class HelloWorld extends Component<Props, State> {
    static defaultProps = {
        message: "Press here",
        alert: "Hello world!",
    };

    state = {
        counter: 0,
    };
    componentWillMount(){
        this.props.actions.init();
    }
    onPress = () => {
        
        const counter = this.state.counter + 1;
        if (counter < this.props.max) {
            return this.setState({ counter });
        }
        // Alert after re-rendering
        return this.setState({ counter: 0 }, () => alert(this.props.alert));
    }

    render() {
        console.log(this.props);
        const { message, loading } = this.props;
        const { counter } = this.state;

        return (
            <View style={this.props.style}>
                <Button onPress={this.onPress}>
                    {message} ({counter})
                </Button>
                <Text>{loading} {loading ? "LOADING":"LOADED"}</Text>
            </View>
        );
    }
}

function mapStateToProps(state: IRootState) {
  return {
    loading: state.app.loading
  };
}
function mapDispatchToProps(dispatch:Redux.Dispatch<IAction<any>>) {
	return {
		actions: bindActionCreators<any>(appActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);