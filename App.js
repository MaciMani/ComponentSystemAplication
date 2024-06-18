import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen';
import VideoScreen from './screens/videoScreen';
import VideoClickedScreen from './screens/videoClickedScreen';
import NewsScreen from './screens/newsScreen';
import NewsClickedScreen from './screens/newsClickedScreen';
import theme from './JSONs/theme.json';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.palettes.primary.skoiyblue, 
          },
          headerTintColor: theme.palettes.primary.white,
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}>
        <Stack.Screen name="App de Noticias e Informação" component={HomeScreen} />
        <Stack.Screen name="Videos do Dia" component={VideoScreen}/>
        <Stack.Screen name="Noticias de Ultima Hora" component={NewsScreen}/>
        <Stack.Screen name="videoClickedScreen" component={VideoClickedScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="newsClickedScreen" component={NewsClickedScreen} options={{ title: "",}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


{/*<VertCard
showPlay = {true}
showLabel = {true}
showDuration = {true}
showProgress = {true}
showTitle = {true}
showDescription = {true}
showButtonIcon = {true}
labelText = {"label"}
durationText = {"00:00"}
progressNumber =  {0.5}
titleText = {"Title Placeholder"}
descriptionText = {"Description Placeholder"}
buttonPlayIconName = {"play-circle"}
buttonOptionsIconName = {"dots-vertical"}
roundness = {20}
imagePath = {"https://picsum.photos/id/69/1000/500"}
thumbAspectRatio = {"16:9"}
viewStyle = {"mobile"}
labelMode = {"compact"}
onPlayPress = {""}
onOptionsPress = {""}
/>
<ImageCard  
roundness = {20}
imagePath = {"https://picsum.photos/id/69/1000/500"}
titleText = {"Title"}
subtitleText = {"Subtitle"}
buttonIconName = {"play"}
showTitle = {true}
showButton = {true}
showDescription = {true}
onButtonPress = {""}
thumbAspectRatio = {"16:9"}
/>
<HoriCard
showButton= {true}
showDescription = {true}
showDuration = {true}
showExtra = {true}
showProgress = {true}
showTitle = {true}
roundness = {10}
progressNumber = {0.5}
imagePath = {"https://picsum.photos/id/69/1000/500"}
buttonIconName = {"play"}
titleText = {"Title"}       
descriptionText = {"Description"}
durationText = {"00:00"}
viewStyle = {"mobile"}
onPlayPress = {""}
onExtraPress = {""}
/>
*/}