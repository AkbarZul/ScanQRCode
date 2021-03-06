import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  import QRCode from 'react-native-qrcode-svg';

  import { useSelector } from 'react-redux';
  
  const Scan = ({navigation}) => {
    const [inputText, setInputText] = useState('');
    const [qrvalue, setQrvalue] = useState('');

    const fullname = useSelector((state) => state.authReducer.fullname)
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Generation of QR Code in React Native
          </Text>
          <QRCode
            //QR code value
            value={qrvalue ? qrvalue : 'NA'}
            //size of QR Code
            size={250}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor="white"
            //Logo of in the center of QR Code (Optional)
            logo={{
              url:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
            }}
            //Center Logo size  (Optional)
            logoSize={30}
            //Center Logo margin (Optional)
            logoMargin={2}
            //Center Logo radius (Optional)
            logoBorderRadius={15}
            //Center Logo background (Optional)
            logoBackgroundColor="yellow"
          />
          <Text style={styles.textStyle}>
            Please insert any value to generate QR code
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={
              (inputText) => setInputText(inputText)
            }
            placeholder="Enter Any Value"
            value={inputText}
          />
          <Text style={styles.fullname2}>
              {fullname}
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setQrvalue(inputText)} >
            <Text style={styles.buttonTextStyle} onPress={() => navigation.replace('Generate')}>
              Generate QR Code
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  export default Scan;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    titleStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textStyle: {
      textAlign: 'center',
      margin: 10,
    },
    textInputStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#51D8C7',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#51D8C7',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 30,
      padding: 10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    fullname2: {
        fontSize: 15,
    }
  });