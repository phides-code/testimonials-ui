import styled from 'styled-components';
import TestimonialsUI from './MainComponent';
import { MobileProvider } from './MobileContext';

const App = () => {
    return (
        <Wrapper>
            <MobileProvider>
                <TestimonialsUI />
            </MobileProvider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export default App;
