import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text, Button } from "@mantine/core";
import { ImmoCard } from "../components/Cards/ImmoCard.tsx";

interface Immo {
    _id: string;
    Name: string;
    Price: number;
    Description: string;
    Image: string;
}

const Product: React.FC = () => {
    const { id } = useParams();
    const [property, setProperty] = useState<Immo>();
    const navigate = useNavigate();

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
        <>
            <div>
                <Button
                    onClick={() => navigate(-1)}
                    variant="light"
                    color="blue"
                    radius="md"
                    mb="md"
                >
                    Retour
                </Button>
            </div>
            <ImmoCard
                id={property._id}
                name={property.Name}
                price={property.Price}
                description={property.Description}
                image={property.Image}
            />
        </>
    );
}

export default Product