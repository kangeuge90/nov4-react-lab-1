// Do we have to link Header.css to Header.tsx or are they automatically associated?  
// Or do we just use Header p {...}

import './Header.css'

function Header() {
    return <header>
        <h1>Ice Cream Wars!!</h1>
        <hr></hr>
    </header>
}

export default Header;