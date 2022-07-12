import React from 'react';

const Event = () => {
    document.title = 'event bubble'

    return (
        <main onClick={() => alert('main')} className='main' >
            Main
            <section onClick={() => alert('section')} title='section'>
                <article onClick={(event) => {
                    event.stopPropagation()
                    alert("article")
                }} title='article'>article</article>
                <aside title='aside'>aside</aside>
            </section>
        </main>
    );
};

export default Event;