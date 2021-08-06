import React from 'react';
import { View,Image ,Text} from 'react-native';


const Splash = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
            <View style={{flex:5}}>
           <Image source={{ uri: 'https://i1.wp.com/ariskadikoyvip.com/wp-content/uploads/2017/08/whatsapp-logo-png-transparent.png?ssl=1' }} style={{ opacity:0.7, marginTop:200 , height: 100, width: 100 }} />
            </View>
                <View style={{flex:1}}>
                <Text style={{ fontSize: 20, marginLeft: 80, color:'#a9a9a9'}}>from</Text>
                <Text style={{ fontSize: 40, justifyContent: 'center', color:'#25d366'}}>FACEBOOK</Text>
            </View>
        </View>

    );
}

export { Splash };