import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import theme from '../JSONs/theme.json';

const NewsClickedScreen = ({ route }) => {
    const { imageUrl } = route.params;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.palettes.primary.skoiyblue,
            height: 770,
            width: 430,
        },
        image: {
            width: "100%",
            height: 300
        },
        contentContainer: {
            padding: 20,
        },
        text: {
            fontSize: 18,
            lineHeight: 24,
            color: theme.palettes.primary.black,
        },
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: imageUrl }} style={styles.image}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis et ante ultricies semper ut vel magna. Cras ac ante ac tellus iaculis consectetur id vel metus. Vestibulum suscipit justo in ligula interdum malesuada. Cras tristique lorem nec magna ultricies viverra. Nulla ac dictum mauris. In interdum nulla vel orci tincidunt, sit amet suscipit urna scelerisque. Maecenas vehicula diam nec sapien fringilla aliquet. Phasellus ac commodo quam.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default NewsClickedScreen;