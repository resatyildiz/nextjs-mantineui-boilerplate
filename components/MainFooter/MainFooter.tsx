import { Text, Container, ActionIcon, Group } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import Link from "next/link";
import { MenuBarLinkType } from "../MenuBar/MenuBar";
import { useFooterStyles } from "./MainFooter.style";

interface FooterLinksProps {
  data: {
    title: string;
    links: MenuBarLinkType[];
  }[];
}

export function MainFooter({ data }: FooterLinksProps) {
  const { classes } = useFooterStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text>Site Text or Logo</Text>m
          <Text size="xs" color="dimmed" className={classes.description}>
            This website created for some basic website fast development by{" "}
            <Link href={"https://resatyildiz.com"} target="_blank">
              Resat Yildiz
            </Link>
            . This template is open-source, if you want to use or edit in this
            web site template, you can look{" "}
            <Link
              href={
                "https://github.com/resatyildiz/nextjs-mantineui-boilerplate"
              }
              target="_blank"
            >
              this repository
            </Link>
            .
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
