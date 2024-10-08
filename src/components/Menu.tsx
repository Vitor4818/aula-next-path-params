import Link from "next/link"

export const Menu = () =>{
    return(
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/produtos">Produtos</Link></li>
                <li><Link href="/contato">Contatos</Link></li>
            </ul>
        </nav>
    )
}