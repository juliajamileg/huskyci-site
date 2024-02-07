import React from "react";
import Language from './Language';
import styles from './styles.module.css';

const languages = [
    {
        image: 'img/languages/go.png',
        infoLink: 'https://golang.org/',
        pinned: true,
    },
    {
        image: 'img/languages/python.png',
        infoLink: 'https://www.python.org/',
        pinned: true,
    },
    {
        image: 'img/languages/ruby.png',
        infoLink: 'https://www.ruby-lang.org/',
        pinned: true,
    },
    {
        image: 'img/languages/javascript.png',
        infoLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        pinned: true,
    },
    {
        image: 'img/languages/java.png',
        infoLink: 'https://www.java.com/pt_BR/about/whatis_java.jsp',
        pinned: true,
    },
    {
        image: 'img/languages/terraform.svg',
        infoLink: 'https://www.terraform.io/',
        pinned: true,
    },
    {
        image: 'img/languages/lua.png',
        infoLink: 'https://www.terraform.io/',
        pinned: true,
    },
    {
        image: 'img/languages/csharp.png',
        infoLink: 'https://www.terraform.io/',
        pinned: true,
    },
];

export default function Languages(){
    return (
        <>
        {languages && languages.length && (
            <section className={styles.showcases}>
                <h2>Supported Languages</h2>
                <div className={styles.showcase}>
                    {languages.map((props, idx) => (
                        <Language key={idx} {...props} />
                    ))}
                </div>
            </section>
        )}
        </>
    )
}