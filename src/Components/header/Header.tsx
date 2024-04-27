import React from 'react';
import S from './header.module.css'
const Header = () => {
    return (
        <header className={S.header} >
            <div>
                <h1>
                    Киносправочник
                </h1>
            </div>
        </header>
    );
};

export default Header;