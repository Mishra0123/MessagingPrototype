import { useContext } from 'react';

import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { qrCodeImage } from '../../constants/data';



const Container = styled(Box)`
    padding: 40px 0 20px 20px;
`;

const QRCOde = styled('img')({
    height: 264,
    width: 264,
    margin: '10px 0 0 60px',

});

const Title = styled(Typography)`
    font-size: 24px;
    margin-bottom: 25px;
    color: $000;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '5%',
    height: '75%',
    width: '30%',
    maxWidth: '100',
    
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Box>
                <Container>
                    <Title>To use ChitChatr on your computer</Title>
                    <StyledList>
                    <ListItem>1. Open ChitChatr on your computer</ListItem>
                    <ListItem>2. Login with your Google account</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCOde src={qrCodeImage} alt="QR Code" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                        { showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> : null}
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}

export default LoginDialog;