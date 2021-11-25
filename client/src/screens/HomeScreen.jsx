import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import { setDifficult } from "../store/actions" 

export default function HomeScreen(props) {
    const [user, setUser] = useState("")

    const dispatch = useDispatch()

    function goToGamePlay(difficult) {
        dispatch(setDifficult(difficult))
        props.navigation.navigate("Game", {
            name: user
        })
    }

    function handleInputName(text) {
        setUser(text)
    }

    return(
        <View style={styles.container}>
            <View style={styles.collectionWord}>
                <Text style={styles.titleGame}>SUDOKU</Text>
                <Text style={styles.greeting}>
                    Welcome, Please Input Your Name ! 
                </Text>
                <TextInput
                style={[styles.inputName]}
                onChangeText={text => handleInputName(text)}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.buttonCss}>
                    <View style={styles.compButton}>
                        <Button
                        onPress={() => goToGamePlay('easy')}
                        title="Easy"
                        color="#ff6b81"
                        />
                    </View>
                    <View style={styles.compButton}>
                        <Button
                        onPress={() => goToGamePlay('medium')}
                        title="Medium"
                        color="#ff6b81"
                        />
                    </View>
                    <View style={styles.compButton}>
                        <Button
                        onPress={() => goToGamePlay('hard')}
                        title="Hard"
                        color="#ff6b81"
                        />
                    </View>
                </View>
            </View>
        </View>
     
    )
}

const styles = StyleSheet.create({
    collectionWord: {
        alignItems: "center",
        justifyContent: "center"
    },
    titleGame: {
        fontSize: 25,
        marginTop: 70
    },
    greeting: {
        marginTop: 80,
        marginBottom: 20
    },
    conTry: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#eccc68",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonCss: {
        flex: 1
    },
    compButton: {
        marginBottom: 15
    },
    row: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center"
    },
    inputName: {
        backgroundColor: "white",
        marginBottom: 80,
        width: 190,
        height: 30,
        borderWidth: 1,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 19,
        padding: 0,
        margin: 1,
        alignSelf: 'center',
        textAlign: "center"
      }
})