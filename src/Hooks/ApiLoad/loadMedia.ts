import http from '@/http';
import Media from '@/interfaces/Media';
import Post from '@/interfaces/Post';


const loadMedia = async (post: Post | undefined, setMedia: Function) => {
  try {
    const res = await http.get<Media[]>('/media/');
    const filteredMedia = res.data.find((media) => media.id === post?.featured_media);
    setMedia(filteredMedia);
  } catch (error) {
    console.error('Erro ao carregar imagem', error);
  }
};

export default loadMedia;
