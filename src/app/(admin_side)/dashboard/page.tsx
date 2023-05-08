import Link from 'next/link';
export default function Dashboard() {
  return (
    <main>
      <Link href={'/'}>Home</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/analytics'}>Analytics</Link>
      <Link href={'/allposts'}>Posts</Link>
      <div>
        <h1>Dashboard</h1>
        <p>
          This is the Dashboard Page Where We Are going to create Admin Dashoard
        </p>
      </div>
    </main>
  );
}
