import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export async function getPost(slug: string) {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf-8");
  const { data, content } = matter(file);

  const htmlContent = await remark().use(html).process(content);

  return {
    ...data,
    content: htmlContent.toString(),
  };
}

export function getAllPosts() {
  return fs.readdirSync(postsDir).map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}