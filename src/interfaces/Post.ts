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
  fimg_url: string
}

export default Post;