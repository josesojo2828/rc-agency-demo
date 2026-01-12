"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        { name: "Maria Gonzalez", role: "CEO TechStart", text: "RC Agency transformó completamente nuestra presencia digital. El nivel de detalle es increíble." },
        { name: "Carlos Perez", role: "Director Marketing", text: "La integración de IA en nuestros procesos que implementaron nos ahorró un 40% de costos." },
        { name: "Ana Rodriguez", role: "Fundadora E-Shop", text: "El diseño de nuestra tienda es espectacular, las ventas aumentaron gracias a la UX mejorada." },
        { name: "Pedro Sanchez", role: "CTO FinTech", text: "Profesionalismo puro. Entendieron nuestros requerimientos complejos y los ejecutaron a la perfección." },
        { name: "Laura Diaz", role: "Gerente Operaciones", text: "El equipo es super receptivo y creativo. Solucionaron problemas que otros no pudieron." },
    ];

    return (
        <section id="testimonios" className="py-24 bg-base-200 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-4xl font-black text-center">Lo que dicen de nosotros</h2>
            </div>

            {/* Marquee Effect */}
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="card w-96 bg-base-100 shadow-xl border border-base-content/5 flex-shrink-0 whitespace-normal">
                            <div className="card-body">
                                <div className="flex gap-1 text-warning mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                </div>
                                <p className="italic text-base-content/80 mb-6">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-10">
                                            <span className="text-xs">{t.name.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{t.name}</h4>
                                        <p className="text-xs text-base-content/50">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
