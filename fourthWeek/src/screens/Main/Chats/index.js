import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const chats = [
    { title: 'React Native', lastmessage: '2.Hafta Ödevi', time: '19.06', unreadedmessagecount: '2', image: 'https://avatars.githubusercontent.com/u/30476529?s=200&v=4' },
    { title: 'JavaScript', lastmessage: 'Hello World', time: '18.06', unreadedmessagecount: '2', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/131px-Unofficial_JavaScript_logo_2.svg.png' },
    { title: 'VsCode', lastmessage: 'hahahhashahs', time: '14.06', unreadedmessagecount: '1', image: 'https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE_400x400.jpg' },
    { title: 'Android', lastmessage: 'asdhashd', time: 'yesterday', unreadedmessagecount: '1', image: 'https://www.webtekno.com/images/editor/default/0002/17/a3e826fd5116e642a3c3a3ef3427e2d4f643ebb0.jpeg' },
]



const Chats = () => {
    const item = ({ title, lastmessage, time, unreadedmessagecount, image }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    width: '100%',
                    borderBottomWidth: 1,
                    borderBottomStartRadius:100,
                    borderBottomColor: '#9aa69d',
                    marginTop: 7,
                    height:70,
                }}>


                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: image }} style={{ justifyContent :'center', width: 60, height: 60, borderRadius: 30 }} />

                    </View>

                    <View style={{ flex: 4, justifyContent: 'center', marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                           
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
                           
                            <Text style={{ fontSize: 16, }}>{time}</Text>
                        
                        </View>
                        
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                           
                            <Text style={{ fontSize: 16, }}>{lastmessage}</Text>
                           
                        
                            <Text style={{ fontSize: 16, fontWeight: 'bold', backgroundColor:'#0693e3',width:18,height:18,borderRadius:9}}>{unreadedmessagecount}</Text>
                        </View>

                    </View>



                </View>

            </View>
        )
    }


    return (
        <View>
            <View style={{
                height: 150,
                paddingHorizontal: 20,
                backgroundColor: 'white'
            }}>

                <View style={{

                    flex:1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ fontSize: 20, color: '#0d6ea3' }}>Edit</Text>
                    
                    <FontAwesome name={'pencil-square-o'} size={20} color={'#0d6ea3'} />
                
                </View>
                
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', marginTop: 10, }}>Chats</Text>
                </View>
               
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View><Text style={{ fontSize: 18, color: '#0d6ea3' }}>Broadcast Lists</Text></View>
                  <View><Text style={{ fontSize: 18, color: '#0d6ea3' }}> New Group</Text></View>
                </View>
               
                <View style={{ width: '110%', height: 0.5, backgroundColor: '#9aa69d', alignSelf: 'center' }}></View>
            </View >





            <View style={{backgroundColor:'white'}}>
                   <ScrollView  >
                    {chats.map((d, i) => item({ ...d, i }))}
                    </ScrollView>
                </View>
           </View>
    );
}



export { Chats };