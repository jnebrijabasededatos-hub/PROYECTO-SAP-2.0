import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactList({ reloadFlag }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, [reloadFlag]);

  return (
    <div>
      <h2>Mensajes recibidos</h2>
      {contacts.map((c) => (
        <div
          key={c._id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>{c.name}</h3>
          <p>
            <strong>{c.email}</strong>
          </p>
          <p>
            <strong>Teléfono:</strong> {c.phone}
          </p>
          <p>
            <strong>Empresa:</strong> {c.company}
          </p>
          <p>
            <strong>Servicio SAP:</strong> {c.tipoServicioSAP}
          </p>

          <p>{c.message}</p>
          <small>{new Date(c.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
