import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((i) => {
        return (
          <div key={i.id}>
            <Link href={`posts/${i.id}`}>
              <h2>
                {i.id} {i.title}
              </h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}
export default PostList;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json(); // convert to json

  return {
    props: { posts: data },
  };
}
