import * as React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";


export default function Screen1({ navigation }) {

    return (
        <View style={[{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }]}>
            <TouchableOpacity onPress={() => navigation.navigate("screen2")}>
                <Text>
                    Press To Navigate Screen 2
                </Text>
            </TouchableOpacity>
        </View>
    );
}
