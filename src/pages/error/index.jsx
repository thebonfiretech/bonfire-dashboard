import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Container, Box, Position1, Position2, Position3, Message, Icon } from './styles';

const Error = () => {
    const navigate = useNavigate();

    const cameBack = () => {
        navigate('/dashboard')
    }
    return (
        <Container>
            <Box>
                <Position1>
                    <Icon className='icon'>
                        <AiOutlineClose size={30} color='#fff'/>
                    </Icon>
                </Position1>
                <h1>Oops!</h1>
                <Message>
                <Position2>
                    <Icon className='icon'>
                        <AiOutlineClose size={30} color='#fff'/>
                    </Icon>
                </Position2>
                    <p>Algo deu errado</p>
                </Message>
                <Button name='TENTE NOVAMENTE' onAction={cameBack}/>
                    <Position3>
                        <Icon className='icon'>
                            <AiOutlineClose size={30} color='#fff'/>
                        </Icon>
                    </Position3>
            </Box>
        </Container>
    );
}

export default Error;
