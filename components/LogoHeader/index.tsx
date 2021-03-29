import {Image, Text, View} from "react-native";
import introspect_logo_png from "../../assets/images/introspect_logo_png.png";
import React from "react";



const LogoHeader = () => {

    return (<View style={{backgroundColor: '#f2f0e4', width: '57%', height: 49, position: 'absolute',}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
            <View style={{width: 160, height: 40, margin: 5, marginLeft: 20,}}>
                <Image
                    source={introspect_logo_png}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

        </View>

        <View style={{
            backgroundColor: 'blue',
            margin: 10,
            alignItems: 'center',
            borderRadius: 50,
            width: 100,
            alignSelf: 'flex-end',
            marginLeft: 300,
            position: 'absolute',
        }}>
            <Text style={{fontSize: 15, margin: 5, fontWeight: 'bold', color: 'white'}}>{'0 INTRO'}</Text>
        </View>
    </View>
    )
}

export default LogoHeader;
