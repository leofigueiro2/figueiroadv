import Props from '@/interfaces/Props';
import Layout from 'components/Commons/layout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import Post from '@/interfaces/Post';
import http from '@/http';
import Loading from 'components/Commons/Loading';
import styled from '@/styles/Blog/Postagem.module.scss';
import HeaderPost from 'components/Blog/Postagem/HeaderPost';

export const getStaticPaths = async () => {
  const res = await http.get<Post[]>('/posts/');
  const posts = res.data;
  const paths = posts.map(post => ({params: {id: post.id.toString()}}));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context:any) => {
  try {
    
    const res = await http.get(`/posts/${context.params.id}`);
    const posts:Post[] = res.data;
    
    return {
      props: {
        posts,
      }
    };
  } catch (error) {
    console.error('Erro na requisição dos Posts', error);
  }
};

interface PropsPost { 
    posts: Post,
}

function Postagem({posts}: PropsPost) {
  
  if(!posts) {
    return <Loading/>;
  }

  const conteudo = posts.content.rendered;


  return (
    <>
      <HeaderPost posts={posts}/>
      <div dangerouslySetInnerHTML={{ __html: conteudo }} className={`${styled.postagem} container section__texto`}>

      </div>
    </>
  );
}


Postagem.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Postagem;