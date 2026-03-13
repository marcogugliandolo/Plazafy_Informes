import React from 'react';
import { ArrowRight, Check, X, Swords, Target, ShieldCheck, Zap, Crosshair, AlertTriangle, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const radarData = [
  { subject: 'Automatización (IoT)', Plazafy: 95, Sector: 40 },
  { subject: 'Escalabilidad', Plazafy: 90, Sector: 55 },
  { subject: 'Tamaño Inventario', Plazafy: 100, Sector: 35 },
  { subject: 'Experiencia (UX)', Plazafy: 90, Sector: 60 },
  { subject: 'Márgenes', Plazafy: 85, Sector: 45 },
];

export default function CompetitorAnalysis({ onBack }: { onBack: () => void }) {
  const competitors = [
    {
      name: 'Plazafy',
      type: 'IoT P2P Marketplace',
      p2p: true,
      iot: true,
      dynamicPricing: true,
      insurance: true,
      ux: 'Alta (Sin fricción)',
      color: 'bg-brand-accent/20 text-white',
      border: 'border-brand-accent',
      highlight: true
    },
    {
      name: 'ElParking / Telpark',
      type: 'Agregador Comercial',
      p2p: false,
      iot: true,
      dynamicPricing: false,
      insurance: false,
      ux: 'Media',
      color: 'bg-white/5 text-zinc-300',
      border: 'border-white/10',
      highlight: false
    },
    {
      name: 'Parkfy',
      type: 'P2P Básico',
      p2p: true,
      iot: false,
      dynamicPricing: false,
      insurance: false,
      ux: 'Baja (Física)',
      color: 'bg-white/5 text-zinc-300',
      border: 'border-white/10',
      highlight: false
    },
    {
      name: 'Idealista',
      type: 'Clasificados',
      p2p: true,
      iot: false,
      dynamicPricing: false,
      insurance: false,
      ux: 'Muy Baja',
      color: 'bg-white/5 text-zinc-300',
      border: 'border-white/10',
      highlight: false
    }
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) return <Check className="text-emerald-500 mx-auto" size={24} />;
    if (value === false) return <X className="text-red-500/30 mx-auto" size={24} />;
    return <span className="text-sm font-medium text-zinc-300">{value}</span>;
  };

  return (
    <div className="bg-brand-bg min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-24 font-sans text-white selection:bg-brand-accent/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 sm:mb-16">
          <button 
            onClick={onBack}
            className="text-brand-accent mb-6 sm:mb-8 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs print:hidden"
          >
            <ArrowRight className="rotate-180" size={16} /> Volver al Inicio
          </button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
              <Swords className="text-brand-accent" size={24} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter text-white">
                Análisis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Competitivo</span>
              </h1>
            </div>
          </div>
          <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-3xl leading-relaxed">
            Evaluación estratégica del ecosistema de movilidad. Demostramos cómo la integración de hardware (IoT) en un modelo P2P crea un monopolio local y barreras de entrada insalvables para los agregadores tradicionales.
          </p>
        </header>

        {/* Mapa de Posicionamiento (2x2) y Radar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* 2x2 Matrix */}
          <div className="glass-panel p-4 sm:p-8 border-white/10 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 sm:mb-8">Mapa de Posicionamiento</h3>
            <div className="flex-1 flex flex-col items-center justify-center w-full mt-2 sm:mt-4">
              {/* Y Axis Top */}
              <div className="text-[10px] sm:text-xs font-bold text-zinc-400 mb-2 sm:mb-3 uppercase tracking-widest">Oferta Privada (P2P)</div>
              
              <div className="flex w-full items-center justify-center">
                {/* X Axis Left */}
                <div className="text-[10px] sm:text-xs font-bold text-zinc-400 -rotate-90 uppercase tracking-widest w-6 sm:w-8 text-center whitespace-nowrap -ml-6 sm:-ml-8">Manual / Fricción</div>
                
                {/* Grid */}
                <div className="w-full max-w-[400px] aspect-square grid grid-cols-2 grid-rows-2 gap-1 sm:gap-1.5 bg-white/10 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl">
                  {/* Top Left */}
                  <div className="bg-[#12121a] rounded-tl-lg sm:rounded-tl-xl relative p-2 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3">
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[9px] text-zinc-600 uppercase font-bold">Mercado Informal</span>
                    <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 border border-white/10 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-zinc-300">Parkfy</div>
                    <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 border border-white/10 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-zinc-300">Idealista</div>
                  </div>
                  {/* Top Right */}
                  <div className="bg-brand-accent/10 rounded-tr-lg sm:rounded-tr-xl relative p-2 sm:p-4 flex flex-col items-center justify-center">
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[8px] sm:text-[9px] text-brand-accent uppercase font-bold">Océano Azul</span>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-accent rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-brand-accent/50 flex items-center gap-1.5 sm:gap-2 animate-pulse">
                      <Zap size={14} className="sm:w-4 sm:h-4" /> Plazafy
                    </div>
                  </div>
                  {/* Bottom Left */}
                  <div className="bg-[#12121a] rounded-bl-lg sm:rounded-bl-xl relative p-2 sm:p-4 flex flex-col items-center justify-center">
                    <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[8px] sm:text-[9px] text-zinc-600 uppercase font-bold">Obsoleto</span>
                    <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 border border-white/10 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-zinc-500 text-center">Parkings<br/>Tradicionales</div>
                  </div>
                  {/* Bottom Right */}
                  <div className="bg-[#12121a] rounded-br-lg sm:rounded-br-xl relative p-2 sm:p-4 flex flex-col items-center justify-center">
                    <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-[8px] sm:text-[9px] text-zinc-600 uppercase font-bold">Mercado Saturado</span>
                    <div className="px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-blue-400 text-center">ElParking /<br className="sm:hidden"/> Telpark</div>
                  </div>
                </div>

                {/* X Axis Right */}
                <div className="text-[10px] sm:text-xs font-bold text-zinc-400 rotate-90 uppercase tracking-widest w-6 sm:w-8 text-center whitespace-nowrap -mr-6 sm:-mr-8">Automático (IoT)</div>
              </div>
              
              {/* Y Axis Bottom */}
              <div className="text-[10px] sm:text-xs font-bold text-zinc-400 mt-2 sm:mt-3 uppercase tracking-widest">Oferta Comercial (B2C)</div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="glass-panel p-4 sm:p-8 border-white/10 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">Ventaja Multidimensional</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-8">Comparativa de capacidades core frente a la media del sector.</p>
            <div className="flex-1 min-h-[250px] sm:min-h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 10, fontFamily: 'monospace' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Plazafy" dataKey="Plazafy" stroke="#8b5cf6" strokeWidth={2} fill="#8b5cf6" fillOpacity={0.4} />
                  <Radar name="Media del Sector" dataKey="Sector" stroke="#52525b" strokeWidth={2} fill="#52525b" fillOpacity={0.2} />
                  <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #ffffff10', borderRadius: '12px', fontSize: '12px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Análisis Profundo de Rivales */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-6 sm:mb-8">Análisis de Vulnerabilidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/2 border border-white/5 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 hover:bg-white/5 transition-colors">
              <div className="text-lg sm:text-xl font-bold text-white mb-1">Agregadores B2C</div>
              <div className="text-xs sm:text-sm text-blue-400 mb-4 sm:mb-6 font-mono">(ElParking, Telpark)</div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-500 text-xs sm:text-sm font-bold mb-1"><Check size={16}/> Fortaleza</div>
                  <p className="text-zinc-400 text-xs sm:text-sm">Gran base de usuarios y tecnología integrada en parkings públicos.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold mb-1"><AlertTriangle size={16}/> Vulnerabilidad</div>
                  <p className="text-zinc-400 text-xs sm:text-sm">No pueden acceder al 80% del espacio urbano (garajes privados). Su crecimiento está limitado a acuerdos corporativos lentos.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/2 border border-white/5 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 hover:bg-white/5 transition-colors">
              <div className="text-lg sm:text-xl font-bold text-white mb-1">P2P Tradicional</div>
              <div className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6 font-mono">(Parkfy, Parclick P2P)</div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-500 text-xs sm:text-sm font-bold mb-1"><Check size={16}/> Fortaleza</div>
                  <p className="text-zinc-400 text-xs sm:text-sm">Acceso al inventario privado y precios más bajos.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm font-bold mb-1"><AlertTriangle size={16}/> Vulnerabilidad</div>
                  <p className="text-zinc-400 text-xs sm:text-sm">Fricción extrema. Quedar físicamente para entregar un mando a distancia destruye la retención y hace imposible el alquiler por horas.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full"></div>
              <div className="text-lg sm:text-xl font-bold text-white mb-1 relative z-10">La Solución Plazafy</div>
              <div className="text-xs sm:text-sm text-brand-accent mb-4 sm:mb-6 font-mono relative z-10">(IoT + P2P)</div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed relative z-10">
                Plazafy une lo mejor de ambos mundos. Desbloquea el inventario masivo privado (P2P) pero con la experiencia automatizada y sin fricción de un parking público (IoT). Esto permite, por primera vez, el <strong className="text-white">alquiler por horas en garajes privados</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Matriz Competitiva (Tabla) */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-6 sm:mb-8">Comparativa de Funcionalidades</h3>
          <div className="glass-panel border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-4 sm:p-6 border-b border-white/10 bg-white/2 text-zinc-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest w-1/4">Característica</th>
                    {competitors.map((comp, i) => (
                      <th key={i} className={`p-4 sm:p-6 border-b border-white/10 text-center ${comp.highlight ? 'bg-brand-accent/10 border-b-brand-accent' : 'bg-white/2'}`}>
                        <div className={`text-sm sm:text-lg font-display font-bold ${comp.highlight ? 'text-brand-accent' : 'text-white'}`}>{comp.name}</div>
                        <div className="text-[8px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">{comp.type}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 sm:p-6 border-b border-white/5 text-xs sm:text-sm font-bold text-white">Inventario Privado (P2P)</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`p-4 sm:p-6 border-b border-white/5 text-center ${comp.highlight ? 'bg-brand-accent/5' : ''}`}>
                        {renderIcon(comp.p2p)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 border-b border-white/5 text-xs sm:text-sm font-bold text-white">Apertura con Smartphone (IoT)</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`p-4 sm:p-6 border-b border-white/5 text-center ${comp.highlight ? 'bg-brand-accent/5' : ''}`}>
                        {renderIcon(comp.iot)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 border-b border-white/5 text-xs sm:text-sm font-bold text-white">Precios Dinámicos (IA)</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`p-4 sm:p-6 border-b border-white/5 text-center ${comp.highlight ? 'bg-brand-accent/5' : ''}`}>
                        {renderIcon(comp.dynamicPricing)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 border-b border-white/5 text-xs sm:text-sm font-bold text-white">Seguro a Terceros</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`p-4 sm:p-6 border-b border-white/5 text-center ${comp.highlight ? 'bg-brand-accent/5' : ''}`}>
                        {renderIcon(comp.insurance)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-white">Fricción de Usuario</td>
                    {competitors.map((comp, i) => (
                      <td key={i} className={`p-4 sm:p-6 text-center ${comp.highlight ? 'bg-brand-accent/5' : ''}`}>
                        {renderIcon(comp.ux)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Ventajas Competitivas Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/20 flex items-center justify-center mb-4 sm:mb-6">
              <Target className="text-brand-accent" size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">El "Foso Defensivo" (Moat)</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              La competencia actual se divide en dos extremos: plataformas muy tecnológicas pero limitadas a parkings públicos, y plataformas P2P sin tecnología donde los usuarios tienen que quedar físicamente para entregarse las llaves. 
              <br /><br />
              <span className="text-white font-bold">El hardware IoT es nuestro foso defensivo.</span> Al resolver el problema de la entrega de llaves, desbloqueamos el mercado masivo de particulares que antes no alquilaban por falta de tiempo o conveniencia.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/2 border border-white/10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6">
              <ShieldCheck className="text-emerald-500" size={20} />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Barreras de Entrada</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Cpu className="text-emerald-500 shrink-0 mt-0.5 sm:mt-1" size={16} />
                <span className="text-zinc-400 text-xs sm:text-sm"><strong className="text-white">Hardware Lock-in:</strong> Una vez que una comunidad instala Plazafy Gate, el coste de cambiar a un competidor asegura una retención casi del 100%.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <TrendingUp className="text-emerald-500 shrink-0 mt-0.5 sm:mt-1" size={16} />
                <span className="text-zinc-400 text-xs sm:text-sm"><strong className="text-white">Efecto Red Local:</strong> La densidad de plazas en un barrio específico crea un monopolio natural. El primero en dominar un código postal, se lo queda.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 sm:mt-1" size={16} />
                <span className="text-zinc-400 text-xs sm:text-sm"><strong className="text-white">Confianza y Seguros:</strong> La integración de pólizas de responsabilidad civil automáticas genera una confianza difícil de replicar por actores informales.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

