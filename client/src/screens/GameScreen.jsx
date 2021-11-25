import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import BoxComponent from "../components/boxComponents"

export default function GameScreen({ navigation, route }) {

    const { name } = route.params

    function goToHome() {
        navigation.navigate("Home")
    }

    return(
        <View style={styles.container}>
            <View style={styles.compGreeting}>
                <View style={styles.geest}>
                    <Text>You can do it {name} !!!</Text>
                </View>
                <Button 
                    onPress={() => goToHome()}
                    title="Back to Home"
                    color="#2ed573"
                />
            </View>
            <BoxComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eccc68",
        alignItems: "center",
        justifyContent: "center"
    },
    compGreeting: {
        marginBottom: 20
    },
    geest: {
        marginBottom: 10
    }
})