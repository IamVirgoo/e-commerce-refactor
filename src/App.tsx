import type { Component } from 'solid-js';

import styles from './App.module.css';
import Cards from './components/cards'

const App: Component = () => {
  return (
    <>
      <section class={styles.hero}>
        <div class={styles.container}>
          <h1 class={styles.heading}>E-Commerce Tool</h1>
          <div class={styles.description}>Especially for business</div>
          <a class={styles.btn} href="/service" target='blank'>Try</a>
        </div>
      </section>
      <section class={styles.about}>
        <div class={styles.container}>
          <h1 class={styles.title}>About Us</h1>
          <div class={styles.content}>
            <div class={styles.wrapper}>
              <img src="/src/assets/logo.svg" alt="#"/>
            </div>
            <div class={styles.info}>
              <p class={styles.infotext}>We, Cpp Segmentation Error, are a young team from Lipetsk engaged in WEB development.</p>
            </div>
          </div>
        </div>
      </section>
      <section class={styles.team}>
        <div class={styles.container}>
          <h1 class={styles.title}>Team</h1>          
            <Cards/>
        </div>
      </section>
    </>
  );
};

export default App;

