interface Comment {
    rating: number; // from 1 to 5
    title: string;
    content: string;
    author: Author;
    color: Color;
}

interface Author {
    name: string;
    title: string;
    avatarUrl: string;
}

interface Color {
    Standard: string;
    Pastel: string;
}

interface ColorPalette {
    green: Color;
    pink: Color;
    blue: Color;
    purple: Color;
    orange: Color;
    red: Color;
    brown: Color;
}

const colors: ColorPalette = {
    green: {
        Standard: '#5ab298',
        Pastel: '#def4ed',
    },
    pink: {
        Standard: '#fe6b7d',
        Pastel: '#fcdde1',
    },
    blue: {
        Standard: '#6ba7fe',
        Pastel: '#cfddff',
    },
    purple: {
        Standard: '#800080',
        Pastel: '#D1B3FF',
    },
    orange: {
        Standard: '#FFA500',
        Pastel: '#FFD1B3',
    },
    red: {
        Standard: '#FF0000',
        Pastel: '#FFB3B3',
    },
    brown: {
        Standard: '#A52A2A',
        Pastel: '#D9B3A1',
    },
};

export const comments: Comment[] = [
    {
        rating: 5,
        title: 'Excellent Product!',
        content:
            'This has been a game-changer. The quality is top-notch and well worth the price.',
        author: {
            name: 'John Doe',
            title: 'Product Manager',
            avatarUrl: 'john.png',
        },
        color: colors.blue,
    },
    {
        rating: 4,
        title: 'Very Good, But Could Be Improved',
        content:
            "I'm impressed with the features, but I feel a few improvements could make it even better.",
        author: {
            name: 'Jane Smith',
            title: 'Software Engineer',
            avatarUrl: 'jane.png',
        },
        color: colors.brown,
    },
    {
        rating: 3,
        title: 'Decent, but Has Issues',
        content:
            "Overall, it's okay, but there were a few bugs that affected my experience.",
        author: {
            name: 'Alex Johnson',
            title: 'UX Designer',
            avatarUrl: 'alex.png',
        },
        color: colors.green,
    },
    {
        rating: 5,
        title: 'Amazing Experience',
        content:
            "I've had a great experience with this product. The support team is also very responsive.",
        author: {
            name: 'Sarah Lee',
            title: 'Customer Support',
            avatarUrl: 'sarah.png',
        },
        color: colors.orange,
    },
    {
        rating: 2,
        title: 'Not Satisfied',
        content:
            'Unfortunately, this product did not meet my expectations. It felt rushed and incomplete.',
        author: {
            name: 'Michael Brown',
            title: 'Marketing Specialist',
            avatarUrl: 'michael.png',
        },
        color: colors.pink,
    },
    {
        rating: 4,
        title: 'Good Value for Money',
        content:
            'It delivers as promised, and the price is reasonable for the features it provides.',
        author: {
            name: 'Linda Green',
            title: 'Project Manager',
            avatarUrl: 'linda.png',
        },
        color: colors.purple,
    },
    {
        rating: 1,
        title: 'Very Disappointed',
        content:
            'I encountered a lot of issues. The product didn’t work as advertised for me.',
        author: {
            name: 'David Wilson',
            title: 'Freelancer',
            avatarUrl: 'david.png',
        },
        color: colors.red,
    },
    {
        rating: 5,
        title: 'Highly Recommend',
        content:
            "Exceeded my expectations! It's incredibly well-made and reliable.",
        author: {
            name: 'Rachel Adams',
            title: 'Operations Manager',
            avatarUrl: 'rachel.png',
        },
        color: colors.orange,
    },
    {
        rating: 3,
        title: 'Mixed Feelings',
        content:
            'Some parts of the product are fantastic, but others need a lot of improvement.',
        author: {
            name: 'Tom Clark',
            title: 'Business Analyst',
            avatarUrl: 'tom.png',
        },
        color: colors.blue,
    },
    {
        rating: 4,
        title: 'Very Happy with My Purchase',
        content:
            "I'm quite satisfied. It meets most of my needs and has great functionality.",
        author: {
            name: 'Emma Davis',
            title: 'HR Specialist',
            avatarUrl: 'emma.png',
        },
        color: colors.green,
    },
];
