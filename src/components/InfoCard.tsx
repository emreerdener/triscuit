"use client";

import {
  AspectRatio,
  Image,
  Card,
  Stack,
  Title,
  Text,
  Group,
  Badge,
} from "@mantine/core";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  badgeColor?: string;
  badgeVariant?: "filled" | "light" | "outline" | "default";
}

export default function InfoCard({
  title,
  description,
  imageUrl,
  imageAlt,
  badge,
  badgeColor,
  badgeVariant = "default",
}: InfoCardProps) {
  return (
    <Card shadow="none" radius="lg" withBorder p={0}>
      <Stack gap={0}>
        {imageUrl && (
          <AspectRatio ratio={4 / 2} mx="auto">
            <Image src={imageUrl} alt={imageAlt} w="100%" />
          </AspectRatio>
        )}
        <Stack p="md" gap="xs">
          <Group justify="space-between">
            <Title order={3}>{title}</Title>
            {badge && (
              <Badge variant={badgeVariant} color={badgeColor} size="lg">
                {badge}
              </Badge>
            )}
          </Group>
          <Text c="dimmed">{description}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}
