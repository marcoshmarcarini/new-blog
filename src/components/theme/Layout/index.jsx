import Menu from "../Menu"
import Rodape from "../Rodape"

export default function Layout({children}){
    return(
        <>
            <Menu />
            <main>{children}</main>
            <Rodape />
        </>
    )
}