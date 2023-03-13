import React, {Fragment} from 'react';
import './style.sass'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Header() {
    return (
        <Box className='header-wrapper'>
            <Typography variant="h3" gutterBottom className='tittle'> Nova Poshta application</Typography>
            <Box sx={{marginBottom: '20px'}}>
                <Link href={'/'} style={{marginRight: '20px'}} underline="hover">Перевірити ТТН</Link>
                <Link href={'/department'} underline="hover">Список Відділень</Link>
            </Box>
        </Box>
    );
}

export default Header;