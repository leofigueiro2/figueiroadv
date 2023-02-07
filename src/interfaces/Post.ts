import Media from './Media';

interface Post {
  id: number,
  title: {
    rendered: string
  },
  slug: string,
  author: number,
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string,
  featured_image_versions: Media
}

export default Post;