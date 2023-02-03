import http from '@/http';
import Post from '@/interfaces/Post';


const loadPost = async (setPost: Function, id?: number, setPostFiltered?: Function) => {
  try {
    const res = await http.get<Post[]>('/posts/');
    if (id && setPostFiltered) {
      const filteredPost = res.data.find((post) => post.id === id);
      setPostFiltered(filteredPost);
    } else {
      setPost(res.data);
    }


  } catch (error) {
    console.error('Erro na requisição dos Posts', error);
  }
};

export default loadPost;
