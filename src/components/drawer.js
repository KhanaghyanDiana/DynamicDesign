import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { backgroundImageChangerAction, fontStyleAction, headerStyleAction } from '../redux/action';
import { images } from '../images/images';
import { headerColorSelector } from '../redux/reduxSelectors';

export const TemporaryDrawer = (props) => {
    const paragraphQuerySelector = document.querySelectorAll("p")
    let arrayOfImages = [images.imageOne, images.imageTwo, images.imageThree]
    const headerSelecter = useSelector(headerColorSelector)
    const dispatchHeader = useDispatch()
    const dispatchFont = useDispatch()
    const backgroundImageDispatch = useDispatch()
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const styleListener = (size, color) => {

        paragraphQuerySelector.forEach(element => {
            element.style.fontSize = size
            element.style.color = color;
        });
    }
    let handleSelect = (e, font, colorOfText) => {
        dispatchFont(fontStyleAction(e))
        if (e == "Medium") {

            styleListener("16px", "blue")
        }
        else if (e == "Large") {
            styleListener("35px", "green")
        }
        else if (e == "Small") {
            styleListener("10px", "orange")
        }

    }
    const handleHeaderBackground = (e) => {
        dispatchHeader(headerStyleAction(e))
    }
    let getRandomIndex = () => {
        let indexRandom = Math.floor(Math.random() * arrayOfImages.length)
        return indexRandom
    }


    const handleBackground = () => {
        for (let i = 0; i < arrayOfImages.length; i++) {
            backgroundImageDispatch(backgroundImageChangerAction(arrayOfImages[getRandomIndex()]))
        }
    }


    const list = (anchor) => (
        <div
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ width: '400px', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}

        >
            <label for="head">Header color picker</label>
            <input type="color" id="head" name="head"
                value={headerSelecter} onChange={(e) => handleHeaderBackground(e.target.value)} />
            <label for="head">Font Size and Color picker</label>
            <select name="sizes" id="sizes" onChange={(e) => handleSelect(e.target.value)}>
                <option value="Small"  >Small</option>
                <option value="Large" >Large</option>
                <option value="Medium">Medium</option>
            </select>
            <label for="head">Background Image</label>
            <button onClick={handleBackground}>Change Background Image</button>
        </div >
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{props.button}

                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}