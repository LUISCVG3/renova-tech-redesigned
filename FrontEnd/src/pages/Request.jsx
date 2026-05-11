import { useState } from "react"
import { ModalSendForm } from "../components/ModalSendForm"
import { SendFormFail } from "../components/ModalSendFormFail"
import { EnviarProyecto } from "../services/api"

export function Request() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenError, setIsOpenError] = useState(false)

    const handleSubmitProject = async (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const datos = {
            nombre: data.get('fullName'),
            email: data.get('email'),
            empresa: data.get('organization'),
            tipo_Servicio: data.get('serviceType'),
            descripción: data.get('description'),
            presupuesto: data.get('presupuesto'),
            plazo_Estimado: data.get('plazo'),
            requerimientosTecnico: data.getAll('tech')
        }

        try {
            const response = await EnviarProyecto(datos)
            if (response?.success) {
                setIsOpen(true)
            } else {
                setIsOpenError(true)
            }
        } catch (e) {
            console.error('Hubo un error:', e)
            setIsOpenError(true)
        }

        console.log(datos)
    }
    return (
        <main className="bg-neutral-950 pt-32 pb-24 px-6 w-full mx-auto tech-grid min-h[90vh] flex flex-col items-center">
            <header className="mb-16 text-center">
                <div className="inline-block px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full mb-6 animate-fade-in-up">
                    <span className="font-label-caps text-primary uppercase">Proyecto Nuevo</span>
                </div>

                <h1 className="font-h1 text-h1 text-slate-50 mb-6 max-w-3xl mx-auto">
                    Inicia tu transformación digital
                </h1>

                <p className="text-body-lg text-slate-300 max-w-2xl mx-auto">
                    Define el futuro de tu infraestructura técnica. Completa los detalles a continuación para recibir una propuesta de ingeniería personalizada por parte de nuestros especialistas.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl">

                <aside className="lg:col-span-4 space-y-8" aria-label="Información del proceso">

                    <article className="p-8 border border-outline-variant/30 rounded-xl glass-panel">
                        <h2 className="font-h3 text-h3 text-slate-50 mb-4">¿Qué esperar?</h2>

                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary">task_alt</span>
                                <div>
                                    <p className="font-label-caps text-slate-50">Análisis Técnico</p>
                                    <p className="text-body-sm text-on-surface-variant">Evaluamos tus requerimientos en 24-48 horas.</p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary">hub</span>
                                <div>
                                    <p className="font-label-caps text-slate-50">Asignación de Arquitecto</p>
                                    <p className="text-body-sm text-on-surface-variant">Un líder técnico será asignado a tu consultoría inicial.</p>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <span className="material-symbols-outlined text-primary">description</span>
                                <div>
                                    <p className="font-label-caps text-slate-50">Propuesta de Valor</p>
                                    <p className="text-body-sm text-on-surface-variant">Recibirás un roadmap detallado y presupuesto ajustado.</p>
                                </div>
                            </li>
                        </ul>
                    </article>

                    <figure className="relative overflow-hidden rounded-xl border border-outline-variant/30 aspect-square group">
                        <img
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgdNndUfO-J-Tk3jedpQ-UPZdFU8grASOXRhUulYjiYAD__QEaQPkR3R606JG4J1OylaJKi5rAMy3lD07yW5QciZVFpNOE2Q0yKn0c6O48RuZw0FBkN-982qpxpypDYbHJFM865Lrpr7p2WnqHZ4SB0VJj7Yb14t4zNGwenKiPf_5fX6f7iomVqoQZ8jCcU-rxy3_mAOXagaX9iZdk3ls_sHYVOsS8CgmBckk2HTZXjaDx-sAq84ddE52jzw4p7eovJHzAVab4ePXo"
                            alt="Infraestructura tecnológica avanzada"
                        />
                        <figcaption className="absolute bottom-6 left-6 right-6">
                            <p className="font-mono text-xs text-primary mb-2">RENOVATECH LABS</p>
                            <p className="font-h3 text-slate-50">Infraestructura Crítica</p>
                        </figcaption>
                    </figure>

                </aside>

                <section className="lg:col-span-8">
                    <form onSubmit={handleSubmitProject} name="formproject" className="lg:col-span-8 space-y-12 bg-surface-container-low p-8 lg:p-12 border border-outline-variant/30 rounded-xl">

                        {/* Section 1 */}
                        <fieldset>
                            <legend className="sr-only">Información de Contacto</legend>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 rounded-full bg-primary-container/20 border border-primary text-primary flex items-center justify-center font-mono text-sm">
                                    01
                                </span>
                                <h2 className="font-h2 text-h2 text-slate-50">Información de Contacto</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="font-label-caps text-on-surface-variant uppercase">
                                        Nombre Completo
                                    </label>
                                    <input
                                        required
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Ej. Alexander Pierce"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-slate-50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-label-caps text-on-surface-variant uppercase">
                                        Correo Corporativo
                                    </label>
                                    <input
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="alex@empresa.com"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-slate-50 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label htmlFor="organization" className="font-label-caps text-on-surface-variant uppercase">
                                        Nombre de la Organización
                                    </label>
                                    <input
                                        required
                                        id="organization"
                                        name="organization"
                                        type="text"
                                        placeholder="RenovaTech Systems LLC"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-slate-50 transition-all"
                                    />
                                </div>

                            </div>
                        </fieldset>

                        {/* Section 2 */}
                        <fieldset>
                            <legend className="sr-only">Alcance del Proyecto</legend>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 rounded-full bg-primary-container/20 border border-primary text-primary flex items-center justify-center font-mono text-sm">
                                    02
                                </span>
                                <h2 className="font-h2 text-h2 text-slate-50">Alcance del Proyecto</h2>
                            </div>

                            <div className="space-y-6">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="serviceType" className="font-label-caps text-on-surface-variant uppercase">
                                        Tipo de Servicio
                                    </label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-slate-50 transition-all appearance-none"
                                    >
                                        <option>Desarrollo Cloud Native</option>
                                        <option>Modernización de Infraestructura</option>
                                        <option>Ciberseguridad & Auditoría</option>
                                        <option>IA & Machine Learning</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="description" className="font-label-caps text-on-surface-variant uppercase">
                                        Descripción Detallada
                                    </label>
                                    <textarea
                                        required
                                        id="description"
                                        name="description"
                                        rows={4}
                                        placeholder="Describa los objetivos principales..."
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none text-slate-50 transition-all"
                                    />
                                </div>

                            </div>
                        </fieldset>
                        {/* Section 3 */}
                        <fieldset>
                            <legend className="sr-only">Presupuesto y Tiempos</legend>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 rounded-full bg-primary-container/20 border border-primary text-primary flex items-center justify-center font-mono text-sm">
                                    03
                                </span>
                                <h2 className="font-h2 text-h2 text-slate-50">Presupuesto y Tiempos</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Presupuesto */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="presupuesto" className="font-label-caps text-on-surface-variant uppercase">
                                        Rango de Presupuesto (USD)
                                    </label>

                                    <select
                                        id="presupuesto"
                                        name="presupuesto"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 text-slate-50"
                                    >
                                        <option value="10k-50k">10k - 50k</option>
                                        <option value="50k-150k">50k - 150k</option>
                                        <option value="150k-500k">150k - 500k</option>
                                        <option value="enterprise">Enterprise</option>
                                    </select>
                                </div>

                                {/* Plazo */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="plazo" className="font-label-caps text-on-surface-variant uppercase">
                                        Plazo Estimado
                                    </label>

                                    <select
                                        id="plazo"
                                        name="plazo"
                                        className="bg-surface border border-outline-variant rounded px-4 py-3 text-slate-50"
                                    >
                                        <option value="<3m">&lt; 3 meses</option>
                                        <option value="3-6">3 - 6 meses</option>
                                        <option value="6-12">6 - 12 meses</option>
                                        <option value="continuo">Continuo</option>
                                    </select>
                                </div>

                            </div>
                        </fieldset>

                        {/* Section 4 */}
                        <fieldset>
                            <legend className="sr-only">Requerimientos Técnicos</legend>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-8 h-8 rounded-full bg-primary-container/20 border border-primary text-primary flex items-center justify-center font-mono text-sm">
                                    04
                                </span>
                                <h2 className="font-h2 text-h2 text-slate-50">Requerimientos Técnicos</h2>
                            </div>

                            <div className="flex flex-wrap gap-3">

                                {["AWS", "Kubernetes", "React/Next.js", "Python/ML", "PostgreSQL"].map((tech) => (
                                    <label
                                        key={tech}
                                        className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded border border-outline-variant cursor-pointer hover:border-primary transition-colors"
                                    >
                                        <input type="checkbox" name="tech" value={tech} />
                                        <span className="text-sm font-mono">{tech}</span>
                                    </label>
                                ))}

                            </div>
                        </fieldset>

                        {/* Submit */}
                        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-body-sm text-on-surface-variant max-w-lx">
                                Al enviar esta solicitud aceptas nuestros términos y política de privacidad.
                            </p>

                            <button
                                type="submit"
                                className="w-full md:w-auto bg-primary text-on-primary-container px-10 py-4 rounded-lg font-bold text-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                            >
                                Enviar Solicitud
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>

                    </form>

                </section>
            </div>
            <section className="py-24 m-auto flex flex-col items-center w-full px-75">
                <div className="flex gap-5 w-full justify-center items-center mb-16">
                    <h2 className="text-h2 tracking-tight font-semibold font-sans">Donde Encontranos</h2>
                    <div className="w-[70%] border-b border-neutral-500/30"></div>
                </div>
                <div className="w-full flex items-center gap-10">
                    <article className="w-4xl flex flex-col gap-10">
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                            <div>
                                <h4 className="font-label-caps text-slate-50 uppercase">Oficina Central</h4>
                                <p className="text-body-lg text-on-surface-variant">Calle de la Innovación 42,<br />Tech City, TC 10101</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                            <div>
                                <h4 className="font-label-caps text-slate-50 uppercase">Contacto Directo</h4>
                                <p className="text-body-md text-on-surface-variant">hola@renovatech.com</p>
                            </div>
                        </div>
                        <div className="w-full bg-secondary-container/20 p-5 border border-outline/50 rounded-[7px]">
                            <p className="text-primary font-sans italic">"Donde la vision se encuentra con la ejecucion tecnica."</p>
                        </div>
                    </article>
                    <iframe className="w-full overflow-hidden"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108756.1150722108!2d-106.47735520076824!3d31.58923124791231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75de882a91793%3A0x6787c5ec72978263!2sRENOVA!5e0!3m2!1ses-419!2smx!4v1778095787092!5m2!1ses-419!2smx"
                        height="450" width="450" style={{ border: 0 }} allowFullScreen="t" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </section>
            <ModalSendForm isOpen={isOpen}
                onClose={() => setIsOpen(false)} />
            <SendFormFail isOpen={isOpenError} onClose={() => setIsOpenError(false)} />
        </main>
    )
}