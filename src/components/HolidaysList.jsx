import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HolidaysList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los feriados
    axios.get('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => {
        setHolidays(response.data.data);
        console.log(response);        
      })
      .catch(error => {
        console.error('Error al obtener los feriados:', error);
      });
  }, []);

  // Función para formatear la fecha a "dia-mes-año"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); // Agregar un día
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.date}>{formatDate(item.date)}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.inalienable}>{item.inalienable ? 'Irrenunciable' : 'Feriado legal'}</Text>
      <Text style={styles.extra}>{item.extra}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Feriados</Text>
      <FlatList
        data={holidays}
        keyExtractor={(item) => item.date}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
  },
  type: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  inalienable: {
    fontSize: 14,
    color: '#008000', // verde para "Inalienable"
  },
  extra: {
    fontSize: 14,
  },
});

export default HolidaysList;
