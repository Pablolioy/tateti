export default function Cuadrado({ children , index, actualizarTurno, win }) {

        const handleClick = () => {
            if(win) return
            else {
                actualizarTurno ? actualizarTurno(index) : false
             }   
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