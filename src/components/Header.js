import { Button } from "./Button";

const Header = ({ title, showAdd, onAdd }) => {

    Header.defaultProps = {
        title: 'Default Header',
    };

    return (
        <header className="header-container w-screen flex justify-around items-center p-8">
            <h1 className="text-3xl">{title}</h1>
            <Button text={showAdd ? 'Close' : 'Add'} onAdd={onAdd} />
        </header>
    )
}

export default Header