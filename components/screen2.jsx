import * as React from "react";
import {
    Button,
    Text,
} from "react-native";
import {Touchable} from "react-native-web";


export default function Screen2({ navigation }) {

    return (
        <View style={{ flex: 1, padding: 0 }}>
            <Text onPress={() => navigation.navigate("screen1")}>
                Screen2
            </Text>


        </View>
    );
}
