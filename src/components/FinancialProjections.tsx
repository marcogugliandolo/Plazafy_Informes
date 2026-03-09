import React from 'react';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  DollarSign, 
  ArrowUpRight, 
  ArrowRight,
  PieChart as PieChartIcon,
  ShieldCheck,
  Zap,
  Globe,
  Users
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'motion/react';

const revenueData = [
  { year: '2026', rev: 0.05, ebitda: -0.3 },
  { year: '2027', rev: 0.25, ebitda: -0.4 },
  { year: '2028', rev: 0.8, ebitda: -0.2 },
  { year: '2029', rev: 2.5, ebitda: 0.2 },
  { year: '2030', rev: 6.0, ebitda: 1.5 },
];

const allocationData = [
  { name: 'I+D & Producto', value: 40, color: '#8b5cf6' },
  { name: 'Marketing & Sales', value: 35, color: '#3b82f6' },
  { name: 'Operaciones', value: 15, color: '#10b981' },
  { name: 'Legal & Admin', value: 10, color: '#f59e0b' },
];

export default function FinancialProjections({ onBack, onBook }: { onBack: () => void, onBook?: () => void }) {
  return (
    <div className="bg-brand-bg min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-sans text-white selection:bg-brand-accent/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <button 
              onClick={onBack}
              className="text-brand-accent mb-6 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs print:hidden"
            >
              <ArrowRight className="rotate-180" size={16} /> Volver al Informe
            </button>
            <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-none mb-4">
              Proyecciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Financieras 2026-2030</span>
            </h1>
            <p className="text-zinc-500 text-xl font-light max-w-2xl">
              Modelo de escalabilidad basado en penetración de mercado urbano y optimización de rentabilidad por activo IoT.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2">VALORACIÓN PRE-SEED</div>
            <div className="text-4xl font-display font-black text-white">1.2M€</div>
          </div>
        </header>

        {/* Modelo de Ingresos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Modelo de Ingresos Híbrido</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-2xl rounded-full group-hover:bg-brand-accent/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <PieChartIcon className="text-brand-accent" size={24} />
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Marketplace</div>
              <div className="text-3xl font-display font-bold text-white mb-3">15% <span className="text-lg text-zinc-500 font-normal">/ reserva</span></div>
              <p className="text-sm text-zinc-400 leading-relaxed">Comisión estándar por transacción. Cubre pasarela de pago, servidores y genera el margen neto principal.</p>
            </div>

            <div className="glass-panel p-8 border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 blur-2xl rounded-full group-hover:bg-brand-secondary/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <ShieldCheck className="text-brand-secondary" size={24} />
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">SaaS Plazafy Gate</div>
              <div className="text-3xl font-display font-bold text-white mb-3">12€ <span className="text-lg text-zinc-500 font-normal">/ mes</span></div>
              <p className="text-sm text-zinc-400 leading-relaxed">Cuota fija por puerta de garaje. Genera MRR (Ingreso Recurrente Mensual) asegurando estabilidad financiera.</p>
            </div>

            <div className="glass-panel p-8 border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Globe className="text-emerald-500" size={24} />
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">API Enterprise</div>
              <div className="text-3xl font-display font-bold text-white mb-3">B2B <span className="text-lg text-zinc-500 font-normal">Tarifa uso</span></div>
              <p className="text-sm text-zinc-400 leading-relaxed">Integración directa para flotas (reparto, rent-a-car) para apertura automática desde sus propias apps.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 glass-panel p-10 border-white/10">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-1">Crecimiento de Ingresos</h3>
                <p className="text-sm text-zinc-500 font-light">Millones de Euros (€M)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Ingresos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-secondary"></div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">EBITDA</span>
                </div>
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#71717a', fontSize: 12, fontWeight: 600}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#71717a', fontSize: 12}}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #ffffff10', borderRadius: '16px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="rev" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                  <Area type="monotone" dataKey="ebitda" stroke="#3b82f6" strokeWidth={4} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-panel p-8 border-white/10 bg-gradient-to-br from-brand-accent/5 to-transparent">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">
                <Target className="text-brand-accent" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Break-even</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6">
                Proyectado para el <span className="text-white font-bold">Q3 2029</span> tras alcanzar las 8.000 plazas activas en el centro de Madrid y Barcelona.
              </p>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-[45%]"></div>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-500 text-right uppercase tracking-widest">45% del objetivo</div>
            </div>

            <div className="glass-panel p-8 border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <DollarSign className="text-emerald-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Rentabilidad por Usuario</h4>
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 text-sm">Valor por Usuario (LTV)</span>
                  <span className="text-white font-bold">95€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 text-sm">Coste Adquisición (CAC)</span>
                  <span className="text-white font-bold">25€</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-500 text-sm">Ratio Rentabilidad (LTV/CAC)</span>
                  <span className="text-emerald-500 font-black">3.8x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-10 border-white/10">
            <h3 className="text-2xl font-bold mb-12">Uso de Fondos (Ronda Seed)</h3>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-64 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-4">
                {allocationData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-zinc-400">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 border-white/10 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-display font-black mb-6">¿Listo para invertir?</h3>
              <p className="text-zinc-500 mb-10 max-w-md mx-auto font-light">
                Solicita la presentación completa y el modelo financiero detallado para profundizar en nuestra tesis de inversión.
              </p>
              <button 
                onClick={onBook}
                className="px-10 py-5 bg-white text-brand-bg rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto print:hidden w-fit"
              >
                Agendar Reunión <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
