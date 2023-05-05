import AssoLogo from '@assets/svg/profile/logo-asso.svg'
import Banner from '@assets/images/organization/profile/banner.png'
import AvatarPink from '@assets/images/organization/profile/avatar1.png'
import AvatarBlue from '@assets/images/organization/profile/avatar2.png'

export const ORGANIZATIONS_LIST = [
    {
        id: 1,
        name: 'FE-DEV',
        picture: AssoLogo,
        banner: Banner,
        profilePicture: AssoLogo,
        interactions: '12,6 K',
        siretNumber: '552 178 639 00132',
        description:
            'Dans ce grand club parisien, la 33e édition de l’une des plus célèbres soirées  \n' +
            'dauphinoises revient avec une une line-up généraliste et actuelle, pour voguer \n' +
            'entre les 12 signes du  zodiaque… Le moment pour tout les étudiants de profiter\n' +
            'd’une soirée memorable Dauphinoises revient avec une une line-up généraliste\n' +
            'et actuelle, pour voguer.',
        currentEvents: 4,
        passedEvents: 22,
        receivedTransfers: 20645,
        pendingTransfers: 10200,
        city: 'Paris',
        year: '2023 - 2024',
        role: 'Fédération',
        members: [
            {
                id: 1,
                name: 'Jules Andrieux',
                role: 'Communication',
                avatar: AvatarPink
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarBlue
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarPink
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarBlue
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarPink
            }
        ],
        admins: [
            {
                id: 1,
                name: 'Jules Andrieux',
                role: 'Communication',
                avatar: AvatarPink
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarBlue
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarPink
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarBlue
            },
            {
                id: 2,
                name: 'Louka Perchais',
                role: 'Partenariats',
                avatar: AvatarPink
            }
        ],
        bankingInformations: {
            name: 'Roman Cavarec',
            BIC: 'SG478-BC',
            RIB: 'FR 7630 0010 0794 1234 5678 90185'
        }
    }
]
