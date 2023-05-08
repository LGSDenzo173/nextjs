import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div>
      <Link href = {"/"}>Home</Link>
      <Link href = {"/dashboard"}>Dashboard</Link>
      <Link href = {"/analytics"}>Analytics</Link>
      <Link href = {"/allposts"}>Posts</Link>
        <h1>Home</h1>
        <p>Lorem Ipsum is the good guy</p>
      </div>
    </main>
  );
}
