import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogsData } from './blogsData';

function Blog() {

    const { title } = useParams();
    const [desc, setDesc] = useState("");

    useEffect(() => {
        const blogData = blogsData.filter((data) => data.title === title)
        setDesc(blogData[0].desc);

    }, []);

    return (
        <div>
            <h1>{title} Page</h1>
            <h5>{desc.slice(0, 500)}</h5>
        </div>
    )
}

export default Blog