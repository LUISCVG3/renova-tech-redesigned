export function ProjectCard({ status, statusid, name, description, tecnologies, cliente, col, img }) {
    const statusMap = {
        1: 'bg-primary-container',
        2: 'bg-orange-500',
        3: 'bg-orange-300',
    };
    const classStatus = `${statusMap[Number(statusid)]} text-on-primary uppercase font-medium text-label-caps py-1 px-3 rounded-sm absolute m-4`

    return (
        <article className="flex flex-col w-full overflow-hidden rounded-xl border border-surface-border md:col-span-2 lg:col-span-3" style={{ gridColumn: `span ${col ?? 1} / span ${col ?? 1}` }}>
            <header className="flex h-80 w-full relative">
                <span className={classStatus}>
                    {status}
                </span>

                <img src={img} alt="" className="w-full object-cover " />
            </header>
            <div className="bg-surface-border p-5 h-60">
                <div className="flex justify-between items-center">
                    <small className="uppercase text-primary">{tecnologies}</small>
                    <div className="flex flex-col justify-center items-end">
                        <small className="text-secondary/50">CLIENT</small>
                        <p className="text-secondary">{cliente}</p>
                    </div>
                </div>
                <h1 className="text-3xl font-medium font-sans mb-4">{name}</h1>
                <p className="text-secondary/70 text-sm max-w-145">{description}</p>
            </div>
        </article>
    )
}