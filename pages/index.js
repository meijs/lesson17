import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      
      <Head>
        <title>PlaceHolder API service</title>
      </Head>
      
      <Link href={"/users"}>
       List of Users
        </Link>
        <hr></hr>
        <Link href={"/posts"}>
       List of Posts
        </Link>
        <hr></hr> 
      <h1>Place Holder API service with SSR</h1>
      <p>https://jsonplaceholder.typicode.com</p>
      <img src="/api.png"/>
    </>




  );
}

export default Home;
