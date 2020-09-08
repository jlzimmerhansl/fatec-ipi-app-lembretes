import React from 'react';
import { View, Text, StyleSheet, TouchabelOpacity } from 'react-native';

// import { Container } from './styles';

const LembreteItem = (props) => {
    return (
        <TouchabelOpacity onPress={() => props.onDelete(props.chave)}>
            <View style={styles.itemList}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchabelOpacity>
    );
}


const styles = StyleSheet.create({
    itemList: {
        padding: 12,
        backgroundColor: '#CCC',
        borderBottomColor: "#000",
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default LembreteItem;