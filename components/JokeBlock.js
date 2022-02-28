import { useEffect, useState } from "react";
import styles from './JokeBlock.module.css';

export default function JokeBlock() {
    const [joke, setJoke] = useState("")

    useEffect(() => {
        fetch('/api/joke')
        .then(res => res.json())
        .then(jokeJSON=> {
            setJoke(jokeJSON)
        })
    }, []);

    return (
        <blockquote className={styles.quote}>{joke}</blockquote>
    )
}