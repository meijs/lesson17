//dynamic route

function Post({ post }) {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

// er moet bekend zijn welke dynamic links er zijn
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json(); // convert to json
  
  const paths = data.map((i) => {
    return { params: {postId: `${i.id}`} };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json(); // convert to json

  return {
    props: {
      post: data,
    },
  };
}
