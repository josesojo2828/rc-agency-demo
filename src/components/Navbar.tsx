"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const windowHeight = window.innerHeight;
        // Sticky logic: Navbar becomes sticky after scrolling past initial viewport height (Hero)
        // For this design, let's keep it fixed at top but change style
        setIsSticky(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1">
                    RC<span className="text-primary">.</span>Agency
                </a>

                <div className="hidden md:flex gap-8 items-center font-medium">
                    <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
                    <a href="#equipo" className="hover:text-primary transition-colors">Equipo</a>
                    <a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a>
                    <a href="#contacto" className="btn btn-primary btn-sm rounded-full px-6">
                        Contacto
                    </a>
                </div>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <button className="btn btn-ghost btn-circle">
                        <Menu />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
