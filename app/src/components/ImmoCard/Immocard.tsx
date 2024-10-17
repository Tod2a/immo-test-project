import { Flex, Image, Text } from '@mantine/core';

interface ImmoCardProps {
    id: string,
    name: string,
    price: number,
    description: string,
    image: string,
}

export function ImmoCard({ id, name, price, description, image }: ImmoCardProps) {

    return (
        <Flex key={id} align="center" mb="md">
            <Image
                src={image}
                alt="Image du bien"
                width={200}
            />
            <Flex direction="column" ml="md">
                <Text fw={500} size="lg">{name}</Text>
                <Text color="gray">Prix: {price} €</Text>
                <Text>{description}</Text>
            </Flex>
        </Flex>
    );
};
