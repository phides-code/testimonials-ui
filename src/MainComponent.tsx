import styled from 'styled-components';
import { comments } from './comments';
import RatingIndicator from './RatingIndicator';
import { useContext, useState } from 'react';
import { MobileContext } from './MobileContext';

const MainComponent = () => {
    const [carouselXOffset, setCarouselXOffset] = useState(0);

    const { isMobile } = useContext(MobileContext);

    const baseOffset = isMobile ? 19 : 25;

    const moveCarouselRight = () => {
        if (carouselXOffset > (comments.length - 1) * -baseOffset) {
            setCarouselXOffset(
                (carouselXOffset) => carouselXOffset - baseOffset
            );
        }
    };

    const moveCarouselLeft = () => {
        if (carouselXOffset < 0) {
            setCarouselXOffset(
                (carouselXOffset) => carouselXOffset + baseOffset
            );
        }
    };

    return (
        <Wrapper $isMobile={isMobile}>
            <CarouselHeader>
                <HeaderText $isMobile={isMobile}>
                    What Our Customers Are Saying
                </HeaderText>
                <ButtonArea>
                    <ArrowButton onClick={moveCarouselLeft}>{'<'}</ArrowButton>
                    <ArrowButton onClick={moveCarouselRight}>{'>'}</ArrowButton>
                </ButtonArea>
            </CarouselHeader>
            <Carousel $carouselXOffset={carouselXOffset}>
                {comments
                    .slice(carouselXOffset, comments.length)
                    .map((comment, i) => (
                        <CommentCard
                            key={i}
                            $pastelColor={comment.color.Pastel}
                            $color={comment.color.Standard}
                            $isMobile={isMobile}
                        >
                            <RatingIndicator
                                color={comment.color.Standard}
                                rating={comment.rating}
                            />
                            <CommentTitle>{comment.title}</CommentTitle>
                            <CommentContent>{comment.content}</CommentContent>
                            <AuthorWrapper>
                                <AuthorAvatar
                                    src={'./assets/' + comment.author.avatarUrl}
                                />
                                <AuthorInfoWrapper>
                                    <AuthorName>
                                        {comment.author.name}
                                    </AuthorName>
                                    <AuthorTitle>
                                        {comment.author.title}
                                    </AuthorTitle>
                                </AuthorInfoWrapper>
                            </AuthorWrapper>
                        </CommentCard>
                    ))}
            </Carousel>
        </Wrapper>
    );
};

interface CommentCardProps {
    $pastelColor: string;
    $color: string;
    $isMobile: boolean;
}

interface CarouselProps {
    $carouselXOffset: number;
}

interface MobileProps {
    $isMobile: boolean;
}

const Wrapper = styled.div<MobileProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$isMobile ? '90%' : '60%')};
    overflow-x: hidden;
    padding-bottom: 1rem;
`;

const CarouselHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderText = styled.div<MobileProps>`
    font-size: ${(props) => (props.$isMobile ? 'x-large' : 'xx-large')};
    font-weight: bold;
    max-width: 20rem;
`;

const ButtonArea = styled.div`
    display: flex;
    align-items: center;
`;

const ArrowButton = styled.button`
    width: 3rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 50%;
    background: white;
    margin-left: 1rem;

    &:hover {
        background: black;
        color: white;
    }
`;

const Carousel = styled.div<CarouselProps>`
    display: flex;
    margin-top: 1rem;
    position: relative;
    left: ${(props) => props.$carouselXOffset}rem;
    transition: left 0.3s ease-in-out;
`;

const CommentCard = styled.div<CommentCardProps>`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.$pastelColor};
    min-width: ${(props) => (props.$isMobile ? '16rem' : '20rem')};
    max-width: ${(props) => (props.$isMobile ? '16rem' : '20rem')};
    padding: 1rem;
    margin-right: ${(props) => (props.$isMobile ? '1rem' : '3rem')};
    border-radius: 16px;
    box-shadow: 5px 5px 0px 1px ${(props) => props.$color};
`;

const CommentTitle = styled.div`
    font-weight: bold;
    font-size: larger;
`;

const CommentContent = styled.div`
    margin: 0.8rem 0;
`;

const AuthorWrapper = styled.div`
    display: flex;
`;

const AuthorAvatar = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
`;

const AuthorInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.8rem;
`;

const AuthorName = styled.div`
    font-weight: bold;
`;

const AuthorTitle = styled.div`
    font-size: small;
`;

export default MainComponent;
