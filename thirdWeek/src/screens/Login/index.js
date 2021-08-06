import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { changecolorstatusbar } from '~/Redux/actions/statusbar';
import { login } from '~/Redux/actions/authactions';
import { useState } from 'react';

const Login = () => {





    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const Login = () => {
        dispatch(login(email, password, navigation))
    }


    /*
        const changestsColor = (color) => {
            dispatch(changecolorstatusbar(color))
        }*/




    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text style={{
                fontWeight: "bold",
                fontSize: 50,
                color: "#25D366",
                marginBottom: 40
            }}>Whatsapp</Text>
            <View style={{
                width: "80%",
                backgroundColor: "#ECE5DD",
                borderRadius: 25,
                height: 50,
                marginBottom: 20,
                justifyContent: "center",
                padding: 20
            }} >
                <TextInput
                    style={{
                        height: 50,
                        color: "black"
                    }}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={d => setEmail(d)}
                />
            </View>
            <View style={{
                width: "80%",
                backgroundColor: "#ECE5DD",
                borderRadius: 25,
                height: 50,
                marginBottom: 20,
                justifyContent: "center",
                padding: 20
            }} >
                <TextInput
                    secureTextEntry
                    style={{
                        height: 50,
                        color: "black"
                    }}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={d => setPassword(d)}
                />
            </View>
            <TouchableOpacity>
                <Text style={{
                    color: "black",
                    fontSize: 11
                }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Login()}




                style={{
                    width: "80%",
                    backgroundColor: "#075E54",
                    borderRadius: 25,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40,
                    marginBottom: 10
                }}>
                <Text style={{ color: "black" }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SignUp')

                }}>
                <Text style={{
                    color: "black",
                    fontSize: 11
                }}>SignUp</Text>
            </TouchableOpacity >
        </View >
    );
};

export { Login };

