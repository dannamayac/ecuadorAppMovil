import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import Header from '../../components/Header';
import CollectStyles from '../../styles/Collect/CollectStyles';
import { REACT_APP_API_BASE_URL, REACT_APP_MANAGEMENT_UNIT_ENDPOINT } from '@env';

const RecordHistory = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_MANAGEMENT_UNIT_ENDPOINT}`);
            const result = await response.json();
            console.log('API Response:', result);
            if (result && result["Gestion de Unidades"]) {
                setData(result["Gestion de Unidades"]);
            } else {
                console.log('Data format incorrect:', result);
                setData([]);
                Alert.alert('Error', 'Formato de datos incorrecto');
            }
        } catch (err) {
            setError(err);
            Alert.alert('Error', 'Ha ocurrido un error al cargar los datos');
        } finally {
            setLoading(false);
        }
    };

    const renderCards = (item) => (
        <View key={item.id} style={RecordHistoryStyles.card} >
            <View style={RecordHistoryStyles.header}>
                <Text style={RecordHistoryStyles.clientID}>{item.unit} - {item.location}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CollectionDetails')}>
                    <MaterialCommunityIcons name="dots-horizontal" size={33} color="#1b2f8e" />
                </TouchableOpacity>
            </View>
            <View style={RecordHistoryStyles.infoContainer}>
                <Text style={RecordHistoryStyles.value}>Código</Text>
                <Text style={RecordHistoryStyles.valueText}>{item.code}</Text>
                <Text style={RecordHistoryStyles.paymentMethod}>Estado</Text>
                <Text style={RecordHistoryStyles.paymentMethodText}>{item.id_state}</Text>
            </View>
            <View style={RecordHistoryStyles.statusContainer}>
                <TouchableOpacity
                    style={[
                        RecordHistoryStyles.statusButton,
                        { backgroundColor: item.id_state === 1 ? '#1b2f8e' : '#cc1515' }
                    ]}
                    onPress={() => navigation.navigate('PaymentHistory')}
                >
                    <Text style={RecordHistoryStyles.buttonText}>{item.id_state === 1 ? 'Activo' : 'Inactivo'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={RecordHistoryStyles.container}>
                <Header />
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={RecordHistoryStyles.container}>
                <Header />
                <Text>Error al cargar los datos</Text>
            </View>
        );
    }

    return (
        <View style={RecordHistoryStyles.container}>
            <Header />
            <View style={RecordHistoryStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={RecordHistoryStyles.subTitleContainer}>
                    <Text style={CollectStyles.subTitle}>Historial de registros (ventas/Recaudos)</Text>
                </View>
            </View>
            <ScrollView>
                {data.map(renderCards)}
            </ScrollView>
            <AlertButton />
        </View>
    );
};

export default RecordHistory;
