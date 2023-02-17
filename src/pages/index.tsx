//import Carrossel from 'components/Index/Carrossel';
//import Conteudo2 from 'components/Index/Conteudo2';
//import Conteudo1 from 'components/Index/Conteudo1';
import { lazy, useEffect, useState } from 'react';
import Conteudo4 from 'components/Index/Conteudo4';
import Head from 'next/head';
import IconsIndex from 'components/Index/Icons';
import UltimasPostagens from 'components/Index/UltimosPosts/UltimasPostagens';
import Post from '@/interfaces/Post';
import http from '@/http';
import calculateReadingTime from '@/Hooks/tempoLeitura';
import Props from '@/interfaces/Props';


const Conteudo1 = lazy(() => import('components/Index/Conteudo1'));
const Conteudo2 = lazy(() => import('components/Index/Conteudo2'));
const Conteudo3 = lazy(() => import('components/Index/Conteudo3'));
const Carrossel = lazy(() => import('components/Index/Carrossel'));


export const getStaticProps = async () => {
  try {

    const res = await http.get('/posts/');
    const posts: Post[] = res.data;

    const firstThreePosts = posts.slice(0, 3);

    return {
      props: {
        posts: firstThreePosts.map((post) => ({
          id: post.id,
          title: post.title,
          date: post.date,
          featured_image_versions: post.featured_image_versions,
          tempo: calculateReadingTime(post.content.rendered),

        })),
      },
      revalidate: 600,
    };
  } catch (error) {
    console.error('Erro na requisição dos Posts', error);
  }
};

function Home(props: Props) {
  const [renderCarrossel, setRenderCarrossel] = useState(false);

  useEffect((() => {
    if (window.innerWidth > 767) {
      setRenderCarrossel(true);
    }
  }), []);

  return (
    <>
      <Head>
        <title> Início | Figueiró Advocacia</title>
        <meta name="description" content="Soluções jurídicas personalizadas e acessíveis para ajudar a resolver seus problemas. Entre em contato conosco agora para obter uma avaliação gratuita." />
        <meta name="keywords" content="advogados online, serviços jurídicos, direito, soluções jurídicas, avaliação gratuita" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://www.figueiroadvocacia.com.br" />
      </Head>

      {renderCarrossel && <Carrossel />}
      <Conteudo1 />
      <Conteudo2 />
      <Conteudo3 />
      <Conteudo4 />
      <IconsIndex />
      <UltimasPostagens posts={props.posts} />
    </>
  );
}


export default Home;