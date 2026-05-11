export function ProjectsDashboard() {

    const handleClickEliminate = (event) => {
        event.preventDefault()

        const datos = new FormData('')
    }
    return (
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/30">

            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="font-h2 text-h2 text-white">
                        Proyectos Recientes
                    </h2>

                    <a href="/projects"
                        className="flex items-center gap-2 text-primary font-body-sm hover:underline">
                        Ver todos
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>

                </div>
                <ul className="space-y-4">
                    <li>

                        <article className="flex flex-col md:flex-row items-center justify-between p-6 bg-surface-container rounded-xl border border-outline-variant group hover:bg-surface-container-high transition-colors">

                            <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">

                                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">data_object</span>
                                </div>

                                <div>
                                    <h3 className="font-body-md text-white font-semibold">
                                        Motor de Recomendación IA
                                    </h3>
                                    <p className="font-body-sm text-on-surface-variant">
                                        Cliente: Nexus Retail • Estado: En Revisión
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">

                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps text-[10px]">
                                    BACKEND
                                </span>

                                <div className="flex items-center gap-2">

                                    <button aria-label="Editar proyecto"
                                        className="p-2 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                    </button>

                                    <button aria-label="Eliminar proyecto"
                                        className="p-2 text-on-surface-variant hover:text-error transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>

                                </div>

                            </div>

                        </article>

                    </li>

                </ul>

            </div>

        </section>
    )
}