import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [reloadFlag, setReloadFlag] = useState(0);

  const handleSent = () => {
    setReloadFlag((prev) => prev + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Proyecto SAP 2.0 (MERN)</h1>
      <ContactForm onSent={handleSent} />
      <hr />
      <ContactList reloadFlag={reloadFlag} />
    </div>
  );
}

export default App;
