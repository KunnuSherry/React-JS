import { useContext } from "react";
import { GlobalContext } from "../../components/context/index";

function ContextText() {
    const {theme} = useContext(GlobalContext);
    return (
        <p style={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
            padding: '1rem',
            border: '1px solid #ccc'
        }}>
            This is a text
        </p>
    );
}

export default ContextText;
    
