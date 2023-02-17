import styled from './UltimasPostagens.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Card {
  titulo: string, 
  link: string,
  src: string,
  autor: string,
  data: string,
  leitura: string,
  alt: string
}

export default function CardUltimoPost({titulo, link, src, autor, data, alt, leitura}: Card) {
  return (

    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12' >
      <div className={styled.boxCard}>
        <div className={styled.border}>
          <Link href={link} title={titulo}>
            <figure>
              <Image className={styled.img} src={src} alt={alt} width={500} height={100}/>
            </figure>
          </Link>
          <div className={styled.card__conteudo}>
            <h3 className={styled.card__titulo}>
              <Link href={link}>
                {titulo}
              </Link>
            </h3>
            <p className={styled.blog__autor}>Por {autor}</p>
            <p className={styled.blog__texto}> {data} - {leitura} min de leitura</p>
          </div>
        </div>
      </div>
    </div>
  );
}









