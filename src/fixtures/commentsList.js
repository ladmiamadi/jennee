export const COMMENTS_LIST = [
    {
        id: 1,
        user: 'Emma Lecoeur',
        comment: 'Super cette soirée sera inoubliable, commentaire de test 1',
        likes: 142,
        replies: [
            {
                id: 1,
                message: "Réponse de test1, Ouais ça va etre très cool, on va s'amuser ",
                user: 'Lindsey.nagley',
                likes: 19
            },
            {
                id: 2,
                message: 'Réponse de test2',
                user: 'Lindsey.nagley',
                likes: 19
            },
            {
                id: 3,
                message: 'Réponse de test3',
                likes: 19
            }
        ]
    },
    {
        id: 2,
        user: 'Emma Lecoeur',
        comment: 'Commentaire de test2',
        likes: 142,
        replies: [
            {
                id: 1,
                message: 'Réponse de test1',
                user: 'Lindsey.nagley',
                likes: 19
            },
            {
                id: 2,
                message: 'Réponse de test2',
                user: 'Lindsey.nagley',
                likes: 19
            },
            {
                id: 3,
                message: 'Réponse de test3',
                user: 'Lindsey.nagley',
                likes: 19
            },
            {
                id: 4,
                message: 'Réponse de test4',
                user: 'Lindsey.nagley',
                likes: 19
            }
        ]
    },
    {
        id: 3,
        user: 'Emma Lecoeur',
        comment: 'Commentaire de test3',
        likes: 142,
        replies: []
    }
]
