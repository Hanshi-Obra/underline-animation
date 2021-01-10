import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Animated, Button, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const Separator = () => (
  <View style={styles.separator} />
);

const Line = ({ onPress, animatedValue }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.lineContainer]}>
      <View style={styles.row}>
        <Button  onPress={onPress} title='Opción1' color='black'  />
        <Separator />
        <Button  onPress={onPress} title='Opción2' color='black' />
      </View>
      <Animated.View style={[styles.line, {
        transform: [{
          translateX: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0%', '50%', '137%']
          })
        }

        ]
      }]}>
        
      </Animated.View>
    </View>
  );
}

export default function App() {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animation = (toValue) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    })
  const [index, setIndex] = React.useState(0);
  const onPress = () => {
    setIndex(index === 1 ? 0 : 1)
    animation(index === 1 ? 0 : 1)
      .start();
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden />
      <Line onPress={onPress} animatedValue={animatedValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },

  lineContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: 'green'
  },



  line: {
    height: 8,
    width: 70,
    backgroundColor: 'black',
    borderRadius: 15,
    marginLeft: 75
  },

  lineButton: {
    backgroundColor: 'transparent',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    
  },

  separator: {
    marginHorizontal:28
  },
});
