'use client';
import { AppShell, Burger, Box, Text, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';

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
          <Text size="lg" fw = "bold">
                Bagaicha Restro & Bar
          </Text>
          {/* <MantineLogo size={30}
           /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {/* Navbar */}
        navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Box m="md">{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
}
