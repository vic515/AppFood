import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <AntDesign
            name="search1"
            size={35}
            color="black"
            style={styles.iconSearch}
             />
            <TextInput
            
            autoCapitalize="none"
            placeholder='Search'
            style={styles.input}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={ onTermSubmit }
            />
        </View>




    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(230,230,230)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    iconSearch: {
        alignSelf: 'center',
        marginHorizontal: 7,
        color: 'rgba(0,0,0,0.3)'
    },
    input: {
        fontSize: 16,
        width: '85%',
    }
});

export default SearchBar;