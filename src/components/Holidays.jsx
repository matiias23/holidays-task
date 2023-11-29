import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Alert, SafeAreaView } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import { List } from 'react-native-paper';
import HolidaysList from '../components/HolidaysList';

const Holidays = ({}) => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <List.Section title="Feriados">
          <List.Accordion
            title="Feriados Año 2023"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded} // Puedes gestionar la expansión aquí
            onPress={handlePress}>
            {/* Aquí incluye el componente HolidaysList */}
            <HolidaysList />
          </List.Accordion>
        </List.Section>
      );
    };

export default Holidays