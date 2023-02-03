// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class DateItem extends Component {
    state = {
        backgroundColor: '#000' // Initial state of the background color
    };
    
    // Function to change the background color based on activeDate
    changeColor() {
        if (this.props.top == this.props.activeDate[0] && this.props.bottom == this.props.activeDate[1]){
            this.setState({backgroundColor: '#fff'});
        } else {
            this.setState({backgroundColor: '#000'});
        }
    }

    // Life cycle method that runs when the component receives new props
    UNSAFE_componentWillReceiveProps() {
        this.changeColor();
    }

    // Life cycle method that runs when the component is mounted
    componentDidMount() {
        this.changeColor();
    }

    render() {
        return (
            // TouchableHighlight to detect when the user taps on the date
            <TouchableHighlight 
                style={[styles.container, {backgroundColor: this.state.backgroundColor }]} 
                onPress={() => this.props.setActiveDate([this.props.top, this.props.bottom])}
            >
                <View>
                    {/* Text to display the first date */}
                    <Text style={[styles.text, 
                        {color: this.state.backgroundColor == '#000' ? '#fff' : '#000'}
                    ]}>
                        {this.props.top}
                    </Text>
                    {/* Text to display the second date */}
                    <Text style={[styles.text, 
                        {color: this.state.backgroundColor == '#000' ? '#fff' : '#000'}
                    ]}>{this.props.bottom}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    // Style for the container
    container: {
        margin: 3,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 15
    },
    // Style for the text
    text: {
        color: '#fff',
        textAlign: 'center'
    }
  });
  
export default DateItem;
