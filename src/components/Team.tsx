"use client";

import { motion } from "framer-motion";

const team = [
    { name: "Rafael Ceballos", role: "Ing. Informática", spec: "Especialista en Marketing y Diseño Gráfico", img: "https://i.pravatar.cc/300?img=11" },
    { name: "Jose Sojo", role: "Ing. Software", spec: "Desarrollo Web, Sistemas, Data & AI", img: "https://i.pravatar.cc/300?img=12" },
    { name: "Estefany", role: "Diseño Gráfico", spec: "Redacción, Traducción y Transcripción", img: "https://i.pravatar.cc/300?img=9" },
    { name: "Hector Correo", role: "Ing. Informática", spec: "Especialista en Diseño Web y WordPress", img: "https://i.pravatar.cc/300?img=3" },
    { name: "Genderson Sevilla", role: "Ing. Informática", spec: "Desarrollo Móvil y Streaming", img: "https://i.pravatar.cc/300?img=60" },
    { name: "Julian Sojo", role: "Ing. Informática", spec: "Analista de Datos", img: "https://i.pravatar.cc/300?img=8" },
];

export default function Team() {
    return (
        <section id="equipo" className="py-24 bg-base-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Conoce al Equipo</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Mentes brillantes unidas por la pasión de crear tecnología de vanguardia.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {member.spec}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
