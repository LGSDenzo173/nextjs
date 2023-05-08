import Link from "next/link";
export default function Posts() {
  return (
    <main>
      <div>
      <Link href = {"/"}>Home</Link>
      <Link href = {"/dashboard"}>Dashboard</Link>
      <Link href = {"/analytics"}>Analytics</Link>
      <Link href = {"/allposts"}>Posts</Link>
        <h1>Posts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
          deleniti et rerum neque aliquid eius quos tempora pariatur fugit iste
          excepturi, laborum perspiciatis numquam, esse aspernatur voluptatem.
          Quas, vitae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est harum
          provident omnis id molestiae illum commodi inventore itaque deleniti
          ea repellendus labore voluptatem, error, ipsum voluptate. Nesciunt,
          impedit quos.
        </p>
      </div>
    </main>
  );
}
