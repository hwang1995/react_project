import {useState, createContext} from 'react';

const ColorContext = createContext({
    color: 'yellow',
    setColor: function(color) {
        this.color = color
        alert(color);
    }
});

// Component O
export function ColorContextProvider(props) {
    const [color, setColor] = useState('black');
    const value = { color, setColor };

    return (
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    )
}

// Component X
export default ColorContext;