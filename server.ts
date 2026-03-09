import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT) || 3000;

// Configuración de Nodemailer (Placeholder para que el usuario lo configure en .env)
const transporter = nodemailer.createTransport({
  service: 'gmail', // O el servicio que prefiera el usuario
  auth: {
    user: process.env.EMAIL_USER || 'contacto@marcogugliandolo.com',
    pass: process.env.EMAIL_PASS || 'password_placeholder',
  },
});

// Endpoint para reservas
app.post('/api/book', async (req, res) => {
  const { name, email, message, date, time } = req.body;

  console.log(`Nueva reserva recibida: ${name} (${email}) para el ${date} a las ${time}`);

  // Enviar correo al administrador
  const mailOptions = {
    from: process.env.EMAIL_USER || 'contacto@marcogugliandolo.com',
    to: 'contacto@marcogugliandolo.com',
    subject: `Nueva Reserva Plazafy: ${name}`,
    text: `
      Nueva reserva de reunión:
      Nombre: ${name}
      Email: ${email}
      Fecha: ${date}
      Hora: ${time}
      Mensaje: ${message || 'Sin mensaje adicional'}
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #7c3aed;">Nueva Reserva Plazafy</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Mensaje:</strong> ${message || 'Sin mensaje adicional'}</p>
      </div>
    `,
  };

  try {
    // Solo intentamos enviar si hay credenciales configuradas
    if (process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'password_placeholder') {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn('EMAIL_PASS no configurado. El correo no se envió realmente, pero la reserva se registró en consola.');
    }
    
    res.status(200).json({ message: 'Reserva recibida correctamente' });
  } catch (error) {
    console.error('Error enviando email:', error);
    // Respondemos con éxito de todos modos para no bloquear al usuario en el demo, 
    // pero registramos el error.
    res.status(200).json({ message: 'Reserva recibida (error en envío de mail)' });
  }
});

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para manejar el SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor de Plazafy corriendo en http://0.0.0.0:${PORT}`);
});
