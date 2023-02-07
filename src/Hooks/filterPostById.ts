import Post from '@/interfaces/Post';

function filterPost(posts:Post[], id: number) {
  const filteredPost = posts.find((post) => post.id === id);
  
  return filteredPost;
}

export default filterPost;