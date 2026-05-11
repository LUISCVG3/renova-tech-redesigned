import { Link } from "./Link"

export function NavBar() {
    return (
        <header className="sticky top-0 flex w-full justify-between items-center bg-surface text-gray-500 h-15 px-8 backdrop-blur-md shadow-2xl shadow-blue-500/5 z-20 md:flex-row md:items-center md:justify-between">
            <Link href="/" aria-label="RenovaTech - Inicio">
                <span className="text-white text-xl font-bold tracking-tighter dark:text-gray-50 font-h2">RenovaTech</span>
            </Link>

            <nav aria-label="Navegación principal">
                <ul className="flex gap-8">
                    <li><Link href="/" className="tracking-tight font-medium text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/services" className="tracking-tight font-medium text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Services</Link></li>
                    <li><Link href="/request" className="tracking-tight font-medium text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Request</Link></li>
                    <li><Link href="/projects" className="tracking-tight font-medium text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Projects</Link></li>
                </ul>
            </nav>

            <Link href="/request" className="py-2 px-6 rounded-sm bg-primary-container text-[#00285D] font-semibold text-sm">Solicitar proyecto</Link>
        </header>
    )
}