function Results({ countries }) {
    console.log("Paises recibidos en Results:", countries);

    return (
        <div className="results-container">
            <h2>Resultados: </h2>
            {countries.length > 0 ? (
                countries.map((country, index) => {
                    const population = Number(country.population);
                    const formattedPopulation = population.toLocaleString();

                    return (
                        <div key={index} className="card">
                            <h3>{country.name.common}</h3>
                            <p>Capital: {country.capital || "N/A"}</p>
                            <p>Población: {formattedPopulation}</p>
                            <img src={country.flags.png} alt={country.name.common} width={100} />
                        </div>
                    );
                })
            ) : (
                <p>No hay resultados para mostrar.</p>
            )}
        </div>
    );
}

export default Results;
