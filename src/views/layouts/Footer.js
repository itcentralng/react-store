import { blueGrey } from '@mui/material/colors';
import { Box } from '@mui/system';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const greyColor = blueGrey[900];

export default function Footer(){
    return (
        <Box sx={{backgroundColor:greyColor,py:2}}>
            <footer>
                <div style={{color:'#fff',textAlign:'center'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <ShoppingBagIcon/>
                        <h3 style={{marginLeft:'5px'}}> React store</h3>
                    </div>
                    <div style={{fontSize:'14px'}}>Created by <a style={{color:'#fff'}} href="https://github.com/maulik46/" target="_blank" rel="noopener noreferrer">@maulik</a></div>
                </div>
            </footer>
        </Box>
    );
}