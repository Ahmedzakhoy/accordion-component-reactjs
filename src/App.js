import "./styles.css";
import Accordion from "./Accordion";
import { faqs } from "./faqs-data";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
