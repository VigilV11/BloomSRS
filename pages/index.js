import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [totalLels, setTotalLels] = useState(0);
  const [learntLels, setLearntLels] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((body) => {
        // console.log(
        //   `Total learning elements: ${body.totalLels} \nLearnt learning elements: ${body.learntLels}`
        // )
        setTotalLels(body.totalLels);
        setLearntLels(body.learntLels);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>
        Learnt: {learntLels} ({((learntLels / totalLels) * 100).toFixed(2)}%)
      </h1>
      <h3>Total learning elements: {totalLels}</h3>
    </div>
  );
}
