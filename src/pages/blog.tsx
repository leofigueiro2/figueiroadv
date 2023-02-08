import calculateReadingTime from '@/Hooks/tempoLeitura';
import http from '@/http';
import Post from '@/interfaces/Post';
import Props from '@/interfaces/Props';
import CardsPrincipais from 'components/Blog/CardsPrincipais';
import Content1 from 'components/Blog/Content1';
import Header from 'components/Blog/Header';
import Layout from 'components/Commons/layout';
import Head from 'next/head';

import { ReactElement } from 'react';


export const getStaticProps = async () => {
  try {
    
    const res = await http.get('/posts/');
    const posts:Post[] = res.data;
    
    return {
      props: {
        posts: posts.map((post) => ({
          id: post.id,
          title: post.title,
          date: post.date,
          excerpt: post.excerpt,
          featured_image_versions: post.featured_image_versions,
          tempo: calculateReadingTime(post.content.rendered),

        })),
      }
    };
  } catch (error) {
    console.error('Erro na requisição dos Posts', error);
  }
};

function Blog(props:Props) {
  return (
    <>
      <Head>
        <title> Contato | Figueiró Advocacia</title>
      </Head>
      <Header/>
      <section className='container'>
        <Content1 posts={props.posts}/>
        <CardsPrincipais posts={props.posts}/>
      </section>
    </>
  );
}


Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Blog;