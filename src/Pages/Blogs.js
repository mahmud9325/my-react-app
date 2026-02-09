import React, { useState } from 'react'
import { blogsData } from './blogsData';
import { Link } from 'react-router-dom';

function Blogs() {

    const [blogs, setBlogs] = useState(blogsData);

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {blogs.map((blog) => {
                    const { id, title, desc } = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{truncateString(desc, 100)}</p>
                        <Link to={title}>LearnMore</Link>
                    </article>
                })}
            </section>

        </div>
    )
}

export default Blogs