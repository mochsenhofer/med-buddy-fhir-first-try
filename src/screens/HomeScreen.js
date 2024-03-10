import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { commonStyle } from "../styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { selectLanguageScreenRoute } from "../navigation/Navigation";


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={[commonStyle.body, styles.homePage]} 
            onPress={() => navigation.navigate(selectLanguageScreenRoute)}>
                <Image
                    style={styles.homeImage}
                    source={require("../assets/images/home-logo.png")}
                />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    homeImage: {
        resizeMode: "contain",
        width: "75%",
    },
    homePage: {
        justifyContent: "center",
        alignItems: "center",
    },
});