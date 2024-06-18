import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageCard } from '../components/imageCard';
import theme from '../JSONs/theme.json';

export const NewsScreen = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.palettes.primary.skoiyblue,
        },
        texto: {
            margin: 30,
            color: "white",
            left: 5,
            fontSize: 25,
        },
    });

    const handleVideoClickedPress = (imageUrl) => {
        navigation.navigate('videoClickedScreen', { imageUrl });
    };

    const handleNewsClickedPress = (imageUrl) => {
        navigation.navigate('newsClickedScreen', { imageUrl });
    };

    return (
        <ScrollView style={styles.container}>
            <ImageCard
                roundness={15}
                imagePath={"https://picsum.photos/id/41/1000/500"}
                titleText={"Cheias no Afganistão"}
                subtitleText={"Chuvas fortes no Afganistão deslocam milhares e causam milhões em danos"}
                buttonIconName={"play"}
                showTitle={true}
                showButton={false}
                showDescription={true}
                onPlayPress={handleVideoClickedPress}
                thumbAspectRatio={"16:9"}
                textColor={"white"}
                onCardPress={handleNewsClickedPress}
            />
            <ImageCard
                roundness={15}
                imagePath={"https://picsum.photos/id/185/1000/500"}
                titleText={"Secas em Africa"}
                subtitleText={"O aquecimento global tem piorado e as secas são cada vez mais longas e destrutivas"}
                buttonIconName={"play"}
                showTitle={true}
                showButton={false}
                showDescription={true}
                onPlayPress={handleVideoClickedPress}
                thumbAspectRatio={"16:9"}
                textColor={"white"}
                onCardPress={handleNewsClickedPress}
            />
            <Text style={styles.texto}>
                Noticias do mundo
            </Text>
            <ImageCard
                roundness={30}
                imagePath={"https://picsum.photos/id/58/1000/500"}
                titleText={"Faróis em vias de extinção"}
                subtitleText={"Subtitle"}
                buttonIconName={"play"}
                showTitle={true}
                showButton={true}
                showDescription={false}
                onPlayPress={handleVideoClickedPress}
                thumbAspectRatio={"16:9"}
                textColor={"white"}
                onCardPress={handleNewsClickedPress}
            />
            <ImageCard
                roundness={30}
                imagePath={"https://picsum.photos/id/195/1000/500"}
                titleText={"Paris em Festa"}
                subtitleText={"A cidade das luzes fica ainda mais iluminada"}
                buttonIconName={"play"}
                showTitle={true}
                showButton={true}
                showDescription={true}
                onPlayPress={handleVideoClickedPress}
                thumbAspectRatio={"16:9"}
                textColor={"white"}
                onCardPress={handleNewsClickedPress}
            />
        </ScrollView>
    );
};

export default NewsScreen;