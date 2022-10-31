import Animated, {
  Easing,
  Keyframe, 
} from 'react-native-reanimated';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState} from 'react';

export default function App() {
  const [show, setShow] = useState(false);

  const enteringAnimation = new Keyframe({
    0: {
      height: 0,
    },
    50: {
      height: 500,
      easing: Easing.linear,
    },
    100: {
      height: 1000,
    },
  }).duration(2000);

  const exitingAnimation = new Keyframe({
    0: {
      height: 1000,
    },
    50: {
      height: 500,
      easing: Easing.linear,
    },
    100: {
      height: 0,
    }
  }).duration(2000);
  
  return (
    <View style={styles.container}>
      {show && 
        <Animated.View
          style={styles.animatedView}
          entering={enteringAnimation}
          exiting={exitingAnimation}
        >
          
        </Animated.View>
      }
      <Button
          title="animate"
          style={styles.btnAnimation}
          onPress={() => {
            setShow((last) => !last);
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  animatedView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'cyan',
    justifyContent: 'center',
    position: 'absolute',
  },
  btnAnimation: {
  }, 
});
