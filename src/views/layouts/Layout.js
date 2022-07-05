import Footer from "./Footer";
import Header from "./Header";
import Box from '@mui/material/Box';

export default function Layout(props){
    return (
        <main>
            <Header />
                <Box sx={{p:2,minHeight:'90vh',mt:'70px'}}>
                    <div>{props.children}</div>
                </Box>
            <Footer/>
        </main>
    );
}