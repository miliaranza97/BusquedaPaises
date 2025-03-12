import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import History from './components/History';
import Results from './components/Results';
import './App.css'

function App() {
    const [query, setQuery] = useState("");
    const [countries, setCountries] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
      console.log("Valor de query: ", query);

      if (query.length === 0) {
        setCountries([]);
        return;
      }

      const fetchCountries = async () => {
        try {

          console.log(`Buscando pais: , ${query}`);

          const response = await fetch(`/api/name/${query}`);
          console.log(`Estado de la respuesta: ${response.status}`);

          const text = await response.text();
          console.log("Respuesta de la API: ", text);

          const data = JSON.parse(text);
          console.log("Datos recibidos: ", data);

          setCountries(data);
          updateHistory(query);

          console.log("Historial actualizado: ", updateHistory);

        }catch (error) {
          console.log("Error al obtener datos ", error.message);
          setCountries([]);
          
        }
      };

      const timeoutId = setTimeout(fetchCountries, 500);
      return () => clearTimeout(timeoutId);
    }, [query]);

    const updateHistory = (newQuery) => {

      setHistory((prevHistory = []) => {

      console.log("Historial antes de actualizar: ", prevHistory);

      if (!Array.isArray(prevHistory)) {
        console.error("Error: prevHistory no es un array", prevHistory);
        return [];
      }

        const updateHistory = [newQuery, ...prevHistory.filter(q => q !== newQuery)].slice(0, 5);
        console.log("Historial actualizado: ", updateHistory);
        return updateHistory;
      }
    )};


  return (
    <div className='container'>
      <h1>Buscador de Paises</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <Results countries={countries} />
      <History history={history} />
    </div>
  );

};

export default App;
