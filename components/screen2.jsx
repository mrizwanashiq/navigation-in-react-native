import * as React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";


export default function Screen2({ navigation }) {

    return (
        <View style={[{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }]}>
            <TouchableOpacity onPress={() => navigation.navigate("screen1")}>
                <Text>
                    Press To Navigate Screen 1
                </Text>
            </TouchableOpacity>
        </View>
    );
}
