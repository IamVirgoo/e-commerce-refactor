import { Component, For } from 'solid-js';
import {Show} from 'solid-js';

import styles from './styles/service.module.css'

let file: string;
let updated = true;
let selected = "";
let prices: any;
function update() {
    var request = new Request('https://dollar-api-application.herokuapp.com/api/v1/' +  file);
        fetch(request)
            .then((resp) => resp.json())
            .then((data) => {
                prices = data;
            })
            .then(() => {
                console.log("Getted!");
                console.log(prices['ctn'])
                updated = true
            });  
}

const Service: Component = () => {
    return (
        <>
            <section class={styles.hero}>
                <div class={styles.container}>
                    <h1 class={styles.heading}>How it works?</h1>
                    <p class={styles.description}>The program is a web application, the main script of which is written in Python. The script works according to the following principle: The database is loaded, the script receives values from the database and processes them according to the written mathematical model</p>
                    <a class={styles.btn} href="/service#option" target='blank'>Try</a>
                </div>
            </section>
            <section id = "option" class={styles.option}> 
                <div class={styles.container}>
                    <h1 class={styles.title}>Enter the link</h1>
                    <p class={styles.description}>Description that we need to wait</p>
                    <div class={styles.btnWrapper}>
                        <input type="input" placeholder='https://www.google.ru/sheets'/>
                        <button type="submit" onclick={update}>Подтвердить</button>
                    </div>
                </div>
            </section>
            <section class={styles.result}>
                <div class={styles.container}>
                    <h1 class={styles.title}>Choose the name of product</h1>
                    <p class={styles.description}>Description that we need to wait</p>
                    <div class={styles.content}>
                        <Show when={updated} fallback={<div></div>}>
                            <select id="">
                                <For each={product} fallback={<div></div>}>
                                    {(item) => 
                                        <option id={item.name}>{item.name}</option>
                                    }
                                </For>
                            </select>
                        </Show>
                    </div>
                </div>
            </section>
            <section class={styles.final}>
                <div class={styles.container}>
                    <h1 class={styles.title}>Result</h1>
                    <div class={styles.content}>
                        <p class={styles.resDescription}>In the first half of the year, based on the downloaded database, the product you selected will cost:  <strong>{result['first-half']}💲</strong></p>
                        <p class={styles.resDescription}>In the second half of the year, based on the downloaded database, the product you selected will cost:  <strong>{result['first-half']}💲</strong></p>
                        <p class={styles.resDescription}>In the coming year, based on the downloaded database, the product you selected will cost:  <strong>{result['all']}💲</strong></p>
                    </div>
                </div>
            </section>
        </>
    )
}

let product = [
    {
        "name" : "Select please",
        "price" : ""
    },
    {
        "name" : "name1", 
        "price" : "10000"
    },
    {
        "name" : "name2", 
        "price" : "10000"
    },
    {
        "name" : "name3", 
        "price" : "10000"
    },
    {
        "name" : "name4", 
        "price" : "10000"
    }
]

let result = 
    {
        "first-half" : "100000",
        "second-half" : "150000",
        "all" : "200000"

    }

export default Service