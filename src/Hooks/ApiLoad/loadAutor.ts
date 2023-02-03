import http from '@/http';
import Autor from '@/interfaces/Autor';
import Post from '@/interfaces/Post';



const loadAuthor = async (post: Post | undefined, setAuthor: Function) => {
  try {
    const res = await http.get<Autor[]>('/users/');
    const filteredAutor = res.data.find((autor) => autor.id === post?.author);
    setAuthor(filteredAutor);
  } catch (error) {
    console.error('Erro na requisição do autor', error);
  }
};

export default loadAuthor;
