import { Link } from "./Link";

export function Footer() {
    return (
        <footer className="flex items-center justify-between bg-gray-950 w-full border-t border-gray-900  py-5 px-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="text-lg font-black text-white">RenovaTech</div>
                <p className="font-['Inter'] text-xs uppercase tracking-widest text-gray-500">© 2024 RenovaTech. Solutions for the next generation. BY Luis Angel C.</p>
            </div>
            <nav className="flex gap-8">
                <Link href='/services' className="uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-colors">Services</Link>
                <Link href='/services' className="uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <Link href='/services' className="uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                <Link href='/contact' className="uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
        </footer>
    )
}
