import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TemporaryDrawer } from "./drawer"
import { useSelector } from 'react-redux';
import { headerColor, headerColorSelector } from '../redux/reduxSelectors';



export default function Header() {
    const headerSelecter = useSelector(headerColorSelector)
    return (
        <div sx={{ flexGrow: 1 }} >
            <header position="static" style={{ background: headerSelecter, boxShadow: 'none' }} >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dynamic Design
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <TemporaryDrawer
                            button={<MenuIcon />}
                        />

                    </IconButton>
                </Toolbar>
            </header>


        </div >
    );
}