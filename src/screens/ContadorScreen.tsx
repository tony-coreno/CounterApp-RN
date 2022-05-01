import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.text}>Contador : {contador}</Text>

      {/* <Button title="Contar" onPress={() => setContador(contador + 1)} color='#000' /> */}

      <TouchableOpacity  style={styles.fabLocationBR} onPress={() => setContador(contador + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.fabLocationBL} onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#232c34',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff'
  },
  fabLocationBR:{
    position: 'absolute',
    bottom: 30,
    right : 30
  },
  fabLocationBL:{
    position: 'absolute',
    bottom: 30,
    left : 30
  },
  fab:{
      backgroundColor: '#5856D6',
      width: 50,
      height: 50,
      borderRadius: 100,
      justifyContent: 'center'
  },
  fabText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center'
  }
});
