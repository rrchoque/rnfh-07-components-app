import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { AirplaneIcon } from '../../icons/Icons'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <AirplaneIcon />
      </View>
    )
  }
}