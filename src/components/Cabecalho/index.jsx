export const Cabecalho = ({foto}) => {
    return (
        <div className='cabecalho flex'>
            <img src={foto} alt='logo-BocaWeb'/>
            <h1>BOCAWEB FRONT</h1>
        </div>
    )
}