import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { NextComponentType, NextPageContext } from "next";
import React, { FC, ReactNode, useState } from "react";
import { MainFooter } from "../components/MainFooter/MainFooter";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { xHeaderLinks } from "../constants/xHeaderLinks";

export const MainWrapper: FC<
  {
    Component: NextComponentType<NextPageContext, any, any>;
  } & { initialColorScheme: ColorScheme }
> = ({ Component, initialColorScheme }) => {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(initialColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS >
        <AppShell
          padding="md"
          header={<MenuBar links={xHeaderLinks}></MenuBar>}
          footer={
            <MainFooter
              data={[{ title: "Main Footer", links: xHeaderLinks }]}
            ></MainFooter>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Container size={"xl"}>
            <Component />
          </Container>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
