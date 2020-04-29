import React from 'react';
import Link from 'next/link';

const FirstPost = () => (
    <>
        <h1>This is the first post</h1>
        <p>
            <Link href="/">
                <a>Back to home!</a>
            </Link>
        </p>
    </>
)

export default FirstPost;