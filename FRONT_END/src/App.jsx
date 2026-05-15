import { useEffect } from "react";
import Accueil from "./Pages/Accueil";

function App() {

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test")
      .then(res => res.json())
      .then(data => {
        console.log("DATA FROM LARAVEL:", data);
      })
      .catch(err => console.error("ERROR:", err));
  }, []);

  return (
    <div>
      <Accueil />
    </div>
  );
}

export default App;