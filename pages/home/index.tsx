import { Grid } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import { HeroBullets } from "../../components/HeroBullets/HeroBullets";
import styles from "../../styles/Home.module.css";
import { carouselData } from "../../constants/carouselData";

const { Col } = Grid;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid gutter={20}>
        <Col span={12}>
          <MainCarousel slidesToScroll={1} carouselData={carouselData} />
        </Col>
        <Col span={12}>
          <HeroBullets></HeroBullets>
        </Col>
      </Grid>
    </div>
  );
};

export default Home;
