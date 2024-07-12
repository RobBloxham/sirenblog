
import BlogCard from "@/app/components/blogcard";

export const revalidate = 30;

export default function Home() {
  return (
    <>
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-pink-400 font-semibold tracking-wide uppercase">
            Foreword
        </span>
        <span className="mt-2 block text-center leading-8 font-bold tracking-tight px-10">
            <div className="flex justify-center max-w-3xl flex-col mx-auto">
           <p>First and foremost please understand that we in no way meant to mock the members of the original Team Siren. 
           Those players were treated unfairly by no fault of their own. The experience from a team ownership/management
           perspective on the other hand is deserving of criticism. We are here to have fun, the content generated on this blog is for that purpose.
           The articles are satire and the music is AI generated. </p> 
           </div>
        </span>
      </h1>         
    </div>  
    <BlogCard />
    </>
  );
}
