import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import theme from '../JSONs/theme.json';

const VideoClickedScreen = ({ route }) => {
  const { imageUrl } = route.params;
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain"/>
      <Pressable onPress={goBack}>
        <IconButton icon="fullscreen-exit" style={styles.button}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    bottom: -165,
    left: -210,
    backgroundColor: theme.palettes.primary.white,
  },
  container: {
    flex: 1,
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 830,
    height: 500,
    transform: [{ rotate: '90deg' }],
  },
});

export default VideoClickedScreen;