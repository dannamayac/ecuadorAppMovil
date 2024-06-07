import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectionDetailsStyles from '../../styles/Collect/CollectionDetailsStyles';
import Header from '../../components/Header';
import AlertButton from '../../components/AlertButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';

const CollectionDetails = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={CollectionDetailsStyles.container}>
                <View style={CollectionDetailsStyles.header}>
                    <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('RecordHistory')}>
                        <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={RecordHistoryStyles.subTitleContainer}>
                    <Text style={CollectStyles.subTitle}>Detalles del recaudo</Text>
                </View>
                <View style={[RecordHistoryStyles.subTitleContainer, { marginTop: 20 }]}>
                    <Text style={GlobalStyles.normalFont}>Unidad</Text>
                    <TextInput style={GlobalStyles.input} placeholder="Text" />
                    <Text style={GlobalStyles.normalFont}>ID Cliente Apodo</Text>
                    <TextInput style={GlobalStyles.input} placeholder="Text" />
                    <Text style={GlobalStyles.normalFont}>Cliente</Text>
                    <TextInput style={GlobalStyles.input} placeholder="Text" />
                    <Text style={GlobalStyles.normalFont}>Valor recaudado</Text>
                    <TextInput style={GlobalStyles.input} placeholder="Text" />
                </View>
                <View style={CollectionDetailsStyles.invoiceContainer}>
                    <Image source={{ uri: 'https://example.com/invoice.png' }} style={CollectionDetailsStyles.invoiceImage} />
                    <TouchableOpacity style={CollectionDetailsStyles.imageButtonOverlay}>
                        <MaterialCommunityIcons name="camera" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <AlertButton />
        </View>
    );
};

export default CollectionDetails;