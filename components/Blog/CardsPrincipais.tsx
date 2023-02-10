import Props from '@/interfaces/Props';
import styled from '../../src/styles/Blog/Cards.module.scss';
import Card from './Card';
import filterPost from '@/Hooks/filterPostById';
import Loading from 'components/Commons/Loading';
import formatDate from '@/Hooks/convertTime';

const CardsPrincipais = ({ posts }: Props) => {
  const [post1, post2, post3] = [filterPost(posts, 13), filterPost(posts, 16), filterPost(posts, 21)];

  if (!post1 || !post2 || !post3) {
    return <Loading />;
  }

  const data1 = formatDate(post1.date);
  const data2 = formatDate(post2.date);
  const data3 = formatDate(post3.date);

  return (
    <section className={`${styled.section} row d-flex flex-wrap flex-lg-nowrap align-items-center py-5`}>
      <Card
        titulo={post1.title.rendered}
        link={`/blog/${post1.id}`}
        src={post1.featured_image_versions.versions.thumbnail}
        alt={post1.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data1}
        leitura={post1.tempo.toString()}
      />
      <Card
        titulo={post2.title.rendered}
        link={`/blog/${post2.id}`}
        src={post2.featured_image_versions.versions.thumbnail}
        alt={post2.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data2}
        leitura={post2.tempo.toString()}
      />
      <Card
        titulo={post3.title.rendered}
        link={`/blog/${post3.id}`}
        src={post3.featured_image_versions.versions.thumbnail}
        alt={post3.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data3}
        leitura={post3.tempo.toString()}
      />
    </section >
  );
};

export default CardsPrincipais;