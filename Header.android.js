import React, { Component } from 'react';
import { Text } from 'react-native';
import HeaderStyle from './HeaderStyle';
export default class Header extends Component {
  render() {
    return <Text style={HeaderStyle.androidHeader}>Restaurant Reviewer</Text>;
  }
}