import styled from 'styled-components';
import StarIcon from './StarIcon';

interface RatingIndicatorProps {
    color: string;
    rating: number;
}

const RatingIndicator = ({ color, rating }: RatingIndicatorProps) => (
    <Wrapper>
        {Array.from({ length: rating }, (_, i) => (
            <StarIcon color={color} key={i} />
        ))}
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
`;

export default RatingIndicator;
