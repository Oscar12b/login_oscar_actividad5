// components/UserList.js
import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id_administrador.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>{item.nombre_administrador} {item.apellido_administrador}</Text>
                        <Text style={styles.text}>{item.correo_administrador}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => onEdit(item)}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => onDelete(item.id_administrador)}>
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
        color: '#333',
    },
    text: {
        fontSize: 16,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#5C3D2E',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonDelete: {
        backgroundColor: '#C63E3E',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UserList;
