import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import userProfileIcon from '../assets/avatar1.png';
import HeaderStyles from '../styles/HeaderStyles';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleNotificationsDropdown = () => {
        setShowNotificationsDropdown(!showNotificationsDropdown);
    };

    const notifications = [
        { id: 1, text: 'Notificación 1', icon: 'clock-outline', color: 'red' },
        { id: 2, text: 'Notificación 2', icon: 'key-outline', color: 'yellow' },
        { id: 3, text: 'Notificación 3', icon: 'currency-usd', color: 'green' },
    ];

    return (
        <View style={HeaderStyles.header}>
            <TouchableOpacity style={HeaderStyles.menuButton} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <MaterialCommunityIcons name="menu" size={30} color="black" />
            </TouchableOpacity>
            <View style={HeaderStyles.headerUser}>
                <TouchableOpacity style={HeaderStyles.notificationButton} onPress={toggleNotificationsDropdown}>
                    <MaterialCommunityIcons name="bell-outline" size={24} color="rgb(118, 117, 117)" />
                    {showNotificationsDropdown && (
                        <View style={HeaderStyles.notificationDropdown}>
                            {notifications.map(notification => (
                                <View key={notification.id} style={HeaderStyles.notificationItem}>
                                    <MaterialCommunityIcons name={notification.icon} size={16} color={notification.color} />
                                    <Text style={HeaderStyles.notificationText}>{notification.text}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={HeaderStyles.userPhoto}>
                    <Image source={userProfileIcon} style={HeaderStyles.userPhotoImage} />
                </TouchableOpacity>
                <View style={HeaderStyles.userInfo}>
                    <Text style={HeaderStyles.userName}>Lucas</Text>
                    <Text style={HeaderStyles.userUsername}>@lucas210</Text>
                </View>
                <TouchableOpacity onPress={toggleDropdown}>
                    <MaterialCommunityIcons name="chevron-down" size={24} color="rgb(118, 117, 117)" />
                </TouchableOpacity>
                {showDropdown && (
                    <View style={HeaderStyles.dropdownMenu}>
                        <TouchableOpacity>
                            <Text>Cerrar sesión</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Header;