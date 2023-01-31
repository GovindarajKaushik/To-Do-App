import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class DateItem extends Component {
    state = {
        backgroundColor: '#000'
    };
    
    changeColor() {
        if (this.props.top == this.props.activeDate[0] && this.props.bottom == this.props.activeDate[1]){
            this.setState({backgroundColor: '#fff'});
        } else {
            this.setState({backgroundColor: '#000'});
        }
    }

    UNSAFE_componentWillReceiveProps() {
        this.changeColor();
    }

    componentDidMount() {
        this.changeColor();
    }

    render() {
        return (
            <TouchableHighlight 
                style={[styles.container, {backgroundColor: this.state.backgroundColor }]} 
                onPress={() => this.props.setActiveDate([this.props.top, this.props.bottom])}
            >
                <View>
                    <Text style={[styles.text, 
                        {color: this.state.backgroundColor == '#000' ? '#fff' : '#000'}
                    ]}>
                        {this.props.top}
                    </Text>
                    <Text style={[styles.text, 
                        {color: this.state.backgroundColor == '#000' ? '#fff' : '#000'}
                    ]}>{this.props.bottom}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 3,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 15
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    }
  });
  
export default DateItem;