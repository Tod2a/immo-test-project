import { Anchor, Button, Group } from "@mantine/core";

export function Topbar() {

    return (
        <Group justify="space-between" align="center" style={{ margin: "0px 10px", height: "100%" }}>
            <Group
                mih={50}
                gap="xs"
                justify="flex-end"
                align="center"
                wrap="wrap"
            >
                <Anchor href="https://mantine.dev/" target="_blank">
                    Products
                </Anchor>
                <Button variant="filled" color="gray" size="xs" radius="md">Sign In</Button>
                <Button variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="md">Sign Out</Button>
            </Group>
        </Group>
    );
}