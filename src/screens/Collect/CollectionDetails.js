import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectionDetailsStyles from '../../styles/Collect/CollectionDetailsStyles';

const CollectionDetails = ({ navigation }) => {
    return (
        <ScrollView style={CollectionDetailsStyles.container}>
            <View style={CollectionDetailsStyles.header}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('RecordHistory')}>
                    <Text style={GlobalStyles.backButtonText}> Volver</Text>
                </TouchableOpacity>
                <View style={CollectionDetailsStyles.userInfo}>
                    <Image source={{ uri: 'https://example.com/user-profile.png' }} style={CollectionDetailsStyles.userImage} />
                </View>
            </View>
            <Text style={GlobalStyles.title}>Detalles del recaudo</Text>
            <View style={CollectionDetailsStyles.formContainer}>
                <Text style={GlobalStyles.normalFont}>Unidad</Text>
                <TextInput style={GlobalStyles.input} placeholder="Text" />
                <Text style={GlobalStyles.normalFont}>ID Cliente Apodo</Text>
                <TextInput style={GlobalStyles.input} placeholder="Text" />
                <Text style={GlobalStyles.normalFont}>Cliente</Text>
                <TextInput style={GlobalStyles.input} placeholder="Text" />
                <Text style={GlobalStyles.normalFont}>Valor recaudado</Text>
                <TextInput style={GlobalStyles.input} placeholder="Text" />
            </View>
            <Image source={{ uri: 'https://example.com/invoice.png' }} style={CollectionDetailsStyles.invoiceImage} />
        </ScrollView>
    );
};

export default CollectionDetails;