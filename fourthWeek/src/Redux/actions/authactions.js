
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import * as userTypes from '../types/user';








export const login = (email, password, navigation) => async dispatch => {

    auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {

            console.log(res)
            if (res.user.uid !== "" && typeof res.user.uid !== "undefined") {
                dispatch({
                    type: userTypes.USER_LOGIN,
                    payload: res.user.uid

                });
                navigation.navigate("Main");
            }


        }).catch(error => { alert(error) });


};

export const singup = (email, password, navigation) => async dispatch => {
    console.log('çalışıyor mu')

    auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("as", res)
            dispatch({
                type: userTypes.USER_SIGNUP,
                payload: res.user.uid

            });



            navigation.navigate("Main");
        })
        .catch(error => {


            if (error.code === "auth/email-already-in-use") {
                console.log("Bu e-posta adresi zaten kullanılıyor");
            }
            if (error.code === "auth/invalid-email") {
                console.log("E-posta adresi geçersiz");
            }

            console.log(error);

        });

}