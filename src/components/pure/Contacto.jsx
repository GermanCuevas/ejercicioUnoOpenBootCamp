import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";
import "./Contacto.css";

const ContactoComponent = ({ contacto }) => {
  const styleLine = {
    backgroundColor: contacto.conectado ? "green" : "red",
  };

  return (
    <div style={styleLine} className="contactoDiv">
      <h4>
        Nombre: {contacto.nombre} {contacto.apellido}
      </h4>
      <p>Correo:{contacto.email}</p>
      <p>
        Estado:
        {contacto.conectado ? "Contacto en Linea" : "Contacto no disponible"}
      </p>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
