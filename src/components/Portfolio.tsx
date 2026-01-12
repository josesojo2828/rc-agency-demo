"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Admin Dashboard",
        category: "Management Interface",
        image: "/portfolio/admin_dashboard.png",
        description: "Dashboard administrativo integral para gestión de usuarios, analíticas y control de plataforma.",
        tags: ["Next.js", "Tailwind", "Charts", "Admin"],
        link: "https://rc-agency-demo-admin-dashboard.vercel.app/"
    },
    {
        id: 2,
        title: "EcoShop Function",
        category: "E-commerce Fullstack",
        image: "/portfolio/ecommerce.png",
        description: "Plataforma de comercio electrónico de alto rendimiento con dashboard de análisis en tiempo real.",
        tags: ["React", "Typescript", "Tailwind", "Dashboard"],
        link: "https://rc-agency-demo-ecommerce-function.vercel.app/"
    },
    {
        id: 3,
        title: "Bloom & Willow",
        category: "Niche Retail",
        image: "/portfolio/flower_shop.png",
        description: "Experiencia de compra elegante y minimalista para boutique floral.",
        tags: ["E-commerce", "Minimalist", "UX/UI"],
        link: "https://rc-agency-demo-flower-shop.vercel.app/"
    },
    {
        id: 4,
        title: "AppVibe Landing",
        category: "Mobile App Marketing",
        image: "/portfolio/mobile_app.png",
        description: "Landing page de alta conversión para aplicaciones móviles con presentacion 3D.",
        tags: ["Mobile", "Marketing", "3D Assets"],
        link: "https://rc-agency-demo-mobile-app-presentat.vercel.app/"
    },
    {
        id: 5,
        title: "NutriLife Portfolio",
        category: "Health & Wellness",
        image: "/portfolio/nutritionist.png",
        description: "Sitio web personal para nutricionistas con múltiples temas visuales y gestión de contenido.",
        tags: ["Vite", "DaisyUI", "Personal Brand"],
        link: "https://rc-agency-demo-nutritionist-portfol.vercel.app/v1"
    },
    {
        id: 6,
        title: "StreamX Platform",
        category: "Streaming Service",
        image: "/portfolio/streaming.png",
        description: "Interfaz cinemática inmersiva para consumo de contenido multimedia a gran escala.",
        tags: ["Next.js", "Framer Motion", "Video Streaming"],
        link: "https://rc-agency-demo-streaming-web.vercel.app/"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-base-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Proyectos Destacados</h2>
                        <p className="text-xl text-base-content/70">
                            Una muestra de nuestra capacidad técnica y creativa. Transformamos ideas complejas en productos digitales de clase mundial.
                        </p>
                    </div>
                    <button className="btn btn-outline gap-2 group">
                        Ver Todo el Portafolio <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group card bg-base-200/50 hover:bg-base-200 border border-base-content/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer block"
                        >
                            <figure className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="text-white w-10 h-10" />
                                </div>
                            </figure>
                            <div className="card-body">
                                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{project.category}</div>
                                <h3 className="card-title text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-base-content/70 text-sm mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="badge badge-neutral text-xs py-3">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Call to action for Portfolio */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary bg-[200%_auto] animate-gradient">
                        <div className="bg-base-100 rounded-full px-8 py-3">
                            <span className="font-bold">¿Tienes un proyecto en mente? </span>
                            <a href="#contacto" className="text-primary font-bold hover:underline ml-1">Iniciemos la conversación</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
