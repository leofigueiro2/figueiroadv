import Post from '@/interfaces/Post';
import styled from './Header.module.scss';
import Link from 'next/link';


interface PropsPost { 
  posts: Post,
}

export default function HeaderPost({posts}: PropsPost) {
  return (
    <section className={`${styled.section} py-5`}>

      <div className='container py-5 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap flex-md-nowrap gap-5'>

        <div className="d-flex gap-4 container">
          <span className={styled.leftborder}></span>
          <div className='d-flex flex-column justify-content-center gap-3'>
            <div className='d-flex align-items-end gap-1'> 
              <span className={styled.subtitlecard}>
                inicio /
              </span>
              <em><Link href={'/blog'} replace>Artigos</Link></em>
            </div>
            <div className={styled.line}></div>
            <h1 className={styled.title}>{posts.title.rendered} </h1>
          </div>
        </div>
      </div>
    </section>

  );
}