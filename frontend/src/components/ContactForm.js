import React, { useState } from "react";
import axios from "axios";

function ContactForm({ onSent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    tipoServicioSAP: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/contacts", form);
      setMsg(res.data.message);
      setForm({ name: "", email: "", message: "" });
      if (onSent) onSent();
    } catch (err) {
      setMsg("Error al enviar");
    }
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Empresa"
          value={form.company}
          onChange={handleChange}
        />

        <select
          name="tipoServicioSAP"
          value={form.tipoServicioSAP}
          onChange={handleChange}
        >
          <option value="">Selecciona un servicio SAP</option>
          <option value="SAP FI">SAP FI</option>
          <option value="SAP CO">SAP CO</option>
          <option value="SAP MM">SAP MM</option>
          <option value="SAP SD">SAP SD</option>
          <option value="SAP HCM">SAP HCM</option>
        </select>

        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default ContactForm;
