import { View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { useState } from "react"
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"
import styles from "../config/styles"
import { db } from "../config/firebase"

export default function UsuarioCadastro() {
    const [nome, setNome] = useState("")

    async function handleRegister() {
        console.log(nome);

        
        // addDoc é responsável pela inserção do dado em uma coleção "Tabela"
        const docRef = await addDoc(
            // Primeiro parâmetro é a coleção que é a origem dos dados
            collection(db, "usuarios"),
            // Segundo parâmetro é os dados que serão inseridos
            {
                nome: nome,
                email: "fausto@fausto.com",

            }
        ).then((docRef) => {
            console.log("Id do usuário: ", docRef.id);
        });
    }

    return (
        <View style={styles.container}>
            <Text>Cadastro do Usuário</Text>
            <TextInput
                label="Nome"
                mode="outlined"
                value={nome}
                onChangeText={setNome}
            />
            <Button
                mode="contained"
                onPress={handleRegister}
            >Cadastrar Usuário </Button>
        </View>
    )
}