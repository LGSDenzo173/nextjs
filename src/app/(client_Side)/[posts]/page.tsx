export default function Dynamic_Posts({
  params,
}: {
  params: { posts: string };
}) {
  return <div>The Post include {params.posts}</div>;
}
