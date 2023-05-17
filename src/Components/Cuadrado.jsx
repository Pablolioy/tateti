export default function Cuadrado({ children , index, actualizarTurno }) {

        const handleClick = () => {
            actualizarTurno(index)
        }

    return (
        <>
            <div
                key={index}
                className="cuadrado"
                onClick={handleClick}
            >
                {children}
            </div>
        </>
    )
}