import ContactoComponent from "../pure/Contacto";
import { Contacto } from "../../models/contacto.class";

const ContactoList = () => {
  const contacto = new Contacto("German", "Cuevas", "german@gmail.com", false);
  return (
    <div>
      <h1>Contacto</h1>
      <ContactoComponent contacto={contacto}></ContactoComponent>
    </div>
  );
};

export default ContactoList;
