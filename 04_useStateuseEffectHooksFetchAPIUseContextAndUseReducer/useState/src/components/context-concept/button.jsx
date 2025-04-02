import { useContext } from "react";
import { GlobalContext } from "../../components/context/index";

function ContextButton() {
    const {theme, setTheme} = useContext(GlobalContext);
    function handleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return <button onClick={handleTheme}>Change Theme</button>
}

export default ContextButton;
