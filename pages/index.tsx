import { Container, Grid } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { XCarousel } from '../components/Carousel/XCarousel'
import styles from '../styles/Home.module.css'

const { Col } = Grid;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <Col span={12}>
          <XCarousel slidesToScroll={1} />
        </Col>
      </Grid>
    </div>
  )
}

export default Home
