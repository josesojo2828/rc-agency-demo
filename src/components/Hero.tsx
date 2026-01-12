"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-base-100 flex items-center justify-center">
            {/* Background with abstract shapes/gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="badge badge-outline badge-lg mb-6 gap-2 py-4 px-6 text-sm uppercase tracking-widest font-bold border-primary text-primary">
                        <Sparkles className="w-4 h-4" /> Soluciones Digitales de Élite
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                        Creamos el <span className="text-gradient">Futuro</span> <br />
                        de tu Empresa
                    </h1>

                    <p className="text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto mb-12 leading-relaxed">
                        RC Agency transforma ideas en experiencias digitales impactantes.
                        Desarrollo, Diseño e Inteligencia Artificial al servicio de tu crecimiento.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="btn btn-primary btn-lg rounded-full px-10 shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                            Ver Nuestros Servicios
                        </button>
                        <button className="btn btn-outline btn-lg rounded-full px-10 hover:bg-base-content/5">
                            Hablemos
                        </button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-base-content/50"
            >
                <ArrowDown className="w-8 h-8" />
            </motion.div>
        </div>
    );
}
