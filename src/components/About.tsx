import { useParams } from "react-router-dom";
import Programas from "./Programas";

type AboutParams = {
  section: string;
};

export default function About() {
  const { section } = useParams<AboutParams>();
  return (
    <>
      <h1>About</h1>
      {section === "programas" ? <Programas /> : <h2>Hola somos Ada School</h2>}
    </>
  );
}
