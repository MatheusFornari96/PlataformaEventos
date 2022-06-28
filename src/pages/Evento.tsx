import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Evento(){
    const { slug } = useParams<{slug: string}>();

    return(
        <div className="flex flex-col min-h-screen">
        <Header /> 
        <main className="flex flex-1">
            {slug 
            ? <Video lessonSlug={slug}/>
            : <div className="flex-1 text-center align-center justify-center"><p>Selecione uma aula para assistir</p></div> }
            <Sidebar />
        </main>
        </div>
    )
}