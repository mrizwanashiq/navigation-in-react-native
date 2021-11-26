import * as React from "react";
import {
    Button,
    Text,
} from "react-native";
import {Touchable} from "react-native-web";


export default function Screen1({ navigation }) {

    return (
        <View style={{ flex: 1, padding: 0 }}>
            <Text onPress={() => navigation.navigate("screen2")}>
                Screen1
            </Text>


        </View>
    );
}
