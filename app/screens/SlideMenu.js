import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default class SlideMenu extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.menu}>
        <Text>This is Side Menu</Text>
      </View>
    );
  }
}
