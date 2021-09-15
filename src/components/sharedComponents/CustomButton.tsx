import React from "react";
import { StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    onPress: () => void;
    text: string;
    backgroundColor?: string;
    borderColor: string
    customStyle: any;
}
const CustomButton: React.FC<Props> = ({ onPress, text, backgroundColor, borderColor, customStyle }: Props) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                {
                    backgroundColor: backgroundColor ? backgroundColor : 'yellow',
                    borderColor,
                    width: '50%',
                    ...customStyle
                },
            ]}
            onPress={() => onPress()}>
            <View style={{ flex: 1 }}>
                <Text style={[styles.buttonText]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        alignSelf: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        flex: 0
    },
    buttonText: {
        fontFamily: 'NunitoSans-Black',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
})
export default CustomButton