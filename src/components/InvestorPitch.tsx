import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  DollarSign,
  CheckCircle2,
  Award,
  Layers,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

export default function InvestorPitch({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-brand-bg min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-sans text-white selection:bg-brand-accent/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <button 
              onClick={onBack}
              className="text-brand-accent mb-6 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs"
            >
              <ArrowRight className="rotate-180" size={16} /> Volver al Informe
            </button>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-6">
              Presentación <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Inversores 2026</span>
            </h1>
            <p className="text-zinc-500 text-2xl font-light max-w-3xl leading-relaxed">
              Disrumpiendo la movilidad urbana mediante la democratización del espacio privado y tecnología IoT de vanguardia.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="px-6 py-3 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-mono text-xs uppercase tracking-widest mb-4">
              RONDA SEED ABIERTA
            </div>
            <div className="text-right">
              <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">OBJETIVO DE RONDA</div>
              <div className="text-4xl font-display font-black text-white">350k€</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {[
            {
              title: 'Eficiencia',
              value: '40%',
              label: 'Ahorro vs. Parking Público',
              icon: Zap,
              color: 'text-emerald-500'
            },
            {
              title: 'Escalabilidad',
              value: '14.1%',
              label: 'Crecimiento Anual del Mercado',
              icon: TrendingUp,
              color: 'text-brand-secondary'
            }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full group-hover:bg-brand-accent/10 transition-all"></div>
              <stat.icon className={`${stat.color} mb-8`} size={32} />
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">{stat.title}</h3>
              <div className="text-6xl font-display font-black text-white mb-2">{stat.value}</div>
              <p className="text-zinc-400 text-sm font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-black mb-8 tracking-tight">Nuestra Tesis de Inversión</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Activos Infrautilizados',
                    desc: 'El 65% de las plazas de garaje privadas en centros urbanos están vacías durante el horario laboral. Plazafy convierte este "espacio muerto" en ingresos recurrentes.'
                  },
                  {
                    title: 'Fricción Cero via IoT',
                    desc: 'Nuestra tecnología Plazafy Gate elimina la necesidad de llaves físicas, permitiendo una experiencia 100% digital y segura para ambas partes.'
                  },
                  {
                    title: 'Efectos de Red',
                    desc: 'A medida que aumenta la densidad de plazas, el valor para el conductor crece exponencialmente, creando una barrera competitiva difícil de replicar.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-brand-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 blur-[120px] rounded-full"></div>
              <div className="relative glass-panel p-12 border-white/10 overflow-hidden">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Layers className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Hoja de Ruta Estratégica</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { phase: 'Fase 1: Seed', task: 'Lanzamiento Madrid & Barcelona (Core)', date: 'Q2 2026', active: true },
                    { phase: 'Fase 2: Growth', task: 'Expansión a 5 ciudades principales', date: 'Q4 2026', active: false },
                    { phase: 'Fase 3: Scale', task: 'Apertura Mercado Internacional (Lisboa/Milán)', date: 'Q2 2027', active: false },
                  ].map((step, i) => (
                    <div key={i} className={`relative pl-8 border-l ${step.active ? 'border-brand-accent' : 'border-white/10'}`}>
                      <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${step.active ? 'bg-brand-accent shadow-lg shadow-brand-accent/50' : 'bg-zinc-800'}`}></div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">{step.phase} • {step.date}</div>
                      <div className={`text-lg font-bold ${step.active ? 'text-white' : 'text-zinc-600'}`}>{step.task}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="glass-panel p-16 border-white/10 text-center bg-gradient-to-br from-brand-accent/5 to-transparent">
          <div className="max-w-2xl mx-auto">
            <Award className="text-brand-accent mx-auto mb-8" size={48} />
            <h2 className="text-4xl font-display font-black mb-6">Únete a la Revolución de la Movilidad</h2>
            <p className="text-zinc-500 text-lg mb-12 font-light">
              Estamos construyendo la infraestructura de parking del futuro. Si compartes nuestra visión de ciudades más eficientes y sostenibles, hablemos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-3">
                Agendar Reunión <ArrowRight size={22} />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                Descargar Presentación (PDF)
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
