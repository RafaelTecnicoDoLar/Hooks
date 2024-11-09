import Logo from "../../public/Hulk.png"

function Header() {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo" />

            <h1>
                Aula Hooks
            </h1>
            
        </header>
    );
}
export default Header;