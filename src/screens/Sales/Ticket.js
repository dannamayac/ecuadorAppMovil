import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { PaperProvider } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import TicketStyles from '../../styles/sales/TicketStyles';
import Header from '../../components/Header';

const Ticket = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la cámara.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la cámara.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    return (
        <PaperProvider>
            <View style={TicketStyles.container}>
            <Header />
                <Text style={TicketStyles.title}>A continuación, proceda a cargar una foto del registro de la venta</Text>
                <View style={TicketStyles.imageContainer}>
                    {image ? (
                        <Image source={{ uri: image }} style={TicketStyles.image} />
                    ) : (
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <View style={TicketStyles.imageButtonOverlay}>
                                <Text style={TicketStyles.imageButtonText}>Agregar foto</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity style={GlobalStyles.redButton} onPress={() => navigation.goBack()}>
                    <Text style={GlobalStyles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.greenButton} onPress={takePhoto}>
                    <Text style={GlobalStyles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={TicketStyles.modalOverlay}>
                    <View style={TicketStyles.modalContainer}>
                        <TouchableOpacity style={TicketStyles.modalButton} onPress={pickImage}>
                            <Text style={TicketStyles.modalButtonText}>Seleccionar de la galería</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={TicketStyles.modalButton} onPress={takePhoto}>
                            <Text style={TicketStyles.modalButtonText}>Tomar foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={TicketStyles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={TicketStyles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </PaperProvider>
    );
};

export default Ticket;