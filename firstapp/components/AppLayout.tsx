'use client';
import { AppShell, Burger, Box, Text, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "./Navbar/Navbar";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}
export function AppLayout({ children }: Props) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          /> 
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              <Image
                src="/bagaichaLogo.png"
                width={100}
                height={70}
                className="hidden md:block"
                alt="Bagaicha Logo"
              /> 
              {/* <Image
                src="/bagaichaLogo.png"
                width={40}
                height={30}
                className="hidden md:hidden"
                alt="Bagaicha Logo"
              />  */}
          </div>        
          
          <Text size="lg" fw = "bold">
                Bagaicha Restro And Bar
          </Text>

        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar/>
      </AppShell.Navbar>
      <AppShell.Main>
        <Box m="md">{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
}
