/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const citiesInPakistan = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Faisalabad',
  'Rawalpindi',
  'Multan',
  'Gujranwala',
  'Quetta',
  'Peshawar',
  'Sialkot',
  'Bahawalpur',
  'Sukkur',
  'Jhelum',
  'Hyderabad',
  // Add more cities as needed
];

function App({ }): JSX.Element {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [showDepartureList, setShowDepartureList] = useState(false);
  const [showDestinationList, setShowDestinationList] = useState(false);

  const handleSearch = () => {
    if (!departure || !destination) {
      alert('Please select both departure and destination.');
    } else {
      alert(`Searching for flights from ${departure} to ${destination}`);
      // You can implement the flight search functionality here
    }
  };

  const selectCity = (city: React.SetStateAction<string>, isDeparture: boolean) => {
    if (isDeparture) {
      setDeparture(city);
      setShowDepartureList(false);
    } else {
      setDestination(city);
      setShowDestinationList(false);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => (
            <SafeAreaView style={styles.container}>
              <StatusBar barStyle="dark-content" backgroundColor="white" />
              <View style={styles.header}>
                <Text style={styles.title}>Airline Ticket Booking</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>Select Departure:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Departure City"
                  value={departure}
                  onFocus={() => setShowDepartureList(true)}
                />
                {showDepartureList && (
                  <FlatList
                    data={citiesInPakistan}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => selectCity(item, true)}>
                        <Text style={styles.listItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                  />
                )}
                <Text style={styles.label}>Select Destination:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Destination City"
                  value={destination}
                  onFocus={() => setShowDestinationList(true)}
                />
                {showDestinationList && (
                  <FlatList
                    data={citiesInPakistan}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => selectCity(item, false)}>
                        <Text style={styles.listItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                  />
                )}
                <Button title="Search Flights" onPress={handleSearch} />
              </View>
            </SafeAreaView>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'blue',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  listItem: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});

export default App;
function alert(_arg0: string) {
  throw new Error('Function not implemented.');
}

