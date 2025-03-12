function SearchBar({ query, setQuery }) {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Busca un país..." 
            />
        </div>
    );
}

export default SearchBar;
