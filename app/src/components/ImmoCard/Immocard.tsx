import { useState, useEffect } from 'react';
import { Flex, Image, Text } from '@mantine/core';
import BienImage from '../../assets/images/immo1.jpg';


export function ImmoCard() {
    const [bien, setBien] = useState({
        Name: '',
        Price: '',
        Description: '',
        Image: '',
    });

    useEffect(() => {
        fetch('http://localhost:5050/api/immo')
            .then((response) => response.json())
            .then((data) => setBien(data))
            .catch((error) => console.error('Erreur lors du fetch des données:', error));
    }, []);

    if (!bien) {
        return <div>Chargement...</div>;
    }
    return (
        <Flex justify="center" align="center" style={{ width: '100%' }}>
            <Flex>
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
        </Flex>
    );
};
