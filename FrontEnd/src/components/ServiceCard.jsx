export function ServiceCard({ title, icon, description }) {
    return (
        <article className="flex flex-col gap-3 max-w-71.5 h-61.25 p-8 rounded-sm border border-slate-800/50 bg-gray-900/60 group view-card shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-blue-200/10 rounded-xl flex justify-center items-center w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined icon-fill text-[#ADC6FF]">
                    {icon}
                </span>
            </div>
            <h3 className="font-sans font-semibold text-2xl tracking-tight text-white">{title}</h3>
            <p className="font-sans text-body-sm text-[#C2C6D6] text-on-surface-variant" >{description}</p>
        </article>
    )
}