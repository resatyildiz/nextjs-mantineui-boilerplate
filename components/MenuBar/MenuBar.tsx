import { useState } from "react";
import {
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Text,
  Switch,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useHeaderStyles } from "./MenuBarStyle";
import Link from "next/link";
import { socialMediaLinks } from "../../constants/socialMediaLinks";
import { IconMoonStars, IconSun } from "@tabler/icons";

export type MenuBarLinkType = { link: string; label: string };

interface MernuBarProps {
  links: MenuBarLinkType[];
}

export function MenuBar({ links }: MernuBarProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useHeaderStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Text size={"lg"}>Site Name or Logo</Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {socialMediaLinks.map((item, index) => (
            <ActionIcon key={index}>
              <Link href={item.link} passHref>
                <a style={{ color: "inherit" }} target="_blank">
                  {" "}
                  {item.icon}
                </a>
              </Link>
            </ActionIcon>
          ))}
          {/* <ActionIcon key={"themeChange"}>
            {colorScheme === "dark" ? (
              <IconSun size={18} onClick={() => toggleColorScheme()} />
            ) : (
              <IconMoonStars size={18} onClick={() => toggleColorScheme()} />
            )}
          </ActionIcon> */}
        </Group>
      </Container>
    </Header>
  );
}
