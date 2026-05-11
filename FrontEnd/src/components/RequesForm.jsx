import { useState } from "react";
import { ModalSendForm } from "./ModalSendForm"
import { crearSolicitud } from "../services/api"
import { SendFormFail } from "./SendFormFail"

export function RequestForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenError, setIsOpenError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("SUBMIT OK");

        const data = new FormData(event.currentTarget)
        const datos = {
            name: data.get('name'),
            email: data.get('email'),
            service: data.get('type_service'),
            description: data.get('description')
        }
        console.log("DATOS:", datos);
        try {
            const send = await crearSolicitud(datos)

            if (send?.success) {
                setIsOpen(true)
            } else {
                setIsOpenError(true)
            }
        } catch (e) {
            console.error('Hubo un error:', e)
            setIsOpenError(true)
        }


    }
    return (
        <section className="py-24 overflow-hidden" aria-labelledby="project-title">

            <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-start">

                <div className="lg:w-1/2">

                    <span className="font-label-caps text-primary mb-4 block">
                        TRANSFORMACIÓN
                    </span>

                    <h2 id="project-title" className="font-h1 text-h2 text-white mb-8">
                        Iniciar un Proyecto
                    </h2>

                    <p className="font-body-lg text-on-surface-variant mb-12">
                        Nuestro equipo de arquitectura técnica revisará su solicitud en menos de 24 horas para agendar una sesión de descubrimiento.
                    </p>

                    <div className="flex items-center gap-4 mb-6">

                        <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">verified</span>
                        </div>

                        <div>
                            <p className="font-body-md text-white font-medium">
                                Asesoría Técnica Experta
                            </p>
                            <p className="font-body-sm text-on-surface-variant">
                                Ingenieros Senior liderando cada etapa.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="lg:w-1/2 w-full">

                    <div className="glass-card p-8 rounded-2xl shadow-ambient">

                        <form onSubmit={handleSubmit} className="space-y-6" name="solicitud_services">

                            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-2">
                                    <label htmlFor="name" className="font-label-caps text-on-surface-variant uppercase">
                                        Nombre
                                    </label>
                                    <input id="name" name="name" type="text" placeholder="Juan Pérez" required
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg py-3 px-4 text-white focus:border-primary outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="font-label-caps text-on-surface-variant uppercase">
                                        Email
                                    </label>
                                    <input id="email" name="email" type="email" placeholder="juan@empresa.com" required
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg py-3 px-4 text-white focus:border-primary outline-none" />
                                </div>

                            </fieldset>

                            <div className="space-y-2">
                                <label htmlFor="service" className="font-label-caps text-on-surface-variant uppercase">
                                    Tipo de Servicio
                                </label>
                                <select id="service" name="type_service"
                                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-3 px-4 text-white focus:border-primary outline-none">
                                    <option>Inteligencia Artificial</option>
                                    <option>Desarrollo Web Next-Gen</option>
                                    <option>Soluciones Cloud</option>
                                    <option>Ciberseguridad Proactiva</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="font-label-caps text-on-surface-variant uppercase">
                                    Descripción
                                </label>
                                <textarea id="description" rows="4" required name="description"
                                    className="w-full bg-surface-container border border-outline-variant rounded-lg py-3 px-4 text-white focus:border-primary outline-none"
                                    placeholder="Cuéntanos sobre los objetivos técnicos de tu proyecto..."></textarea>
                            </div>

                            <button type="submit"
                                className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all">
                                Enviar Solicitud
                            </button>

                        </form>

                    </div>

                </div>

            </div>
            <ModalSendForm
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <SendFormFail isOpen={isOpenError} onClose={() => setIsOpenError(false)} />
        </section >
    )
}