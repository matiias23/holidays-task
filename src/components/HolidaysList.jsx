import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const HolidaysList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los feriados
    axios.get('https://www.feriadosapp.com/api/holidays.json')
      .then(response => {
        setHolidays(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener los feriados:', error);
      });
  }, []);

  return (
    <View>
      <Text>Lista de Feriados</Text>
      <FlatList
        data={holidays}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date}</Text>
            <Text>{item.title}</Text>
            <Text>{item.type}</Text>
            <Text>{item.inalienable}</Text>
            <Text>{item.extra}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HolidaysList;
