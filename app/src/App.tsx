import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Topbar } from './components/Topbar/Topbar.tsx'
import { ImmoCard } from './components/ImmoCard/Immocard.tsx';

export default function App() {
  return (
    <MantineProvider>
      <Topbar />
      <ImmoCard />
    </MantineProvider>
  );
}