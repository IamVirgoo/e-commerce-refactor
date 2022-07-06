import type { Component } from 'solid-js';
import { Link, useIsRouting } from "solid-app-router";

import styles from './styles/docs.module.css'

const Docs: Component = () => {
    return (
        <>
            <section class={styles.hero}>
                <div class={styles.container}>
                    <h1 class={styles.heading}>Documentation</h1>
                    <p class={styles.desc}>On this page you can get full information about how our system works and on the basis of which data you get your predict.</p>
                    <a class={styles.btn} href="/service" target='blank'>Try</a>
                </div>
            </section>
            <section class={styles.struct}>
                <div class={styles.container}>
                    <h1 class={styles.structTitle}>Structure of the Application</h1>
                    <p class={styles.desc}>Our program is a web application based on a fairly clear structure. First of all, the user uploads a link to a templated database, after which our script parses the values from there into the main script, thereby getting to the server part. Then the processed value is sent via the api to the client side and output to the user.</p>
                </div>
            </section>
            <section class={styles.stack}>
                <div class={styles.container}>
                    <h1 class={styles.stackTitle}>Technology Stack</h1>
                    <div class={styles.cards}>
                        <div class={styles.card}>
                            <div class={styles.imageWrapper}>
                                <img src="src/logo.svg" alt="#"/>
                            </div>
                            <p class={styles.name}>Solid JS</p>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.imageWrapper}>
                                <img src="src/assets/ts.svg" alt="#"/>
                            </div>
                            <p class={styles.name}>Type Script</p>
                        </div>
                        <div class={styles.card}>
                            <div class={styles.imageWrapper}>
                                <img src="src/assets/java.svg" alt="#"/>
                            </div>
                            <p class={styles.name}>Java</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Docs