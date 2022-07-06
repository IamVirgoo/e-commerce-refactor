import { Component, For } from 'solid-js';
import { Link, useIsRouting } from "solid-app-router";

import styles from './styles/card.module.css'

const Cards: Component = () => {
    
    return (
        <div class={styles.cards}>
            <For each={info} fallback={<div></div>}>
                {(item, index) => 
                    <div class={styles.card}>
                        <div class={styles.cardInfo}>
                            <a class={styles.cardTitle} href={item.git} target='blank'>{item.name}</a>
                            <p class={styles.cardDesc}>{item.work}</p>
                        </div>
                        <div class={styles.imageWrapper}>
                            <img src="src/assets/logo.svg" alt="#"/>
                        </div>
                    </div>
                }
            </For>
        </div>
    )
}


let info = [
    {
        "name" : "Karen Khachatryan",
        "work" : "Front-End Developer",
        "git" : "https://github.com/IamVirgoo"
    },
    {
        "name" : "Mark Sorokin",
        "work" : "Full-Stack Developer",
        "git" : "https://github.com/MaskedTrench"
    },
    {
        "name" : "Alexey Ryumkin",
        "work" : "Back-End Developer",
        "git" : "https://github.com/YHT97"
    },
    {
        "name" : "Vadim Breev",
        "work" : "Back-End Developer",
        "git" : "https://github.com/Vadim2422"
    }
]

export default Cards