import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((i) => {
        return (
          <ul key={i.id}>
            <User user={i}/>
          </ul>
        );
      })}
    </>
  );
}

export default UserList;

//If you export a function called getStaticProps (Static Site Generation) from a page
// Next.js will pre-render this page at build time using the props returned by getStaticProps. dat gaat niet bij een componenent. page is special
//getStaticProps always runs on the server and never on the client. normaal gesproken alleen in build time maar tijdens devolop bij iedere request
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json(); // convert to json

  return {
    props: { users: data },
  };
}
