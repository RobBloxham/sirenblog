
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    _createdAt,
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function BlogCard() {
  const data: simpleBlogCardeBlogCard[] = await getData()
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-5">
      {data.map((post, idx) => (
          <Card key={idx}>
            <Image 
            src={urlFor(post.titleImage).url()} 
            alt="title image for blog" 
            height={500} 
            width={500}
            className="rounded-t-lg h-[200px] object-cover" 
             />
             <CardContent className='mt-5'>
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark: text-gray-300">Posted: {post._createdAt} UTC</p>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark: text-gray-300">{post.smallDescription}</p>
              <Button asChild className="w-full mt-7 bg-pink-400">
                <Link href={`/blog/${post.currentSlug}`}> Read More
                </Link>

              </Button>
             </CardContent>
            

          </Card>
      ))}
    </div>
    </div>
  );
}