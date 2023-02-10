import Props from '@/interfaces/Props';
import styled from './UltimasPostagens.module.scss';
import Loading from 'components/Commons/Loading';
import formatDate from '@/Hooks/convertTime';
import CardUltimoPost from './CardUltimoPost';

const UltimasPostagens = ({ posts }: Props) => {

  if (!posts) {
    return <Loading />;
  }

  const firstThreePosts = posts.slice(0, 3);

  return (
    <section className={`${styled.section} d-flex flex-column`}>
      <h2 className='section__title'>Ultimas Postagens</h2>
      <div className='d-flex row flex-wrap flex-lg-nowrap align-items-center py-5'>
        {
          firstThreePosts.map((post) => (
            <CardUltimoPost
              key={post.id}
              titulo={post.title.rendered}
              link={`/blog/${post.id}`}
              src={post.featured_image_versions.versions.thumbnail}
              alt={post.featured_image_versions.alt}
              autor={'Figueiró Advocacia'}
              data={formatDate(post.date)}
              leitura={post.tempo.toString()}
            />
          ))
        }
      </div>


      {/* <Card
        titulo={post1.title.rendered}
        link={`/blog/${post1.id}`}
        src={post1.featured_image_versions.versions.thumbnail}
        alt={post1.featured_image_versions.alt}
        autor={'Figueiró Advocacia'}
        data={data1}
        leitura={post1.tempo.toString()}
      /> */}
    </section >
  );
};

export default UltimasPostagens;