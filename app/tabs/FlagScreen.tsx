import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Flag: undefined;
};

type FlagScreenProps = StackScreenProps<RootStackParamList, 'Flag'>;

const FlagScreen: React.FC<FlagScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.flagText}> {"picoCTF Yu08_made_it_cong2tula6ons"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default FlagScreen;
