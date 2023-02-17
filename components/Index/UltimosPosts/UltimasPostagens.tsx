import Props from '@/interfaces/Props';
import styled from './UltimasPostagens.module.scss';
import formatDate from '@/Hooks/convertTime';
import CardUltimoPost from './CardUltimoPost';
import Header from './Header';
import Link from 'next/link';

const UltimasPostagens = ({ posts }: Props) => {




  return (
    <section className={`${styled.section} d-flex flex-column align-items-center`}>
      <Header />
      <div className="container d-flex flex-column py-2">


        <div className={`${styled.cards} d-flex row flex-wrap align-items-center py-0`}>
          {
            posts.map((post) => (
              <CardUltimoPost
                key={post.id}
                titulo={post.title.rendered}
                link={`https://www.figueiroadvocacia.com.br/blog/${post.id}`}
                src={post.featured_image_versions.versions.thumbnail}
                alt={post.featured_image_versions.alt}
                autor={'Figueiró Advocacia'}
                data={formatDate(post.date)}
                leitura={post.tempo.toString()}
              />
            ))
          }
        </div>
        <Link href={'https://www.figueiroadvocacia.com.br/blog'} className={styled.linkmais}>+ Artigos & notícias</Link>
      </div>
    </section >
  );
};

export default UltimasPostagens;