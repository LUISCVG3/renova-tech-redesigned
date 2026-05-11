import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectsCard";
import { ObtenerProyectos } from "../services/api";

export function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            const res = await ObtenerProyectos()
            setProjects(res.data)
            console.log(res.data)
        }

        cargar()
    }, [])
    return (
        <main className="flex flex-col items-center w-full min-h-[90vh] mx-auto pb-24 bg-neutral-950 pt-15">
            <header className="flex flex-col gap-4 max-w-7xl w-full mb-16 animate-fade-in-right">
                <span className="text-primary text-label-caps tracking-[0.0375 rem]">PORTFOLIO</span>
                <h1 className="text-5xl font-bold tracking-[-0.96px]">Casos de Éxito</h1>

                <p className="text-slate-300 max-w-3xl">Explorando la intersección de la ingeniería y la innovación. Nuestro portafolio
                    destaca los sistemas técnicos construidos para resolver desafíos industriales complejos.</p>
            </header>
            <section className="flex gap-3 pb-8 max-w-7xl w-full items-center border-b border-surface-border/50 md:hidden">
                <button className="bg-primary-container text-[#00285D] font-medium text-label-caps uppercase rounded-sm py-2 px-4 cursor-pointer transition hover:bg-transparent hover-text-zinc-300 outline">all projects</button>
                <button className="text-zinc-300 border border-surface-border font-medium text-label-caps uppercase rounded-sm py-2 px-4 cursor-pointer transition hover:bg-primary-container hover:text-[#00285D]">ia</button>
                <button className="text-zinc-300 border border-surface-border font-medium text-label-caps uppercase rounded-sm py-2 px-4 cursor-pointer transition hover:bg-primary-container hover:text-[#00285D]">web</button>
                <button className="text-zinc-300 border border-surface-border font-medium text-label-caps uppercase rounded-sm py-2 px-4 cursor-pointer transition hover:bg-primary-container hover:text-[#00285D]">cloud</button>
                <button className="text-zinc-300 border border-surface-border font-medium text-label-caps uppercase rounded-sm py-2 px-4 cursor-pointer transition hover:bg-primary-container hover:text-[#00285D]">security</button>
            </section>

            <section className="grid grid-cols-3 justify-center w-full max-w-7xl gap-9 mt-10">
                {
                    projects?.map((project) => (
                        <ProjectCard
                            key={project.idprojects}
                            status={project.status_nombre}
                            statusid={project.status}
                            name={project.nombre}
                            description={project.description}
                            tecnologies={project.tecnologies}
                            cliente={project.cliente}
                            col={project.span}
                            img={project.img}
                        />
                    ))
                }

            </section>
        </main>
    )
}