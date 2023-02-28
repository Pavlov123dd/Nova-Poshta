import React from 'react';

function Header() {
    return (
        <div>
            <h1> Nova Poshta application</h1>
            <div style={{ marginBottom: '20px' }}>
                <a href={'/'} style={{marginRight: '20px' }}>Перевірити ТТН</a>
                <a href={'/department'}>Список Відділень</a>
            </div>
        </div>
    );
}

export default Header;