import { useState } from 'react';
import { Header, Group, ActionIcon, Container, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { useHeaderStyles } from './XHeaderStyle';
import Link from 'next/link';
import { socialMediaLinks } from '../../constants/socialMediaLinks';

export type XHeaderLink = { link: string; label: string };

interface XHeaderProps {
    links: XHeaderLink[];
}

export function XHeader({ links }: XHeaderProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useHeaderStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
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
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                <Text size={'lg'}>Site Name or Logo</Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    {
                        socialMediaLinks.map((item, index) => (
                            <ActionIcon key={index}>
                                <Link href={item.link} passHref>
                                    <a style={{ color: "inherit" }} target="_blank"> {item.icon}</a>
                                </Link>
                            </ActionIcon>
                        ))
                    }
                </Group>
            </Container>
        </Header>
    );
}