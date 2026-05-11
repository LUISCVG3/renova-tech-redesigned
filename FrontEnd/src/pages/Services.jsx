export function ServicesPage() {
    return (
        <main className="bg-neutral-950 px-32 pt-32 pb-24 overflow-hidden items-center tech-grid w-full min-h-[90vh]">

            <header className="mb-20">
                <p className="inline-flex text-sm items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in-up">
                    <span className="material-symbols-outlined" data-weight="fill">settings_input_component</span>
                    <span>ELITE ENGENEERING</span>
                </p>

                <h1 className="text-5xl max-w-150">Nuestros Servicios Especializados</h1>
                <p className="text-[#C2C6D6] text-lg tracking-tight max-w-150">Impulsamos la evolucion tecnologina a traves de arquetecturas precisas, inteligencia aplicada y seguirdad inquebrantable.</p>
            </header>

            <section className="grid grid-cols-4 gap-5">

                <article className="bg-[#111827] col-span-2 p-8">
                    <div className="flex justify-between">
                        <span className="material-symbols-outlined" data-weight="fill">psychology</span>
                        <div className="flex gap-2 mb-8">
                            <span className="bg-secondary-container flex items-center p-2 text-label-caps">PYTORCH</span>
                            <span className="bg-secondary-container flex items-center p-2 text-label-caps">OPENAI</span>
                        </div>
                    </div>

                    <h3 className="text-h2 tracking-tight font-semibold">Inteligencia Artificial</h3>
                    <p className="text-body-md text-[#C2C6D6]">Implementación de modelos de Machine Learning y Procesamiento de Lenguaje Natural (NLP) diseñados para optimizar flujos de trabajo críticos y automatización cognitiva.</p>

                    <div className="flex justify-end mt-10">
                        <a href="/projects"
                            className="flex gap-2 text-primary text-sm hover:gap-4 transition-all">
                            EXPLORE CLOUD
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </article>

                <article className="bg-[#111827] col-span-2 p-8">

                    <div className="flex justify-between">
                        <span className="material-symbols-outlined" data-weight="fill">web</span>
                        <div className="flex gap-2 mb-8">
                            <span className="bg-secondary-container flex items-center p-2 text-label-caps">NEXT.JS</span>
                            <span className="bg-secondary-container flex items-center p-2 text-label-caps">OPENAI</span>
                        </div>
                    </div>

                    <h3 className="text-h2 tracking-tight font-semibold">Web Enginerring</h3>
                    <p className="text-body-md text-[#C2C6D6]">Arquitecturas escalables utilizando React y Node.js. Enfoque en rendimiento, Core Web Vitals y experiencias de usuario de alta fidelidad.</p>
                    
                    <div className="flex justify-end mt-10">
                        <a href="/projects"
                            className="flex gap-2 text-primary text-sm hover:gap-4 transition-all">
                            EXPLORE CLOUD
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </article>

                <article className="bg-[#111827] col-span-1 p-8">

                    <div className="flex justify-between">
                        <span className="material-symbols-outlined" data-weight="fill">cloud_done</span>
                        <div className="flex gap-2 mb-8">
                            <span className="bg-secondary-container flex items-center p-2 text-label-caps">THERAFORM</span>
                        </div>
                    </div>

                    <h3 className="text-h2 tracking-tight font-semibold">Cloud Systems</h3>
                    <p className="text-body-md text-[#C2C6D6]">Migración estratégica a AWS y Azure. Implementación de arquitecturas Serverless y optimización de costes operacionales mediante infraestructura como código.</p>
                    
                    <div className="flex justify-end mt-10">
                        <a href="/projects"
                            className="flex gap-2 text-primary text-sm hover:gap-4 transition-all">
                            EXPLORE CLOUD
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </article>

                <article className="col-span-3 p-8 group bg-linear-to-br from-[#111827] to-[#0a0a0a]">
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <div className="mb-12">
                                <span className="material-symbols-outlined text-primary text-5xl">shield_lock</span>
                            </div>
                            <h3 className="font-h2 text-h2 mb-4">Cybersecurity</h3>
                            <p className="font-body-md text-on-surface-variant mb-8">
                                Pentesting avanzado y despliegue de políticas Zero Trust. Protegemos activos digitales contra amenazas persistentes avanzadas (APT) y vulnerabilidades críticas.
                            </p>
                        </div>
                        <div className="hidden lg:block w-48 relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                            <img className="w-full h-full object-cover grayscale opacity-40 border border-outline-variant" data-alt="A highly detailed close-up of a server room corridor with blinking blue LED lights and structured network cables. The scene is dark and technical, emphasizing security and data protection. The lighting is cold and precise, reflecting a high-tech cybersecurity environment with deep blacks and metallic surfaces. The mood is silent, professional, and sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6A_BdOdOGx3xTkbe59kh0EtWA2a4MWbkPVUsdQl6iR9JSCf0yyjoflSrJpUsLRdPzvo2II6EgzcERrHorrZqABWFBua7qF5w_N6PCJP1Q1v_8tmiQPXHsbIMDBh7PgvQ1zbdZn8VBjCc79oN0QxJVBZIYvhUSsDcnT5hqd367fQvrNA_q47mHBhfGtHURcD5Bb9DguCBpAcbcd6hJaeMVIjDcUzk6DkzP8fLYJkWLt1i2tFdQhctEV0QctsaX2zUm8YEYMlfrLI1" />
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-outline-variant pt-6">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1 text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm" data-weight="fill">verified_user</span>
                                <span className="font-label-caps text-[10px]">ISO 27001</span>
                            </div>
                            <div className="flex items-center gap-1 text-on-surface-variant">
                                <span className="material-symbols-outlined text-sm" data-weight="fill">lock</span>
                                <span className="font-label-caps text-[10px]">ZERO TRUST</span>
                            </div>
                        </div>
                        <div className="flex justify-end mt-10">
                            <a href="/projects"
                                className="flex gap-2 text-primary text-sm hover:gap-4 transition-all">
                                SECURITY AUDIT
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </main >
    )
}