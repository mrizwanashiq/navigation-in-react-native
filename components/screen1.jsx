import * as React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default class Screen2 extends React.Component {
// export default function Screen1() {
    constructor() {
        super();
        this.state = {color: "red"};
    }


    render() {
        const navigation = useNavigation();

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
}
