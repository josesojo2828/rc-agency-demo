"use client";

import { Code, Monitor, BarChart, Brain, Share2, Palette, Film } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    { icon: <Code size={32} />, title: "Desarrollo de Software", desc: "Soluciones a medida, robustas y escalables." },
    { icon: <Monitor size={32} />, title: "Diseño Web", desc: "Experiencias visuales que cautivan y convierten." },
    { icon: <BarChart size={32} />, title: "Análisis de Datos", desc: "Transformamos datos en decisiones estratégicas." },
    { icon: <Brain size={32} />, title: "Inteligencia Artificial", desc: "Automatización e innovación para tu negocio." },
    { icon: <Share2 size={32} />, title: "Marketing Digital", desc: "Estrategias para dominar el mercado digital." },
    { icon: <Palette size={32} />, title: "Diseño Gráfico", desc: "Identidad visual que comunica tu esencia." },
    { icon: <Film size={32} />, title: "Edición de Video", desc: "Narrativa audiovisual de alto impacto." },
];

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-base-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Nuestros Servicios</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Dominamos todas las áreas de la tecnología y creatividad moderna para ofrecerte resultados excepcionales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-base-content/5"
                        >
                            <div className="card-body items-center text-center">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="card-title font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-base-content/70">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
