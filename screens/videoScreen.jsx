import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { VertCard } from '../components/verticalCard';
import { HoriCard } from '../components/horizontalCard';
import { useNavigation } from '@react-navigation/native';
import theme from '../JSONs/theme.json';

export const VideoScreen = () => {
    const navigation = useNavigation();
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.palettes.primary.skoiyblue,
        },
        texto: {
            margin: 30,
            color: 'white',
            left: 5,
            fontSize: 25,
        },
    });

    const handlePlayPress = (imageUrl) => {
        navigation.navigate('videoClickedScreen', { imageUrl });
    };

    return (
        <ScrollView style = {styles.container}>
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {true}
                showProgress = {true}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Sintra"}
                durationText = {"01:13"}
                progressNumber =  {0.0}
                titleText = {"O Ponto de Vista do Comboio na nova linha de Sintra"}
                descriptionText = {"Video promocional a divulgar o fim da construção da linha de Sintra"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/69/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"compact"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"blue"}
            />
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {true}
                showProgress = {true}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Montalegre"}
                durationText = {"03:08"}
                progressNumber =  {0.0}
                titleText = {"Vindimas em Montalegre chamam milhares"}
                descriptionText = {"Surge em plena época de vindimas um novo tipo de turismo rural que consiste na participação das mesmas"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/75/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"compact"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"blue"}
            />
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {true}
                showProgress = {true}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Braga"}
                durationText = {"05:31"}
                progressNumber =  {0.2}
                titleText = {"Expo-Motor volta a Braga"}
                descriptionText = {"Assinala-se a XXIV edição da maior exposição de automoveis do Norte"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/133/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"compact"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"blue"}
            />
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {true}
                showProgress = {true}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Portugal"}
                durationText = {"02:49"}
                progressNumber =  {0.95}
                titleText = {"Festivais de Rock em Portugal este ano"}
                descriptionText = {"Veja já a lista de festivais e planeie o seu Verão"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/145/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"compact"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"blue"}
            />
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {true}
                showProgress = {true}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Entretenimento"}
                durationText = {"07:29"}
                progressNumber =  {0.5}
                titleText = {"10 Truques simples para ser um fotografo melhor"}
                descriptionText = {"Dicas e curiosidades sobre fotografia"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/250/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"compact"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"blue"}
            />
            <VertCard
                showPlay = {true}
                showLabel = {true}
                showDuration = {false}
                showProgress = {false}
                showTitle = {true}
                showDescription = {true}
                showButtonIcon = {true}
                labelText = {"Live"}
                durationText = {"05:03"}
                progressNumber =  {1.0}
                titleText = {"Time Square LiveStream"}
                descriptionText = {"Stream 24/7 da timesquare"}
                buttonPlayIconName = {"play-circle"}
                buttonOptionsIconName = {"star"}
                roundness = {20}
                imagePath = {"https://picsum.photos/id/274/1000/500"}
                thumbAspectRatio = {"16:9"}
                viewStyle = {"mobile"}
                labelMode = {"long"}
                onPlayPress = {handlePlayPress}
                onOptionsPress = {""}
                labelColor = {"red"}
            />
            <Text style = {styles.texto}>
                Ver Tambem
            </Text>
            <ScrollView 
                horizontal 
                style={styles.horizontalScroll}
                showsHorizontalScrollIndicator={false}
            >
                <HoriCard
                    roundness={20}
                    imagePath={"https://picsum.photos/id/1018/1000/500"}
                    buttonIconName={"play-circle"}
                    showProgress={true}
                    progressNumber={0.5}
                    showButton={true}
                    showTitle={true}
                    titleText={"Horizontal Card Title 1"}
                    showDescription={true}
                    descriptionText={"Description for horizontal card 1"}
                    showDuration={true}
                    durationText={"03:45"}
                    showExtra={false}
                    onPlayPress={handlePlayPress}
                    onExtraPress={() => console.log('Extra pressed')}
                    viewStyle={"mobile"}
                />
                <HoriCard
                    roundness={20}
                    imagePath={"https://picsum.photos/id/1020/1000/500"}
                    buttonIconName={"play-circle"}
                    showProgress={true}
                    progressNumber={0.8}
                    showButton={true}
                    showTitle={true}
                    titleText={"Horizontal Card Title 2"}
                    showDescription={true}
                    descriptionText={"Description for horizontal card 2"}
                    showDuration={true}
                    durationText={"04:10"}
                    showExtra={false}
                    onPlayPress={handlePlayPress}
                    onExtraPress={() => console.log('Extra pressed')}
                    viewStyle={"mobile"}
                />
                <HoriCard
                    roundness={20}
                    imagePath={"https://picsum.photos/id/1002/1000/500"}
                    buttonIconName={"play-circle"}
                    showProgress={true}
                    progressNumber={0.5}
                    showButton={true}
                    showTitle={true}
                    titleText={"Horizontal Card Title 3"}
                    showDescription={true}
                    descriptionText={"Description for horizontal card 3"}
                    showDuration={true}
                    durationText={"03:45"}
                    showExtra={false}
                    onPlayPress={handlePlayPress}
                    onExtraPress={() => console.log('Extra pressed')}
                    viewStyle={"mobile"}
                />
            </ScrollView>
        </ScrollView>
    );
};

export default VideoScreen;