"use client";

import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="py-24 bg-base-100">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">

                {/* Info Text */}
                <div>
                    <h2 className="text-4xl font-black mb-6">Empecemos un Proyecto</h2>
                    <p className="text-xl text-base-content/70 mb-12">
                        ¿Listo para llevar tu negocio al siguiente nivel? Cuéntanos tu idea y nosotros la haremos realidad.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-base-content/70">hola@rcagency.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="font-bold">Teléfono</h4>
                                <p className="text-base-content/70">+58 123 456 7890</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="font-bold">Oficina</h4>
                                <p className="text-base-content/70">Caracas, Venezuela</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="card bg-base-200 shadow-xl p-8">
                    <form className="space-y-6">
                        <div className="form-control">
                            <label className="label font-bold">Nombre</label>
                            <input type="text" placeholder="Tu nombre" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold">Email</label>
                            <input type="email" placeholder="tu@email.com" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold">Asunto</label>
                            <input type="text" placeholder="Interesado en..." className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label font-bold">Mensaje</label>
                            <textarea className="textarea textarea-bordered h-32" placeholder="Cuéntanos más..."></textarea>
                        </div>

                        <button className="btn btn-primary w-full gap-2">
                            <Send size={18} /> Enviar Mensaje
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
