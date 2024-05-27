import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import PhotoAuthenticationStyles from '../../styles/Collect/PhotoAuthenticationStyles';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header';

const PhotoAuthentication = ({ navigation }) => {
    const [leftProfilePhoto, setLeftProfilePhoto] = useState(null);
    const [rightProfilePhoto, setRightProfilePhoto] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const pickImage = async (setImage) => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera is required!");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const closeCash = () => {
        setModalVisible(true);
    };

    const continueAfterClose = () => {
        setModalVisible(false);
        navigation.navigate('CashClosing', { closed: true });
    };

    return (
        <ScrollView style={PhotoAuthenticationStyles.container}>
            <Header />
            <Text style={PhotoAuthenticationStyles.title}>Cierre de caja</Text>
            <Text style={PhotoAuthenticationStyles.subtitle}>
                Para continuar con el cierre de caja proceda a cargar las siguientes fotos.
            </Text>

            <View style={PhotoAuthenticationStyles.photoSection}>
                <Text style={PhotoAuthenticationStyles.photoLabel}>Perfil izquierdo</Text>
                <TouchableOpacity
                    style={PhotoAuthenticationStyles.photoPlaceholder}
                    onPress={() => pickImage(setLeftProfilePhoto)}
                >
                    {leftProfilePhoto ? (
                        <Image source={{ uri: leftProfilePhoto }} style={PhotoAuthenticationStyles.photo} />
                    ) : (
                        <View style={PhotoAuthenticationStyles.photoIcon}>
                            <MaterialCommunityIcons name="camera" size={32} color="white" />
                        </View>
                    )}
                </TouchableOpacity>
                {leftProfilePhoto && (
                    <View style={PhotoAuthenticationStyles.overlay}>
                        <MaterialCommunityIcons name="check-circle" size={32} color="green" />
                    </View>
                )}
                <TouchableOpacity
                    style={PhotoAuthenticationStyles.button}
                    onPress={() => pickImage(setLeftProfilePhoto)}
                >
                    <Text style={PhotoAuthenticationStyles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            </View>

            <View style={PhotoAuthenticationStyles.photoSection}>
                <Text style={PhotoAuthenticationStyles.photoLabel}>Perfil derecho</Text>
                <TouchableOpacity
                    style={PhotoAuthenticationStyles.photoPlaceholder}
                    onPress={() => pickImage(setRightProfilePhoto)}
                >
                    {rightProfilePhoto ? (
                        <Image source={{ uri: rightProfilePhoto }} style={PhotoAuthenticationStyles.photo} />
                    ) : (
                        <View style={PhotoAuthenticationStyles.photoIcon}>
                            <MaterialCommunityIcons name="camera" size={32} color="white" />
                        </View>
                    )}
                </TouchableOpacity>
                {rightProfilePhoto && (
                    <View style={PhotoAuthenticationStyles.overlay}>
                        <MaterialCommunityIcons name="check-circle" size={32} color="green" />
                    </View>
                )}
                <TouchableOpacity
                    style={PhotoAuthenticationStyles.button}
                    onPress={() => pickImage(setRightProfilePhoto)}
                >
                    <Text style={PhotoAuthenticationStyles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={PhotoAuthenticationStyles.closeButton} onPress={closeCash}>
                <Text style={PhotoAuthenticationStyles.closeButtonText}>Cerrar caja</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={PhotoAuthenticationStyles.modalContainer}>
                    <View style={PhotoAuthenticationStyles.modalView}>
                        <Text style={PhotoAuthenticationStyles.modalText}>La caja se ha cerrado con éxito</Text>
                        <TouchableOpacity
                            style={PhotoAuthenticationStyles.modalButton}
                            onPress={continueAfterClose}
                        >
                            <Text style={PhotoAuthenticationStyles.modalButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default PhotoAuthentication;