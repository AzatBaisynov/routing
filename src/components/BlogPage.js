import React from 'react'
import {SinglePost} from "./SinglePost";

export const BlogPage = () => {
    const posts = [
        {
            imgSrc: 'https://i.ibb.co/YjDsQPx/react-thumb.jpg',
            imgAlt: 'React',
            titleText: 'React',
            description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
            progressAmount: '59',
            theme: 'info',
            category: 'FRONT-END',
            statusText: 'Cyan',
        },
        {
            imgSrc: 'https://i.ibb.co/CQbH9Pq/angular-thumb.jpg',
            imgAlt: 'Angular',
            titleText: 'Framework Angular',
            description: 'Angular — открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний.',
            theme: 'danger',
            progressAmount: '34',
            category: 'FRONT-END',
            statusText: 'Blue',
        },
        {
            imgSrc: 'https://i.ibb.co/mXKxyh9/js-vanilla-thumb.jpg',
            imgAlt: 'Vanilla JavaScript',
            titleText: 'Vanilla JavaScript',
            description: 'Полезно знать, что можно сделать с помощью чистого HTML, TypeScript/JavaScript и CSS, даже если вы используете фреймворк, который избавляет вас от всего этого.',
            theme: 'warning',
            progressAmount: '91',
            category: 'language',
            statusText: 'Yellow',
        },
        {
            imgSrc: 'https://i.ibb.co/rMmx4Y2/nodejs-thumb.jpg',
            imgAlt: 'NodeJS',
            titleText: 'Node.JS',
            description: 'Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.',
            theme: 'success',
            progressAmount: '56',
            category: 'BACK-END',
            statusText: 'Green',
        },
        {
            imgSrc: 'https://i.ibb.co/Srp94x4/postgresql-thumb.jpg',
            imgAlt: 'Postgresql database',
            titleText: 'Postgresql',
            theme: 'success',
            description: 'PostgreSQL — свободная объектно-реляционная система управления базами данных.',
            progressAmount: '45',
            category: 'DATABASE',
            statusText: 'Blue',
        },
        {
            imgSrc: 'https://i.ibb.co/KDnNjSm/mongodb-thumb.jpg',
            imgAlt: 'MongoDB database',
            titleText: 'MongoDB',
            description: 'MongoDB — документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.',
            theme: 'success',
            progressAmount: '39',
            category: 'DATABASE',
            statusText: 'Green',
        },
        {
            imgSrc: 'https://i.ibb.co/WpnzXFs/git-thumb.jpg',
            imgAlt: 'Git',
            titleText: 'Git',
            description: 'Git — распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, первая версия выпущена 7 апреля 2005 года.',
            theme: 'warning',
            progressAmount: '77',
            category: 'DEV TOOLS',
            statusText: 'Yellow',
        },
        {
            imgSrc: 'https://i.ibb.co/gM86QXG/docker-thumb.jpg',
            imgAlt: 'Docker container',
            titleText: 'Docker container',
            description: 'Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации, контейнеризатор приложений.',
            theme: 'info',
            progressAmount: '84',
            category: 'DEVOPS',
            statusText: 'Cyan',
        },
    ]
    return (
        <section className="blog">
            <div className="blog__container container">
                {
                    posts.map(post => (
                        <SinglePost data={post}/>
                    ))
                }
            </div>
        </section>
    )
}