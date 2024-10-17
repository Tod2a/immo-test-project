import { useEffect, useState } from "react";
import { Card, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

interface Immo {
    _id: string;
    Name: string;
    Price: number;
    Description: string;
    Image: string;
}

export function Products() {
    const [properties, setProperties] = useState<Immo[]>([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const response = await fetch("http://localhost:5050/api/immo");
            const data = await response.json();
            setProperties(data);
        };
        fetchProperties();
    }, []);

    return (
        <>
            {properties.length === 0 ? (
                <Text>Aucun bien à afficher</Text>
            ) : (
                properties.map((property) => (
                    <Card key={property._id} shadow="sm" padding="lg">
                        <Group>
                            <Text>{property.Name}</Text>
                            <Text>{property.Price} €</Text>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            <Link to={`/product/${property._id}`}>Voir les détails</Link>
                        </Button>
                    </Card>
                ))
            )}
        </>
    );
}
