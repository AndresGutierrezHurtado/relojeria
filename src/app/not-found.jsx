export default function NotFound() {
    return (
        <div className="flex flex-col gap-5 text-center">
            <div>
                <h1 className="text-9xl font-extrabold text-yellow-400">404</h1>
                <h3 className="text-2xl font-medium">Pagina no encontrada</h3>
            </div>
            <p className="text-lg">Parece que hubo un error al encontrar el link</p>
        </div>
    );
}
