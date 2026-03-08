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
  { year: '2026', rev: 0.45, ebitda: -0.2 },
  { year: '2027', rev: 1.8, ebitda: 0.15 },
  { year: '2028', rev: 5.2, ebitda: 1.2 },
  { year: '2029', rev: 12.5, ebitda: 3.8 },
  { year: '2030', rev: 28.4, ebitda: 9.6 },
];

const allocationData = [
  { name: 'I+D & Producto', value: 40, color: '#8b5cf6' },
  { name: 'Marketing & Sales', value: 35, color: '#3b82f6' },
  { name: 'Operaciones', value: 15, color: '#10b981' },
  { name: 'Legal & Admin', value: 10, color: '#f59e0b' },
];

export default function FinancialProjections({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-brand-bg min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-sans text-white selection:bg-brand-accent/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <button 
              onClick={onBack}
              className="text-brand-accent mb-6 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs"
            >
              <ArrowRight className="rotate-180" size={16} /> Volver al Informe
            </button>
            <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-none mb-4">
              Proyecciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Financieras 2026-2030</span>
            </h1>
            <p className="text-zinc-500 text-xl font-light max-w-2xl">
              Modelo de escalabilidad basado en penetración de mercado urbano y optimización de yield por activo IoT.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2">VALORACIÓN PRE-SEED</div>
            <div className="text-4xl font-display font-black text-white">4.5M€</div>
          </div>
        </header>

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
                Proyectado para el <span className="text-white font-bold">Q3 2027</span> tras alcanzar las 15.000 plazas activas en el core de Madrid.
              </p>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-[65%]"></div>
              </div>
              <div className="mt-2 text-[10px] font-mono text-zinc-500 text-right uppercase tracking-widest">65% del objetivo</div>
            </div>

            <div className="glass-panel p-8 border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <DollarSign className="text-emerald-500" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2">Unit Economics</h4>
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 text-sm">LTV</span>
                  <span className="text-white font-bold">840€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-zinc-500 text-sm">CAC</span>
                  <span className="text-white font-bold">65€</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-500 text-sm">LTV/CAC Ratio</span>
                  <span className="text-emerald-500 font-black">12.9x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-10 border-white/10">
            <h3 className="text-2xl font-bold mb-12">Uso de Fondos (Seed Round)</h3>
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
                Solicita el deck completo y el modelo financiero detallado para profundizar en nuestra tesis de inversión.
              </p>
              <button className="px-10 py-5 bg-white text-brand-bg rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto">
                Contactar con Fundadores <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
