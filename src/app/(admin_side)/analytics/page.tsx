import Link from 'next/link';
export default function Analytics() {
  return (
    <main>
      <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/analytics'}>Analytics</Link>
        <Link href={'/allposts'}>Posts</Link>
        <h1>Analytics</h1>
        <p>This is the Analytics Page</p>
      </div>
    </main>
  );
}
