import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from '../views/shared/styles';
import Colors from '../constants/Colors';
import { Spacing } from '../constants/Spacing';

const TextField: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<Boolean>(false);

  return (
    <TextInput 
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.hintTextColor}
      selectionColor={Colors.black}
      style={[
        styles.textInputStyle, 
        { marginTop: Spacing * 2 },
        focused && {
          borderWidth: 1.5, 
          borderColor: Colors.primary,
          elevation: 12,
          shadowColor: Colors.primary,
        }
      ]}
      {...otherProps}
    />
  );
};

export default TextField;
