function History({ history }) {
    return (
        <div className="history-container">
            <h3>Historial de Búsquedas:</h3>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default History;
