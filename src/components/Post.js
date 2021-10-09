import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import sanityClient from '../client'

const Post = () => {
    const [postData, setPost] = useState(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setPost(data)).catch(console.error())
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1>Blog Post Page</h1>
                <h2>Welcome to my page of blog post</h2>
                <div>
                    <article>
                        <Link>
                            <span>
                                <img src="" alt="" />
                                <span>
                                    <h3></h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Post
