import { Card, Text, Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";

interface DisplayCardProps {
    id: string,
    name: string,
    price: number,
}

export function DisplayCard({ id, name, price }: DisplayCardProps) {
    return (
        <Card key={id} shadow="sm" padding="lg" mb="md" style={{ borderBottom: '1px solid #e0e0e0' }} >
            <Flex justify="space-between" align="center">
                <Text style={{ width: '30%' }}>{name}</Text>
                <Text style={{ width: '20%', textAlign: 'center' }}>{price} €</Text>

                <Button variant="light" color="blue" radius="md" onClick={() => console.log('Button clicked!')}>
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        Voir les détails
                    </Link>
                </Button>
            </Flex>
        </Card>
    );
}