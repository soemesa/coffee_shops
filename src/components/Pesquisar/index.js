
const Pesquisar = ({realizaBusca}) => {
    const handleChange = (event) => {
        const termoBusca = event.target.value;
        realizaBusca(termoBusca);
    };

    return (
        <div className="barra-de-busca">
            <input 
                type="text"
                placeholder="Buscar produtos..."
                onChange={handleChange}
            />
        </div>
    );
};

export default Pesquisar