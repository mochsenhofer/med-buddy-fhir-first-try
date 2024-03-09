import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { selectLanguageScreenRoute } from "../navigation/Navigation";


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={commonStyle.body} 
            onPress={() => navigation.navigate(selectLanguageScreenRoute)}>
                <Image
                    style={commonStyle.body}
                    source={require("../assets/images/home-logo.png")}
                />
        </TouchableOpacity>
    );
};