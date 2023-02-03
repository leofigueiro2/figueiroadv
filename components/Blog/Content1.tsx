import styled from '../../src/styles/Blog/Content1.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import formatDate from '@/Hooks/convertTime';
import calculateReadingTime from '@/Hooks/tempoLeitura';
import Props from '@/interfaces/Props';
import Post from '@/interfaces/Post';
import { useEffect, useState } from 'react';
import Loading from 'components/Commons/Loading';
import filterPost from '@/Hooks/filterPostById';



function Content1({posts}: Props) {
  const [filteredPost, setFilteredPost] = useState<Post>();


  useEffect(() => {
    filterPost(posts, 5, setFilteredPost);
  },[]);
  
  
  if(!filteredPost) {
    return <Loading/>;
  }

  const id = filteredPost.id.toString();
  const title = filteredPost?.title.rendered;
  const resumo = filteredPost?.excerpt.rendered;
  const data = formatDate(filteredPost.date);
  const tempo = calculateReadingTime(filteredPost.content.rendered);
  const src = filteredPost.fimg_url[0];
  return (
    <section className={`${styled.section} row align-items-center`}>
      <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 p-0'>
        <Link href={`blog/${id}`}>
          <figure>
            <Image className={styled.img} src={src} alt='Sócrates' width={1000} height={1000} />
          </figure>
        </Link>
      </div>
      <div className='col-lg-4 col-md4 col-sm-12 col-xs-12 '>
        <div className={`${styled.noticiaPrincipal__conteudo} p-3 d-flex flex-column gap-3`}>
          <Link href={`blog/${id}`}><h3 className='section__title'>{title}</h3></Link>
          <div className='d-flex flex-column gap-3' >
            <div className={styled.blog__texto} dangerouslySetInnerHTML={{ __html: resumo }}></div>
            <span className={styled.blog__autor}>Por Figueiró Advocacia</span>
            <span className={styled.blog__texto}> {data} - {tempo} min de leitura</span>
          </div>
        </div>
      </div>
    </section>
  );
}




export default Content1;