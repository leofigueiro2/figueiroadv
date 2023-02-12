import Layout from 'components/Commons/layout';
import { ReactElement } from 'react';
import Post from '@/interfaces/Post';
import http from '@/http';
import Loading from 'components/Commons/Loading';
import styled from '@/styles/Blog/Postagem.module.scss';
import HeaderPost from 'components/Blog/Postagem/HeaderPost';
import Head from 'next/head';
import Image from 'next/image';
import Formulario from 'components/Blog/Postagem/Formulario/Formulario';
import Message from '../../../public/icons/Blog/message.svg';
import Clock from '../../../public/icons/Blog/clock.svg';
import calculateReadingTime from '@/Hooks/tempoLeitura';
import ListaDePosts from 'components/Blog/Postagem/ListaDePosts/ListaDePosts';

export const getStaticPaths = async () => {
  const res = await http.get<Post[]>('/posts/');
  const posts = res.data;
  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: 'blocking'
  };
};

interface Context {
  params: {
    id: string
  }
}

export const getStaticProps = async (context: Context) => {
  try {
    const id = context.params.id;
    const res = await http.get<Post>(`/posts/${id}`);
    const post = res.data;

    const res2 = await http.get('/posts/');
    const posts:Post[] = res2.data;
    
    return {
      props: {
        post,
        posts: posts.map((post) => ({
          id: post.id,
          title: post.title
        }))
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Erro na requisição dos Posts', error);
  }
};

interface PropsPost {
  post: Post,
  posts: Post[]
}

function Postagem({ post, posts }: PropsPost) {
  if (!posts) {
    return <Loading />;
  }

  const conteudo = post.content.rendered;

  const tempo = calculateReadingTime(post.content.rendered);
  return (
    <section className={styled.sectionPost}>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="title" content={post.title.rendered}/>
        <meta name="description" content={post.excerpt.rendered}/>
      </Head>
      <HeaderPost posts={post} />
      <div className='container'>
        <div className='row py-5'>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className='d-flex flex-column gap-5'>
              <ListaDePosts posts={posts}/>
              <Formulario/>

            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className='d-flex justify-content-between align-items-center py-3 mb-2'>
              <p className={styled.autor}>     
                Por Figueiró Advocacia
              </p> 
              <div className={`${styled.detalhes} d-flex align-items-center gap-1`}>
                <Message/>
                <p>
                  0 comentários
                </p>
              </div>
              <div className={`${styled.detalhes} d-flex align-items-center gap-1`}>
                <Clock/>
                <p>
                  {tempo} minutos de leitura
                </p>
              </div>

            </div>
            <hr />
            <div id='conteudo' className='mt-5 d-flex flex-column gap-4'>
              <Image src={post.featured_image_versions.versions.large} alt={post.featured_image_versions.alt} width={1000} height={299}/>
              <div dangerouslySetInnerHTML={{ __html: conteudo }} className={`${styled.postagem} container section__texto `}>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
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