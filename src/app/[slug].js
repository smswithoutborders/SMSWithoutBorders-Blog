import { useRouter } from 'next/router';

function MyDynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Now you can use the slug in your component logic
  // For example, you can fetch data based on the slug

  return (
    <div>
      <h1>Slug: {slug}</h1>
    </div>
  );
}

export default MyDynamicPage;
