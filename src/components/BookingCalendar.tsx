import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfToday } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, X, Calendar as CalendarIcon, Clock, User, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingCalendarProps {
  onClose: () => void;
}

export default function BookingCalendar({ onClose }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [step, setStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    time: '10:00'
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const onDateClick = (day: Date) => {
    if (isBefore(day, startOfToday())) return;
    setSelectedDate(day);
    setStep('form');
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display font-black text-white capitalize">
          {format(currentMonth, 'MMMM yyyy', { locale: es })}
        </h2>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-zinc-400" />
          </button>
          <button onClick={nextMonth} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ChevronRight size={24} className="text-zinc-400" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-black uppercase tracking-widest text-zinc-500 py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const isDisabled = !isSameMonth(day, monthStart) || isBefore(day, startOfToday());
        
        days.push(
          <div
            key={day.toString()}
            className={`relative h-14 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-xl
              ${isDisabled ? 'text-zinc-700 cursor-not-allowed' : 'text-white hover:bg-brand-accent/20'}
              ${selectedDate && isSameDay(day, selectedDate) ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : ''}
            `}
            onClick={() => !isDisabled && onDateClick(cloneDay)}
          >
            <span className="text-sm font-bold">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="flex flex-col gap-2">{rows}</div>;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: format(selectedDate, 'yyyy-MM-dd'),
        }),
      });

      if (response.ok) {
        setStep('success');
      } else {
        alert('Hubo un error al procesar tu reserva. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error booking:', error);
      alert('Error de conexión. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-bg/80 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-xl bg-brand-surface border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-zinc-400" />
        </button>

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 'calendar' && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="mb-8">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <CalendarIcon className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-3xl font-display font-black text-white mb-2">Agenda una reunión</h3>
                  <p className="text-zinc-400 font-light">Selecciona el día que mejor te convenga para hablar sobre Plazafy.</p>
                </div>
                {renderHeader()}
                {renderDays()}
                {renderCells()}
              </motion.div>
            )}

            {step === 'form' && selectedDate && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <button 
                  onClick={() => setStep('calendar')}
                  className="text-brand-accent mb-8 flex items-center gap-2 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs"
                >
                  <ChevronLeft size={16} /> Volver al calendario
                </button>

                <div className="mb-8">
                  <h3 className="text-3xl font-display font-black text-white mb-2">Tus datos</h3>
                  <p className="text-zinc-400 font-light">
                    Reunión para el <span className="text-white font-bold">{format(selectedDate, "d 'de' MMMM", { locale: es })}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="label-caps">Nombre Completo</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                        <input 
                          required
                          type="text"
                          placeholder="Tu nombre"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent outline-none transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="label-caps">Hora Preferida</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent outline-none transition-all appearance-none"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="label-caps">Email de Contacto</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input 
                        required
                        type="email"
                        placeholder="ejemplo@empresa.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="label-caps">Mensaje (Opcional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-zinc-500" size={18} />
                      <textarea 
                        rows={3}
                        placeholder="Cuéntanos brevemente tu interés..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-accent outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full py-5 bg-brand-accent text-white rounded-2xl font-black text-lg hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-accent/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>Confirmar Reserva <CheckCircle2 size={24} /></>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-emerald-500" size={48} />
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-4">¡Reserva Confirmada!</h3>
                <p className="text-zinc-400 text-lg font-light mb-12 max-w-sm mx-auto">
                  Hemos enviado los detalles a <span className="text-white font-bold">{formData.email}</span>. Nos vemos pronto.
                </p>
                <button 
                  onClick={onClose}
                  className="px-10 py-4 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/10"
                >
                  Cerrar Ventana
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
