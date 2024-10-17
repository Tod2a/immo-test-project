import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text } from "@mantine/core";
import { ImmoCard } from "../components/ImmoCard/Immocard.tsx"; // Assurez-vous d'importer correctement votre composant

interface Immo {
    _id: string;
    Name: string;
    Price: number;
    Description: string;
    Image: string;
}

export function Product() {
    const { id } = useParams();
    const [property, setProperty] = useState<Immo>();

    useEffect(() => {
        const fetchProperty = async () => {
            const response = await fetch(`http://localhost:5050/api/immo/${id}`);
            const data = await response.json();
            setProperty(data);
        };
        fetchProperty();
    }, [id]);

    if (!property) {
        return <Text>Chargement des détails...</Text>;
    }

    return (
        <ImmoCard
            id={property._id}
            name={property.Name}
            price={property.Price}
            description={property.Description}
            image={property.Image}
        />
    );
}
