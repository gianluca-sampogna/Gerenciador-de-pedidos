import { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';
import { CORES } from '@src/Enum/CORES';

interface ILabelInput {
  label?: string;
  value: any;
  handleChangeText: any;
}

const LabelInput: React.FC<ILabelInput> = ({
  label,
  value,
  handleChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <View style={{ marginBottom: 4, marginLeft: 6 }}>
        {label && (
          <Text style={{ color: 'black', fontWeight: 'bold' }}>{label}</Text>
        )}
      </View>
      <View
        style={[
          styles.container,
          { borderColor: isFocused ? CORES.azul : '#918b87' },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          onChangeText={handleChangeText}
          value={value}
          keyboardType="default"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </>
  );
};

export default LabelInput;
