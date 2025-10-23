"use client";

import InfoCard from "@/components/InfoCard";
import {
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <>
      <Paper withBorder p="lg" radius="xl" shadow="sm">
        <Stack gap="lg">
          {/* Heading */}
          <Group>
            <ThemeIcon size="xl" radius="xl" variant="default">
              🥣
            </ThemeIcon>
            <Stack gap={0}>
              <Title order={2}>Feeding schedule</Title>
              <Text c="dimmed" size="lg">
                Triscuit eats three meals a day. Two meals from the automatic
                feeder and one meal from a can.
              </Text>
            </Stack>
          </Group>

          {/* Cards */}
          <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg">
            <InfoCard
              title="Morning"
              description="Triscuit is fed 2 portions of dry food from the automatic feeder at 7:00 AM."
              badge="Auto"
              imageUrl="/images/t-sleep.jpeg"
            />
            <InfoCard
              title="Afternoon"
              description="Triscuit is fed manually at 12:00 PM, with 1 can of wet food. Food cans are in the kitchen, on the counter or above the fridge."
              badge="Manual"
              badgeVariant="filled"
              badgeColor="pink"
              imageUrl="/images/og-cover.png"
            />
            <InfoCard
              title="Evening"
              description="Triscuit is fed 2 portions of dry food from the automatic feeder at 6:00 PM."
              badge="Auto"
              imageUrl="/images/t-box.jpeg"
            />
          </SimpleGrid>
        </Stack>
      </Paper>
    </>
  );
}
