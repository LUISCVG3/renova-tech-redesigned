import { useRouter } from "../Hooks/useRouter"

export function Hero() {
    const { navigateTo } = useRouter()
    const handleSubmit = () => {
        navigateTo('/request')
    }
    return (
        <header className="relative pt-32 pb-24 overflow-hidden  flex items-cente tech-grid">
            <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-3xl animate-fade-in-right">

                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in-up delay-250">
                        <span className="material-symbols-outlined text-body-md" data-weight="fill">bolt</span>
                        <span className="tracking-tight text-label-caps">PRÓXIMA GENERACIÓN</span>
                    </p>

                    <h1 className="font-h1 font-bold text-5xl text-white mb-6">
                        Soluciones tecnológicas de <span className="text-primary">próxima generación</span>
                    </h1>

                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-[546.63px]">
                        Impulsamos la transformación digital mediante ingeniería de alta precisión y arquitecturas escalables.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="relative w-full sm:w-96 group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500">
                                search
                            </span>
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar servicio especializado..."
                                className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-4 pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full sm:w-auto bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-h3 text-body-md font-semibold active:scale-95 hover:opacity-85 transition-all shadow-lg shadow-primary/20">
                            Solicitar proyecto
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}