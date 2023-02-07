import Props from '@/interfaces/Props';
import styled from '../../src/styles/Blog/Cards.module.scss';
import Card from './Card';
import filterPost from '@/Hooks/filterPostById';
import Loading from 'components/Commons/Loading';
import formatDate from '@/Hooks/convertTime';
import calculateReadingTime from '@/Hooks/tempoLeitura';

const CardsPrincipais = ({ posts }: Props) => {
  const [post1, post2] = [filterPost(posts, 13), filterPost(posts, 16)];

  if (!post1 || !post2) {
    return <Loading />;
  }

  const [data1, tempo1] = [formatDate(post1.date), calculateReadingTime(post1.content.rendered)];
  const [data2, tempo2] = [formatDate(post2.date), calculateReadingTime(post2.content.rendered)];
  return (
    <section className={`${styled.section} row d-flex flex-wrap flex-lg-nowrap align-items-center py-5`}>
      <Card
        titulo={post1.title.rendered}
        link={`/blog/${post1.id}`}
        src={post1.featured_image_versions.versions.thumbnail}
        alt={post1.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data1}
        leitura={tempo1.toString()}
      />
      <Card
        titulo={post2.title.rendered}
        link={`/blog/${post2.id}`}
        src={post2.featured_image_versions.versions.thumbnail}
        alt={post2.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data2}
        leitura={tempo2.toString()}
      />
    </section >
  );
};

export default CardsPrincipais;