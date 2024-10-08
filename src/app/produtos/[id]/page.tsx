import { Menu } from "@/components/Menu";

export default function Detalhes({params: {id} }){
    return(
        <div>
            <h1>Detalhes</h1>
            <Menu/>
            <h1>{id}</h1>
        </div>
    )
}