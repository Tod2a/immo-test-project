import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { DisplayCard } from "../components/Cards/DisplayCard";

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
                    <DisplayCard
                        key={property._id}
                        id={property._id}
                        name={property.Name}
                        price={property.Price}
                    />
                ))
            )}
        </>
    );
}
