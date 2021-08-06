import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { singup } from '../../Redux/actions/authactions'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';









const SignUp = props => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const signUp = () => {
        dispatch(singup(email, password, navigation))
    }

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
                marginBottom: 40,

            }}>WhatsApp</Text>
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
                    placeholder="Full Name"
                    placeholderTextColor="#003f5c"
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

                    style={{
                        height: 50,
                        color: "black"
                    }}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    value={email}
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
                    value={password}
                    onChangeText={d => setPassword(d)}

                />
            </View>



            <TouchableOpacity

                onPress={() => signUp()}
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
                <Text style={{ color: "black" }}>Sign Up</Text>
            </TouchableOpacity>



        </View>
    );
};




export { SignUp }
