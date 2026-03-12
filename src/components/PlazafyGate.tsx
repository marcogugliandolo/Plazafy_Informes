import React from 'react';
import { ShieldCheck, Smartphone, Wifi, Key, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PlazafyGate({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-brand-bg min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="text-brand-accent mb-12 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs"
        >
          <ArrowRight className="rotate-180" size={16} /> Volver al Inicio
        </button>

        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8">
            Plazafy <span className="text-brand-accent">Gate</span>
          </h1>
          <p className="text-2xl text-zinc-400 font-light max-w-3xl">
            La capa de hardware IoT que transforma cualquier garaje tradicional en un nodo de acceso inteligente, seguro y rentable.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">Seguridad y Modernización</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Plazafy Gate no solo facilita el alquiler de plazas; moderniza la seguridad de todo el edificio. Instalamos un controlador IoT en el motor de la puerta existente, permitiendo el acceso mediante llaves digitales encriptadas desde el smartphone.
            </p>
            <ul className="space-y-4">
              {[
                'Control de acceso auditable en tiempo real.',
                'Eliminación de mandos físicos (costes y pérdidas).',
                'Instalación no intrusiva, compatible con el 99% de motores.',
                'Encriptación de grado bancario para cada apertura.'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <ShieldCheck className="text-brand-accent" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-8 border-white/10 flex items-center justify-center bg-white/5">
             {/* Placeholder para imagen del dispositivo */}
             <div className="text-center space-y-4">
                <Smartphone size={64} className="text-brand-accent mx-auto" />
                <div className="text-xl font-bold">Dispositivo IoT Plazafy</div>
                <div className="text-zinc-500 text-sm">Hardware en fase de prototipado</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Key, title: 'Acceso Digital', desc: 'Apertura mediante App o Bluetooth sin necesidad de mandos.' },
            { icon: Wifi, title: 'Conectividad 4G/IoT', desc: 'Independiente de la red Wi-Fi del edificio para máxima fiabilidad.' },
            { icon: Lock, title: 'Auditoría Total', desc: 'Registro histórico de accesos para mayor seguridad comunitaria.' },
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-all">
              <feature.icon className="text-brand-accent mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
