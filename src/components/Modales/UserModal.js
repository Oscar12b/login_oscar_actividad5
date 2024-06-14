// components/UserModal.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const UserModal = ({
    isVisible,
    onClose,
    onSubmit,
    nombre, setNombre,
    apellido, setApellido,
    correo, setCorreo,
    alias, setAlias,
    clave, setClave,
    confirmarClave, setConfirmarClave,
    modalType
}) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                    {modalType === 'create' ? 'Crear Usuario' : 'Editar Usuario'}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={nombre}
                    onChangeText={text => setNombre(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={apellido}
                    onChangeText={text => setApellido(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    value={correo}
                    onChangeText={text => setCorreo(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {modalType === 'create' && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Alias"
                            value={alias}
                            onChangeText={text => setAlias(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            secureTextEntry
                            value={clave}
                            onChangeText={text => setClave(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmar Contraseña"
                            secureTextEntry
                            value={confirmarClave}
                            onChangeText={text => setConfirmarClave(text)}
                        />
                    </>
                )}
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSubmit}
                >
                    <Text style={styles.buttonText}>
                        {modalType === 'create' ? 'Crear' : 'Editar'} Usuario
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#5C3D2E',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UserModal;
