import { Box, Button, Textarea, TextInput, Title } from "@mantine/core";

interface ImmoFormProp {
    buildId: string;
}

export function ImmoForm({ buildId }: ImmoFormProp) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:5050/immoform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObject),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Box mt="xl">
            <Title order={3}>Get in touch</Title>
            <Box
                component="form"
                bd="1px solid gray.5"
                px="20px"
                pb="20px"
                style={{ borderRadius: "10px" }}
                mt="25"
                onSubmit={handleSubmit}
            >
                <TextInput
                    name="name"
                    label="Name"
                    placeholder="Value"
                    required
                    mt="md"
                />
                <TextInput
                    name="surname"
                    label="Surname"
                    placeholder="Value"
                    required
                    mt="md"
                />
                <TextInput
                    name="email"
                    label="Email"
                    placeholder="Value"
                    required
                    mt="md"
                />
                <Textarea
                    name="message"
                    label="Message"
                    placeholder="Value"
                    required
                    mt="md"
                />

                <input type="hidden" name="buildId" value={buildId} />

                <Button type="submit" fullWidth mt="md" color="gray">
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
