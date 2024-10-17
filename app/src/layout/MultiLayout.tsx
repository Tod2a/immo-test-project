import { AppShell, Container, MantineProvider } from "@mantine/core";
import { Topbar } from "../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

export function MultiLayout() {
    return (
        <MantineProvider>
            <Container>
                <AppShell header={{ height: 75 }} padding="md">
                    <AppShell.Header>
                        <Topbar />
                    </AppShell.Header>

                    <AppShell.Main>
                        <Outlet />
                    </AppShell.Main>
                </AppShell>
            </Container>
        </MantineProvider>
    );
}