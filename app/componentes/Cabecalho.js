import Image from "next/image";

export default function Cabecalho() {
    return (
        <header>
            <Image
                src="/foto3.jpg"
                width={300}
                height={300}
                alt="Minha foto"
                className="foto"
            />
            <div>
                <h1>Olá, meu nome é Thiago</h1>
                <p>Bem-vindo ao meu site!</p>
            </div>
        </header>
    );
}