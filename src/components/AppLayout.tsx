"use client";

import React from "react";
import { AppShell, Burger, Group, Image, Title } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const { width } = useViewportSize();
  const isMobile = width < 768;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs" wrap="nowrap">
            {isMobile && <Burger opened={opened} onClick={toggle} size="sm" />}
            <Image src="/favicons/favicon.svg" alt="Triscuit Logo" w={24} />
            <Title order={3}>Triscuit</Title>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
