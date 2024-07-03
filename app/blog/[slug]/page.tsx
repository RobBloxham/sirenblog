import { fullBlog } from "../../lib/interface";
import { client, urlFor } from "../../lib/sanity"
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string){
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
    title,
    content,
    titleImage
    }[0]
    `;

    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({
    params,
}: {
    params: {slug: string};
}) {
    const data: fullBlog = await getData(params.slug);
    return(
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-pink-400 font-semibold tracking-wide uppercase">
                    Team Siren
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>
            <Image 
                src={urlFor(data.titleImage).url()} 
                height={800} 
                width={800} 
                alt="blog article image" 
                className="rounded-lg mt-8 border"
                priority
            />
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-pink-400 prose-a:text-pink-400">
                <PortableText value={data.content}/>
            </div>
        </div>
    )
}