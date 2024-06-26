import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import theme from '../JSONs/theme.json';

export function ImageCard({
    roundness,imagePath,titleText,subtitleText,buttonIconName,showTitle,showButton,showDescription,onPlayPress,onCardPress,thumbAspectRatio,textColor
}) {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 50,
            width: 50,
            height: 50,
            position: 'absolute',
            right: 60,
            top: 45,
            zIndex: 1,
            backgroundColor: 'white'
        },
        cardContainer: {
            margin: 30,
            backgroundColor: theme.palettes.secondary.background,
            height: 400,
            width: 350,
            top: 10,
            borderRadius: roundness,
            alignSelf: 'center',
            alignContent: 'center',
            shadowColor: theme.palettes.primary.dark,
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
        },
        imageContainer: {
            top: 50,
            height: '80%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: roundness,
        },
        titleBox: {
            bottom: 100,
            left: 25,
            flexDirection: 'row',
        },
        titleContainer: {
            top: 60,
            width: 210,
            padding: 10,
            alignSelf: 'flex-start',
            fontSize: theme.styles.title.fontSize,
            color: textColor,
        },
        subtitleContainer: {
            top: -50,
            left: 25,
            width: 300,
            padding: 10,
            alignSelf: 'flex-start',
            fontSize: theme.styles.subtitle.fontSize,
            color: textColor,
        },
    });

    const imageHeight = 130;
    let imageWidth = '100%';

    if (thumbAspectRatio === '16:9') {
        cardWidth = "85%";
        imageWidth = "100%";
    } else if (thumbAspectRatio === '21:9') {
        imageWidth = (21 / 9) * imageHeight;
        cardWidth = imageWidth;
    } else if (thumbAspectRatio === '20:7') {
        imageWidth = (20 / 7) * imageHeight;
        cardWidth = imageWidth;
    }

    return (
        <Pressable onPress={() => {
            onCardPress(imagePath);
        }}>
            <View style={styles.cardContainer}>
                <Image
                    style={styles.imageContainer}
                    source={{ uri: imagePath }}
                />
                <View style={styles.titleBox}>
                    {showTitle && (
                        <Text style={styles.titleContainer}>
                            {titleText}
                        </Text>
                    )}
                    {showButton && (
                        <IconButton
                            icon={buttonIconName}
                            style={styles.button}
                            onPress={() => {
                                onPlayPress(imagePath);
                            }}
                        />
                    )}
                </View>
                {showDescription && (
                    <Text style={styles.subtitleContainer}>
                        {subtitleText}
                    </Text>
                )}
            </View>
        </Pressable>
    );
}