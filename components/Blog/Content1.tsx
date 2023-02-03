import styled from '../../src/styles/Blog/Content1.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import formatDate from '@/Hooks/convertTime';
import calculateReadingTime from '@/Hooks/tempoLeitura';
import Image from 'next/image';
import Loading from 'components/Commons/Loading';
import { Loads } from '@/Hooks/ApiLoad';
import Media from '@/interfaces/Media';
import Post from '@/interfaces/Post';
import Autor from '@/interfaces/Autor';


export default function Content1() {
  const [post, setPost] = useState<Post[]>();
  const [postFiltered, setPostFiltered] = useState<Post>();
  const [autor, setAuthor] = useState<Autor>();
  const [media, setMedia] = useState<Media>();

  console.log('Saída do State Post', post);
  console.log('Saída do State PostFilteres', postFiltered);
  console.log('Saída do State Autor', autor);
  console.log('Saída do State media', media);

  useEffect(() => {
    Loads.loadPost(setPost, 5, setPostFiltered);
    Loads.loadAuthor(postFiltered, setAuthor);
    Loads.loadMedia(postFiltered, setMedia);
  }, []);

  if (!postFiltered || !media) {
    return <Loading />;
  }

  const {
    title,
    excerpt,
    content,
    date,
    slug
  } = postFiltered;

  const {
    rendered: resumo
  } = excerpt;

  const Autor = autor?.name;
  const data = formatDate(date);
  const tempo = calculateReadingTime(content.rendered);
  const src = media?.guid.rendered;

  return (
    <section className={`${styled.section} row align-items-center`}>
      <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 p-0'>
        <Link href={`blog/${slug}`}>
          <figure>
            <Image className={styled.img} src={src} alt='Sócrates' width={1000} height={1000} />
          </figure>
        </Link>
      </div>
      <div className='col-lg-4 col-md4 col-sm-12 col-xs-12 '>
        <div className={`${styled.noticiaPrincipal__conteudo} p-3 d-flex flex-column gap-3`}>
          <Link href={`blog/${slug}`}><h3 className='section__title'>{title.rendered}</h3></Link>
          <div className='d-flex flex-column gap-3' >
            <div className={styled.blog__texto} dangerouslySetInnerHTML={{ __html: resumo }}></div>
            <span className={styled.blog__autor}>{Autor}</span>
            <span className={styled.blog__texto}> {data} - {tempo} min de leitura</span>
          </div>
        </div>
      </div>
    </section>
  );
};