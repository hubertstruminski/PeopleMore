import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styles from './buttonStyle';
import PropTypes from 'prop-types';

const Button = props => {
  const { 
    onPress, 
    title, 
    backgroundColor 
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View 
        style={[
          styles.container, { 
            backgroundColor: backgroundColor 
          }
        ]}
      >
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

Button.defaultProps = {
  onPress: () => {},
  title: '',
  backgroundColor: ''
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

export default Button;