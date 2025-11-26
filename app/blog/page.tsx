import { getAllPosts } from "@/lib/markdown/loader";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();
  return posts.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`}>{p.slug}</Link>);
}