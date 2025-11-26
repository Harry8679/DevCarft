import { getPost } from "@/lib/markdown/loader";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}
