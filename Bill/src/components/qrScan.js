import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';

const QRScan = () => {

        return (
            <View>
                <Text>Barcode Scanner</Text>
                <Camera style={styles.preview} aspect={Camera.constants.Aspect.fill}></Camera>
            </View>
        )
    }

    export default QRScan
