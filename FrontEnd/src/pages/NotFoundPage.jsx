import { Link } from "../components/Link";

export function NotFoundPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[83vh] tech-grid">

            <h1 className="text-6xl font-bold text-primary-container">404</h1>

            <h2 className="text-4xl font-semibold mb-4">Pagina no encontrada</h2>

            <p className="text-lx mb-7">Parece que la ruta que buscas esta fuera de nuestra red o ha sido reubicada.</p>
            
            <Link href="/" className="py-3 px-5 rounded-xl bg-primary-container hover:opacity-80">Volver al Menu</Link>
        </main>
    )
}