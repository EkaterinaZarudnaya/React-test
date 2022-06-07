import style from "./Nav.module.css"

const Nav =()=>{
    return(
        <nav className= {style.nav}>
            <div>
                <a href="/content"> Profile</a>
            </div>
            <div>
                <a href="/dialogs">Mess</a>
            </div>
            <div>
                <a href="/">New</a>
            </div>
            <div>
                <a href="/">Mus</a>
            </div>
            <div>
                <a href="/">Settings</a>
            </div>
        </nav>
    )
}
export default Nav