import React from 'react';
import { 
  Users, 
  Zap, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  BarChart4,
  Building2,
  Car,
  Leaf,
  TrendingUp,
  Clock
} from 'lucide-react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img 
    src="https://plazafy.es/logo.png" 
    alt="Plazafy Logo" 
    className={className}
    referrerPolicy="no-referrer"
  />
);

export default function ViabilityAssessment({ 
  onPresentToInvestors, 
  onViewProjections 
}: { 
  onPresentToInvestors?: () => void; 
  onViewProjections?: () => void; 
}) {
  return (
    <div className="bg-brand-bg min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-sans text-white selection:bg-brand-accent/30">
      <div id="viability-report" className="max-w-5xl mx-auto glass-panel overflow-hidden border-white/10 shadow-2xl">
        {/* Header / Title Section */}
        <header className="bg-white/2 p-12 md:p-16 border-b border-white/10 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full"></div>
          
            <div className="mb-16 relative z-10">
              <Logo className="h-32 md:h-48 lg:h-64 w-auto object-contain" />
            </div>
          
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-6xl md:text-7xl mb-8 font-display font-black tracking-tighter leading-[0.85] text-white">
              Viabilidad de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Mercado y Producto</span>
            </h1>
            <p className="text-zinc-400 text-xl font-light leading-relaxed">
              Análisis exhaustivo del ecosistema de Smart Parking P2P. Datos validados sobre demanda urbana, impacto ambiental y proyecciones de escalabilidad para el periodo 2026-2030.
            </p>
          </div>
        </header>

        <div className="p-12 md:p-16 space-y-24">
          {/* Section 1: The Problem (Real Data) */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <Clock className="text-red-500" size={24} />
              </div>
              <h2 className="text-4xl font-display font-black tracking-tight text-white">El Problema Real</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  En ciudades como Madrid o Barcelona, un conductor promedio pierde <span className="text-white font-bold">hasta 90 horas al año</span> buscando aparcamiento. Este fenómeno, conocido técnicamente como "tráfico de agitación", es responsable de una ineficiencia masiva en la movilidad urbana.
                </p>
                <div className="p-6 rounded-3xl bg-white/2 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="text-emerald-500" size={20} />
                    <span className="text-sm font-bold text-emerald-500 uppercase tracking-wider">Impacto Ambiental</span>
                  </div>
                  <p className="text-sm text-zinc-500 font-light">
                    El 30% del tráfico urbano es generado por vehículos buscando parking, emitiendo más de <span className="text-white font-bold">1.3kg de CO2</span> adicionales por cada 20 minutos de búsqueda.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-8 rounded-[2rem] bg-white/2 border border-white/10">
                  <div className="text-5xl font-display font-black text-white mb-2">20 min</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">Tiempo medio de búsqueda en hora punta</div>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/2 border border-white/10">
                  <div className="text-5xl font-display font-black text-white mb-2">850€</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">Coste anual estimado por conductor en combustible y tiempo</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Market Opportunity */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center">
                <TrendingUp className="text-brand-accent" size={24} />
              </div>
              <h2 className="text-4xl font-display font-black tracking-tight text-white">Oportunidad de Mercado</h2>
            </div>
            <div className="bg-brand-accent/2 border border-brand-accent/10 p-12 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 blur-[120px] rounded-full"></div>
              <div className="relative z-10">
                <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12 max-w-2xl">
                  El mercado global de Aparcamiento Inteligente está valorado en <span className="text-white font-bold">6.300 M€ (2023)</span> y se proyecta que alcance los <span className="text-brand-accent font-black">15.800 M€ para 2030</span>, con un crecimiento anual del 14.1%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                  <div>
                    <div className="text-4xl font-display font-black text-white mb-1">14.1%</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Crecimiento Anual (CAGR)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-white mb-1">65%</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Plazas privadas infrautilizadas</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-white mb-1">15%</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Comisión media por transacción</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Target Segments */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center">
                <Users className="text-brand-secondary" size={24} />
              </div>
              <h2 className="text-4xl font-display font-black tracking-tight text-white">Segmentos de Usuario</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'El Viajero Diario', 
                  icon: Car, 
                  desc: 'Profesionales que viajan a centros urbanos diariamente y requieren una plaza fija garantizada de 9:00 a 18:00.' 
                },
                { 
                  title: 'El Anfitrión', 
                  icon: Building2, 
                  desc: 'Propietarios de viviendas con garaje que no usan su plaza durante el día y buscan ingresos extra sin esfuerzo.' 
                },
                { 
                  title: 'Gestores de Activos', 
                  icon: Globe, 
                  desc: 'Empresas inmobiliarias con parkings en edificios de oficinas que quieren optimizar la rentabilidad de sus activos.' 
                }
              ].map((target, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-brand-accent/40 transition-all group shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                    <target.icon className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{target.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed text-sm">{target.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Strategic USP */}
          <section className="border-t border-white/10 pt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <ShieldCheck className="text-emerald-500" size={24} />
              </div>
              <h2 className="text-4xl font-display font-black tracking-tight text-white">Ventaja Competitiva</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                <h3 className="text-5xl font-display font-black leading-[0.9] text-white">Concepto IoT y Alquiler entre Particulares</h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  A diferencia de los agregadores tradicionales, Plazafy proyecta no solo listar plazas, sino <span className="text-white font-bold">habilitarlas digitalmente</span>. Nuestra propuesta de hardware "Plazafy Gate" (en fase conceptual) permitiría el acceso seguro vía Bluetooth/4G, eliminando la fricción de la entrega de llaves físicas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-zinc-400">
                    <Zap size={14} className="text-brand-accent" /> ACCESO SIN LLAVES
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-zinc-400">
                    <ShieldCheck size={14} className="text-emerald-500" /> PAGOS SEGUROS
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 border border-white/10 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group shadow-inner">
                  <div className="text-6xl font-display font-black mb-4 group-hover:scale-110 transition-transform text-white">40%</div>
                  <p className="text-sm text-zinc-500 font-light">Ahorro medio para el conductor frente a parkings públicos tradicionales</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer / Conclusion */}
        <footer className="bg-white/2 p-16 text-center border-t border-white/10 relative">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-display font-bold mb-6 text-white">Conclusión de Viabilidad</h4>
            <p className="text-zinc-400 text-lg mb-12 font-light">
              Plazafy presenta una oportunidad única de disrupción en un mercado fragmentado, apalancando la economía colaborativa y el hardware IoT para resolver un problema estructural de las ciudades modernas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onPresentToInvestors}
                className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-3"
              >
                Presentar a Inversores <ArrowRight size={22} />
              </button>
              <button 
                onClick={onViewProjections}
                className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
              >
                Ver Proyecciones Financieras
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
