import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

// import { Container } from './styles';

const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');
    const capturaLembrete = (lembrete) => {
        setLembrete(lembrete);
    }

    return (
        <View style={styles.lembreteView}>
            <TextInput
                placeholder="Lembrar..."
                style={styles.lembreteTextInput}
                onChangeText={capturaLembrete}
                value={lembrete}
            />

            <Button
                title="Adicionar"
                onPress={() => props.onAdicionarLembrete}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    lembreteView: {
        marginBottom: 8
    },
    lembreteTextInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 8,
        textAlign: center
    }
});

export default LembreteInput;