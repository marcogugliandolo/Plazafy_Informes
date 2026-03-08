import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  BarChart3, 
  PieChart as PieChartIcon, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  FileText,
  LayoutDashboard,
  Car,
  Key,
  Clock,
  ArrowRight,
  Download,
  Globe,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Cell,
  Pie
} from 'recharts';
import ViabilityAssessment from './components/ViabilityAssessment';
import InvestorPitch from './components/InvestorPitch';
import FinancialProjections from './components/FinancialProjections';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img 
    src="https://plazafy.es/logo.png" 
    alt="Plazafy Logo" 
    className={className}
    referrerPolicy="no-referrer"
  />
);

const marketData = [
  { name: 'TAM', value: 15800, description: 'Mercado Global Smart Parking (2030)' },
  { name: 'SAM', value: 4800, description: 'Mercado P2P Europa Occidental' },
  { name: 'SOM', value: 240, description: 'Mercado Objetivo España (Año 5)' },
];

const growthData = [
  { month: 'Q1 2026', bookings: 120, revenue: 3600 },
  { month: 'Q2 2026', bookings: 450, revenue: 13500 },
  { month: 'Q3 2026', bookings: 1200, revenue: 36000 },
  { month: 'Q4 2026', bookings: 2800, revenue: 84000 },
  { month: 'Q1 2027', bookings: 5600, revenue: 168000 },
  { month: 'Q2 2027', bookings: 12000, revenue: 360000 },
];

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981'];

export default function App() {
  const [view, setView] = useState<'dashboard' | 'report' | 'investor' | 'projections'>('dashboard');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen pb-20 bg-brand-bg text-white selection:bg-brand-accent/30 selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-2 py-2 shadow-2xl flex items-center gap-1">
        <button 
          onClick={() => setView('dashboard')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${view === 'dashboard' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
        >
          <LayoutDashboard size={18} />
          <span className="text-sm font-bold">Dashboard</span>
        </button>
        <button 
          onClick={() => setView('report')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-500 ${view === 'report' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
        >
          <FileText size={18} />
          <span className="text-sm font-bold">Viabilidad</span>
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {view === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="hero-gradient"
          >
            {/* Modern Split Hero Section */}
            <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="mb-12">
                    <Logo className="h-32 md:h-40 lg:h-48 w-auto object-contain" />
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl mb-8 leading-[0.85] font-display font-black tracking-tighter text-white">
                    Tu plaza, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">donde la necesites.</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light text-zinc-400 mb-12 leading-relaxed max-w-xl">
                    Desbloqueamos el inventario oculto de garajes privados mediante tecnología IoT. <span className="text-white font-bold">Rentabilidad</span> para propietarios, <span className="text-white font-bold">comodidad</span> para conductores.
                  </p>
                  
                  <div className="flex flex-wrap gap-6">
                    <button 
                      onClick={() => setView('report')}
                      className="px-10 py-5 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-2xl font-black text-lg transition-all flex items-center gap-3 group shadow-lg shadow-brand-accent/20"
                    >
                      Ver Informe Estratégico
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  <div className="absolute inset-0 bg-brand-accent/20 blur-[150px] rounded-full"></div>
                  <div className="relative glass-panel p-3 overflow-hidden border-white/10 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1000" 
                      alt="Professional Parking" 
                      className="rounded-[2.5rem] w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-32 relative z-20">
              {/* Executive Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                <motion.div 
                  whileHover={{ y: -12 }}
                  className="presentation-card bg-white/2 border-white/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-10">
                    <Clock className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-black mb-6 tracking-tight text-white">El Problema</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg">
                    El 30% del tráfico urbano es generado por conductores buscando parking, perdiendo <span className="text-white font-bold">2.500 horas</span> en su vida y emitiendo toneladas de CO2.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -12 }}
                  className="presentation-card bg-brand-accent shadow-xl shadow-brand-accent/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-black mb-6 text-white tracking-tight">La Solución</h3>
                  <p className="text-white/80 font-light leading-relaxed text-lg">
                    Un marketplace con tecnología IoT que habilita digitalmente garajes privados, conectando oferta ociosa con demanda en tiempo real.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -12 }}
                  className="presentation-card bg-white/2 border-white/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-10">
                    <Leaf className="text-emerald-500" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-black mb-6 tracking-tight text-white">Impacto ESG</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-lg">
                    Reducción directa de emisiones de carbono y optimización del espacio urbano existente sin necesidad de nuevas construcciones.
                  </p>
                </motion.div>
              </div>

              {/* Market Analysis Section */}
              <section className="mb-32">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="flex-1 presentation-card bg-white/2 border-white/10">
                    <div className="flex justify-between items-start mb-16">
                      <div>
                        <span className="label-caps text-brand-accent font-mono">Análisis de Mercado</span>
                        <h2 className="text-5xl font-display font-black mt-2 tracking-tight text-white">Oportunidad Global</h2>
                      </div>
                      <Globe className="text-white/10" size={48} />
                    </div>
                    
                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={marketData}
                            cx="50%"
                            cy="50%"
                            innerRadius={100}
                            outerRadius={140}
                            paddingAngle={10}
                            dataKey="value"
                            stroke="none"
                          >
                            {marketData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}
                            itemStyle={{ color: '#0f172a' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-16">
                      {marketData.map((item, i) => (
                        <div key={item.name} className="text-center">
                          <div className="text-[10px] font-mono text-zinc-500 mb-2 tracking-[0.2em] uppercase">{item.name}</div>
                          <div className="text-4xl font-display font-black text-white">{(item.value / 1000).toFixed(1)}B$</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 presentation-card bg-white/2 border-white/10">
                    <div className="flex justify-between items-start mb-16">
                      <div>
                        <span className="label-caps text-brand-accent font-mono">Proyecciones Financieras</span>
                        <h2 className="text-5xl font-display font-black mt-2 tracking-tight text-white">Escalabilidad</h2>
                      </div>
                      <TrendingUp className="text-white/10" size={48} />
                    </div>

                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#71717a', fontFamily: 'monospace'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#71717a', fontFamily: 'monospace'}} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1a1625', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#7c3aed" 
                            strokeWidth={5}
                            fillOpacity={1} 
                            fill="url(#colorRevenue)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-16 flex items-center gap-8 p-8 bg-white/2 rounded-[2.5rem] border border-white/10 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <ArrowUpRight className="text-emerald-500" size={32} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-white">Crecimiento Mensual</div>
                        <div className="text-sm text-zinc-500 font-light">Basado en tracción inicial y efectos de red.</div>
                      </div>
                      <div className="ml-auto text-5xl font-display font-black text-emerald-500">+32%</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Indicators Grid */}
              <section className="mb-32">
                <div className="mb-16">
                  <span className="label-caps text-brand-accent font-mono">Economía de Unidad</span>
                  <h2 className="text-6xl font-display font-black mt-2 tracking-tight text-white">Indicadores de Negocio</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  {[
                    { label: 'CAC', value: '85€', sub: 'Coste Adquisición', icon: Users, color: 'text-blue-400' },
                    { label: 'LTV', value: '2.850€', sub: 'Valor de Vida', icon: DollarSign, color: 'text-emerald-400' },
                    { label: 'Churn', value: '0.8%', sub: 'Abandono Mensual', icon: BarChart3, color: 'text-rose-400' },
                    { label: 'Payback', value: '3.2 Meses', sub: 'Periodo ROI', icon: Zap, color: 'text-amber-400' },
                  ].map((kpi, i) => (
                    <motion.div 
                      key={kpi.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="presentation-card flex flex-col items-center text-center group bg-white/2 border-white/5 hover:bg-white/5"
                    >
                      <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm ${kpi.color}`}>
                        <kpi.icon size={32} />
                      </div>
                      <div className="label-caps mb-3 text-zinc-500 font-mono">{kpi.label}</div>
                      <div className="text-5xl font-display font-black mb-3 tracking-tighter text-white">{kpi.value}</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-widest">{kpi.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Business Model & Features */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                <div>
                  <span className="label-caps text-brand-accent font-mono">Fuentes de Ingresos</span>
                  <h2 className="text-6xl font-display font-black mt-2 mb-16 tracking-tight text-white">Modelo de Negocio</h2>
                  
                  <div className="space-y-10">
                    {[
                      { title: 'Comisión Marketplace', desc: 'Plazafy retiene una comisión por cada transacción de parking P2P.', price: '20% por reserva' },
                      { title: 'SaaS Plazafy Gate', desc: 'Suscripción mensual por el uso del hardware IoT y software de gestión.', price: '49€/mes/puerta' },
                      { title: 'API Enterprise', desc: 'Acceso a datos y reservas para flotas corporativas y sistemas GPS.', price: 'Tarifas por uso' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-10 p-10 rounded-[3rem] border border-white/10 bg-white/2 hover:border-brand-accent/50 transition-all group hover:bg-white/5">
                        <div className="w-20 h-20 rounded-3xl bg-brand-accent/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                          <ShieldCheck size={40} />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-3xl font-display font-black tracking-tight text-white">{item.title}</h4>
                            <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/5 px-4 py-2 rounded-full border border-brand-accent/10 uppercase tracking-widest">{item.price}</span>
                          </div>
                          <p className="text-zinc-400 text-xl font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-8 md:p-16 relative overflow-hidden flex flex-col justify-center border-white/10 bg-white/2">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[180px] rounded-full"></div>
                  
                  <span className="label-caps text-zinc-500 mb-4 md:mb-6 block font-mono">Ecosistema de Producto</span>
                  <h2 className="text-5xl md:text-7xl mb-12 md:mb-20 font-display font-black tracking-tighter leading-none text-white">Tecnología <br />Plazafy</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="rounded-[2rem] md:rounded-[3rem] bg-white/2 border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col justify-end group hover:bg-brand-accent/5 transition-colors shadow-sm min-h-[250px] md:min-h-[300px]">
                        <Car className="text-brand-accent mb-4 md:mb-6" size={36} />
                        <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest">MÓDULO 01</div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-white break-words leading-tight">Marketplace</div>
                      </div>
                      <div className="rounded-[2rem] md:rounded-[3rem] bg-brand-accent p-6 md:p-8 lg:p-10 flex flex-col justify-end shadow-xl shadow-brand-accent/20 group min-h-[300px] md:min-h-[400px] flex-1">
                        <Clock className="text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform" size={36} />
                        <div className="text-[10px] font-mono text-white/40 mb-2 uppercase tracking-widest">MÓDULO 03</div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-white break-words leading-tight">Dynamic Pricing</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                      <div className="rounded-[2rem] md:rounded-[3rem] bg-white/2 border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col justify-end group hover:bg-brand-accent/5 transition-colors shadow-sm min-h-[300px] md:min-h-[400px] flex-1">
                        <Key className="text-brand-accent mb-4 md:mb-6" size={36} />
                        <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest">MÓDULO 02</div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-white break-words leading-tight">IoT Gate</div>
                      </div>
                      <div className="rounded-[2rem] md:rounded-[3rem] bg-white/2 border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col justify-end group hover:bg-brand-accent/5 transition-colors shadow-sm min-h-[250px] md:min-h-[300px]">
                        <BarChart3 className="text-brand-accent mb-4 md:mb-6" size={36} />
                        <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest">MÓDULO 04</div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-white break-words leading-tight">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
        )}

        {view === 'report' && (
          <motion.div
            key="report"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="pt-32"
          >
            <div className="max-w-5xl mx-auto px-6 mb-10 flex justify-end print:hidden">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-3 px-8 py-4 bg-white/3 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm font-black uppercase tracking-widest"
              >
                <Download size={20} />
                Exportar Informe PDF
              </button>
            </div>
            <ViabilityAssessment 
              onPresentToInvestors={() => setView('investor')}
              onViewProjections={() => setView('projections')}
            />
          </motion.div>
        )}

        {view === 'investor' && (
          <motion.div
            key="investor"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <InvestorPitch onBack={() => setView('report')} />
          </motion.div>
        )}

        {view === 'projections' && (
          <motion.div
            key="projections"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <FinancialProjections onBack={() => setView('report')} />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-white/2 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <Logo className="h-24 md:h-32 w-auto object-contain" />
        </div>
      </footer>
    </div>
  );
}
