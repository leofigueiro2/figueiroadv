import Post from '@/interfaces/Post';

function filterPost(posts:Post[], slug: string, setFilteredPost:Function) {
  const filteredPost = posts.find((post) => post.slug === slug);
  setFilteredPost(filteredPost);
}

export default filterPost;