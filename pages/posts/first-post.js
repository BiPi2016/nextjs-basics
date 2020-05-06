import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';

const FirstPost = () => (
    <Layout>
        <Head>
            <title>First post page</title>
        </Head>
        <h1>This is the first post</h1>
        <p>
            <Link href="/">
                <a>Back to home!</a>
            </Link>
        </p>
    </Layout>
)

export default FirstPost;