import styled from 'styled-components';
import { comments } from './comments';
import RatingIndicator from './RatingIndicator';

const MainComponent = () => {
    return (
        <Wrapper>
            <CarouselHeader>
                <HeaderText>What Our Customers Are Saying</HeaderText>
                <ButtonArea>
                    <ArrowButton>{'<'}</ArrowButton>
                    <ArrowButton>{'>'}</ArrowButton>
                </ButtonArea>
            </CarouselHeader>
            <Carousel>
                {comments.map((comment, i) => (
                    <CommentCard
                        key={i}
                        $pastelColor={comment.color.Pastel}
                        $color={comment.color.Standard}
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
                                <AuthorName>{comment.author.name}</AuthorName>
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
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    overflow-x: hidden;
    padding-bottom: 1rem;
`;

const CarouselHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderText = styled.div`
    font-size: xx-large;
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

const Carousel = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const CommentCard = styled.div<CommentCardProps>`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.$pastelColor};
    min-width: 20rem;
    padding: 1rem;
    margin-right: 3rem;
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
