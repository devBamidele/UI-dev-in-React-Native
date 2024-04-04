import React from 'react';
import { TouchableOpacity, GestureResponderEvent, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Example icon
import Colors from '../constants/Colors'; // Import your Colors file

interface IconButtonProps {
  icon: IconProp;
  size?: number,
  onPress?: ((event: GestureResponderEvent) => void) | null;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, size = 22, onPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress.call;
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      disabled={!onPress} // Disable TouchableOpacity if onPress is null
    >
      <FontAwesomeIcon icon={icon} color={Colors.black} size={size} /> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginHorizontal: 10,
    backgroundColor: Colors.inputBackground,
    borderRadius: 6,
  },
});

export default IconButton;
