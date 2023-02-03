export default interface Post {
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
  featured_media: number
}