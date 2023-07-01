export default function Card({nombre,descripcion}) {
    return(
        <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
        </div>
    );
}