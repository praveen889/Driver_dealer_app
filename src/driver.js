import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const driver = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 250,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Hi, Driver</Text>

                    <Button
                        title="Log In "
                        onPress={() => navigation.navigate("driverLogin")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />
                    <Button
                        title="Sign Up "
                        onPress={() => navigation.navigate("driverSignIn")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />
                </View>
            </View>
        </LinearGradient>
    )
}

export default driver;