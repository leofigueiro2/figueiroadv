import Props from '@/interfaces/Props';
import Loading from 'components/Commons/Loading';
import styled from './ListaDePosts.module.scss';
import Link from 'next/link';

export default function ListaDePosts({ posts }: Props) {
  if (!posts) {
    return <Loading />;
  }
  return (
    <section className={`${styled.listaPosts} p-4 d-flex flex-column gap-2 container`}>
      <h4> Outros artigos</h4>
      <hr />
      <div >
        <ul className='d-flex flex-column gap-3'>

          {posts.map((post) => (
            <li key={post.id}><Link href={`/blog/${post.id}`} replace>{post.title.rendered}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}