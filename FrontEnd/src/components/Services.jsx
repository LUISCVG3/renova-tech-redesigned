import services from "../data/services.json";
import { ServiceCard } from "./ServiceCard";

export function Services() {
    return (
        <section className="bg-neutral-950 py-24 m-auto flex flex-col items-center w-full px-75">
            <div className="flex gap-5 w-full justify-center mb-16">
                <div className="">
                    <span className="text-label-caps text-blue-200 font-medium">Catalogo</span>
                    <h2 className="text-h2 tracking-tight font-semibold font-sans">Nuestros Servicios</h2>
                </div>
                <div className="w-[70%] border-b border-neutral-500/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    services.map(service => (
                        <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
                    ))
                }
            </div>
        </section>
    )
}