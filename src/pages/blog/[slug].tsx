import http from '@/http';
import axios, { AxiosResponse } from 'axios';
import Layout from 'components/Commons/layout';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';


function Post() {
  const router = useRouter();
  const param = router.query.slug;

  interface Post {
    id: number,
    title: {
      rendered: string
    },
    slug: string, 
    content: {
      rendered: string
    }
  }

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const filterPostBySlug = async () => {
      try {
        const response = await http.get<Post[]>(
          '/posts/'
        );
        const filteredPost = response.data.find((post) => post.slug === param);
        setPost(filteredPost);
      } catch (error) {
        console.log(error);
      }
    };
    filterPostBySlug();
  }, []);
  
  if(!post) {
    return <div>Carregando</div>;
  }


  const conteudo = post.content.rendered;


  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: conteudo }}>

      </div>
    </>
  );
}


Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Post;