import React from 'react';
import { StyleSheet, View, Image, Dimensions, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import theme from '../JSONs/theme.json';

const imagePath = "https://i.imgur.com/6m6vPqE.jpeg";

export const HomeScreen = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            backgroundColor: theme.palettes.primary.skoiyblue,
            justifyContent: 'center', 
            alignItems: 'center',
            
        },
        buttonContainer: {
            backgroundColor: theme.palettes.primary.skoiyblue,
            flexDirection: 'row',
            justifyContent: 'center', 
            width: "100%",
            bottom: 20,
        },
        buttons: {
            marginHorizontal: 10,
            width: 150,
        },
        image: {
            width: '100%',
            height: 500,
            resizeMode: 'cover', 
        },
    });

    const handleVideoPress = () => {
        navigation.navigate("Videos do Dia");
    };
    const handleNewsPress = () => {
        navigation.navigate("Noticias de Ultima Hora");
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image
                source={{ uri: imagePath }}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.buttons}
                    icon="newspaper"
                    mode="contained-tonal"
                    compact={true}
                    onPress={handleNewsPress}
                >
                    Últimas Noticias
                </Button>
                <Button
                    style={styles.buttons}
                    icon="video"
                    mode="contained-tonal"
                    compact={true}
                    onPress={handleVideoPress}
                >
                    Videos do Dia
                </Button>
            </View>
        </View>
    );
};

export default HomeScreen;