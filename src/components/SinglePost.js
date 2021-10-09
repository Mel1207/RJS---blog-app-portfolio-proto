import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'

const SinglePost = () => {
    const [ singlePost, setSinglePost ] = useState(null);
    const { slug } = useParams();


    return (
        <h1>This is single post</h1>
    )
}

export default SinglePost
