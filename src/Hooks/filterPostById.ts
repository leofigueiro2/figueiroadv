import Post from '@/interfaces/Post';

function filterPost(posts:Post[], id: number, setFilteredPost:Function) {
  const filteredPost = posts.find((post) => post.id === id);
  setFilteredPost(filteredPost);
}

export default filterPost;