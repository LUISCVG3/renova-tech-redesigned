export function SendFormFail({ isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <section className='fixed inset-0 grid items-center justify-center animate-fade-in animate-duration-200'>
            <div className='bg-surface/90 w-125 h-70 flex flex-col items-center justify-center rounded-2xl'>

                <span className="p-5">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#7a0000" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="w-25 h-25 icon icon-tabler icons-tabler-outline icon-tabler-alert-circle">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                    </svg>
                </span>

                <h2 className="font-bold text-xl">Solicitud No Enviada</h2>

                <header className='font-light mt-1 text-sm'>
                    Hubo un error al enviar
                </header>

                <footer>
                    <button className="py-3 px-6 m-3 rounded-2xl bg-primary-container hover:bg-primary-container/50 transition cursor-pointer" onClick={onClose}>Cerrar</button>
                </footer>

            </div>
        </section>
    )
}