import { Flex, Image, Text } from '@mantine/core';
import BienImage from '../../assets/images/immo1.jpg';

export function ImmoCard() {
    return (
        <Flex justify="center" align="center" style={{ width: '100%' }}>
            <Flex>
                <Image
                    src={BienImage}
                    alt="Image du bien"
                    width={200}
                />

                <Flex direction="column" ml="md">
                    <Text fw={500} size="lg">Nom du bien</Text>
                    <Text color="gray">Prix: 300 000 €</Text>
                    <Text>Description du bien...</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
