// Name: Govindaraj Kaushik
// Class: DIT/FT/1B/02
// admin NO. 2227621



import React, { Component } from 'react'
import { Text, StyleSheet, View, I18nManager } from 'react-native'

// Determine the direction based on if the device is in RTL mode
let direction = I18nManager.isRTL? 'right' : 'left';
let opDirection = I18nManager.isRTL? 'Left' : 'Right';

// Define styles for the components
const styles = StyleSheet.create({
  // Style for the outer circle
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style for the inner circle
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style for the left wrap
  leftWrap: {
    position: 'absolute',
    top: 0,
    // Apply the direction to position the left wrap
    [`${direction}`]: 0,
  },
  // Style for the half circle
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    // Apply the direction to define the border radius of the half circle
    [`borderTop${opDirection}Radius`]: 0,
    [`borderBottom${opDirection}Radius`]: 0,
  },
})

// Convert the percentage to degrees
function percentToDegrees(percent) {
  return percent * 3.6
}

// Class component for the PercentageCircle
export default class PercentageCircle extends Component {
  // Function to compute the state of the component
  computeDerivedState() {
    const { props } = this;
    // Clamp the percentage between 0 and 100
    const percent = Math.max(Math.min(100, props.percent), 0)
    // Determine if a second half circle is needed
    const needHalfCircle2 = percent > 50
    let halfCircle1Degree
    let halfCircle2Degree
    // degrees indicate the 'end' of the half circle, i.e. they span (degree - 180, degree)
    if (needHalfCircle2) {
      halfCircle1Degree = 180
      halfCircle2Degree = percentToDegrees(percent)
    } else {
      halfCircle1Degree = percentToDegrees(percent)
      halfCircle2Degree = 0
    }

    return {
      halfCircle1Degree,
      halfCircle2Degree,
      halfCircle2Styles: {
        // when the second half circle is not needed, we need it to cover
        // the negative degrees of the first circle
        backgroundColor: needHalfCircle2
          ? props.color
          : props.shadowColor,
      },
    }
  }

  // Render the first or second half circle
  renderHalfCircle(rotateDegrees, halfCircleStyles) {
    const { radius, color } = this.props
    // Determine the key based on the device's RTL setting
    const key = I18nManager.isRTL ? 'right' : 'left';
    return (
        <View 
            style={[ 
                styles.leftWrap, 
                { 
                    width: radius, 
                    height: radius * 2 
                } 
            ]} 
        >
            {/* Wrapper for half circle */}
            <View 
                style={[ 
                    styles.halfCircle, 
                    { 
                        width: radius, 
                        height: radius * 2, 
                        borderRadius: radius, 
                        overflow: 'hidden', 
                        transform: [
                            { translateX: radius / 2 }, 
                            { rotate: `${rotateDegrees}deg` }, 
                            { translateX: -radius / 2 } 
                        ], 
                        backgroundColor: color, 
                        ...halfCircleStyles 
                    } 
                ]} 
            />
        </View>
    )
    }
    
    // Renders inner circle view
    renderInnerCircle() {
        const radiusMinusBorder = this.props.radius - this.props.borderWidth
        return (
            <View 
                style={[ 
                    styles.innerCircle, 
                    { 
                        width: radiusMinusBorder * 2, 
                        height: radiusMinusBorder * 2, 
                        borderRadius: radiusMinusBorder, 
                        backgroundColor: this.props.bgColor, 
                        ...this.props.containerStyle 
                    } 
                ]} 
            >
                {this.props.children}
                <Text style={{color: '#fff', fontSize: 20}}>{this.props.percent}%</Text>
            </View>
        )
    }
    
    render() {
        const {
            halfCircle1Degree,
            halfCircle2Degree,
            halfCircle2Styles
        } = this.computeDerivedState()
    
        return (
            <View 
                style={[ 
                    styles.outerCircle, 
                    { 
                        width: this.props.radius * 2, 
                        height: this.props.radius * 2, 
                        borderRadius: this.props.radius, 
                        backgroundColor: this.props.shadowColor, 
                        ...this.props.outerCircleStyle 
                    } 
                ]} 
            >
                {/* Render first half circle */}
                {this.renderHalfCircle(halfCircle1Degree)}
                {/* Render second half circle */}
                {this.renderHalfCircle(halfCircle2Degree, halfCircle2Styles)}
                {/* Render inner circle */}
                {this.renderInnerCircle()}
            </View>
        )
    }
}    