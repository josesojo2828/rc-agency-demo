import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl font-black mb-2">RC.Agency</h3>
                    <p className="opacity-70 text-sm max-w-xs">
                        Transformando el mundo digital con innovación,  diseño y tecnología de punta.
                    </p>
                </div>

                <div className="flex gap-6 mb-6 md:mb-0">
                    <a href="#" className="hover:text-primary transition-colors"><Github /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                </div>

            </div>
            <div className="text-center mt-8 pt-8 border-t border-white/10 opacity-50 text-xs">
                © {new Date().getFullYear()} RC Agency. Todos los derechos reservados.
            </div>
        </footer>
    );
}
