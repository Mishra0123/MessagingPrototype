import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #87CEEB;
`;

const Header = styled(AppBar)`
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    background: #87CEEB;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;