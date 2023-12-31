import { getProject } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
};

export default async function Project( {params}: Props){
    const slug = params.project;
    const project = await getProject(slug);
    return ( 
    <div>
        <header className="flex items-center justify-between">
            <h1 className="text-5xl font-extrabold text-transparent drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text">{project.name}</h1>
            <a className="px-4 py-3 font-bold text-gray-500 transition bg-gray-100 rounded-lg whitespace-nowrap hover:bg-pink-500 hover:text-pink-100" href={project.url} title="View Project" target="_blank" rel="noopener no referrer">View Project</a>
        </header>
        
        {/* content goes here */}
        <div className="mt-5 text-lg text-gray-700"><PortableText value={project.content}/></div>
        {/* image goes here */}
        <Image src={project.image} alt={project.name} width={1920} height={1080} className="object-cover mt-10 border-2 border-gray-700 rounded-xl"/>
        </div>)
} 