import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import { XHeader } from '../components/Header/XHeader';
import { xHeaderLinks } from '../constants/xHeaderLinks';
import { XFooter } from '../components/Footer/XFooter';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Open Sans, sans serif',
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        }}
      >
        <AppShell
          padding="md"
          header={<XHeader links={xHeaderLinks}></XHeader>}
          footer={<XFooter data={[{ "title": "test", "links": xHeaderLinks }]}></XFooter>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Container size={'xl'}>
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </MantineProvider>
    </>
  );
}