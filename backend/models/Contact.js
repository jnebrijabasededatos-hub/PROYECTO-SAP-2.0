const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String, // NUEVO
  company: String, // NUEVO
  tipoServicioSAP: String, // NUEVO
  message: String,
  date: { type: Date, default: Date.now },
});
