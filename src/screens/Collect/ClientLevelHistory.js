import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import InfoClientCollectStyles from '../../styles/Collect/InfoClientCollectStyles';
import Header from '../../components/Header';

const getColorForLevel = (level) => {
    switch (level) {
        case 'Nivel Plata':
            return 'rgba(192, 192, 192, 0.5)';
        case 'Nivel Oro':
            return 'rgba(255, 215, 0, 0.5)';
        case 'Nivel Bronce':
            return 'rgba(205, 127, 50, 0.5)';
        default:
            return '#f9f9f9';
    }
};

const ClientLevelHistory = ({ route, navigation }) => {
    const { title } = route.params || {};

    const levels = [
        { dateRange: '12/03/22 - 20/04/22', duration: '2 meses', level: 'Nivel Plata', icon: require('../../assets/Group 239046.png') },
        { dateRange: '12/03/22 - 20/04/22', duration: '1 mes', level: 'Nivel Oro', icon: require('../../assets/Group 239046.png') },
        { dateRange: '12/03/22 - 20/04/22', duration: '2 meses', level: 'Nivel Bronce', icon: require('../../assets/Group 239046.png') }
    ];

    return (
        <ScrollView style={PaymentStyles.container}>
        <Header />
            <View style={PaymentStyles.sectionContainer}>
                <View style={InfoClientCollectStyles.headerContainer}>
                    <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
                </View>
                <View style={InfoClientCollectStyles.section}>
                    <Text style={GlobalStyles.title}>Historial de niveles</Text>
                </View>
                {levels.map((level, index) => (
                    <View key={index} style={InfoClientCollectStyles.levelHistoryContainer}>
                        <View style={InfoClientCollectStyles.levelHistoryDetails}>
                            <Text style={InfoClientCollectStyles.levelHistoryDate}>{level.dateRange}</Text>
                            <Text style={InfoClientCollectStyles.levelHistoryText}>{level.duration}</Text>
                        </View>
                        <View style={[InfoClientCollectStyles.levelHistoryBadge, { backgroundColor: getColorForLevel(level.level) }]}>
                            <Image source={level.icon} style={InfoClientCollectStyles.levelIcon} />
                            <Text style={InfoClientCollectStyles.levelHistoryText}>{level.level}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={GlobalStyles.blueButton} onPress={() => navigation.navigate('InfoClientCollect')}>
                <Text style={GlobalStyles.buttonText}>Volver</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ClientLevelHistory;