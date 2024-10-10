import { useState, useEffect } from 'react';
import { Flex, Image, Text } from '@mantine/core';

interface Immo {
    _id: string;
    Name: string;
    Price: number;
    Description: string;
    Image: string;
}

export function ImmoCard() {
    // Modifier l'état pour qu'il soit un tableau d'objets Immo
    const [biens, setBiens] = useState<Immo[]>([]);

    useEffect(() => {
        fetch('http://localhost:5050/api/immo')
            .then((response) => response.json())
            .then((data) => setBiens(data)) // Stocke les données en tant que tableau
            .catch((error) => console.error('Erreur lors du fetch des données:', error));
    }, []);

    // Vérifier si le tableau est vide
    if (biens.length === 0) {
        return <div>Chargement...</div>;
    }

    return (
        <Flex justify="center" align="center" direction="column" style={{ width: '100%' }}>
            {biens.map((bien) => ( // Itérer sur le tableau biens
                <Flex key={bien._id} align="center" mb="md"> {/* Utilise une clé unique */}
                    <Image
                        src={bien.Image}
                        alt="Image du bien"
                        width={200}
                    />
                    <Flex direction="column" ml="md">
                        <Text fw={500} size="lg">{bien.Name}</Text>
                        <Text color="gray">Prix: {bien.Price} €</Text>
                        <Text>{bien.Description}</Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};
