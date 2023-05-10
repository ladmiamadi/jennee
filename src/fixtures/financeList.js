import Logo from '@assets/images/finance/eventLogo.png'
import JeneeLogo from '@assets/svg/mainLayout/jenee-logo.svg'
export const FINANCE_LIST = {
    organizationName: 'JeNee',
    logo: JeneeLogo,
    accountNumber: '**** 3241 ',
    accountBalance: '32,456.00',
    totalRevenues: '32,456.00',
    totalExpenses: '12,462.00',
    averageRevenuesPerEvent: '8,742',
    history: [
        {
            eventName: 'Boum Boum',
            organizationLogo: Logo,
            collection: 'Encaissement prévu : dans 4 jours',
            total: '120000',
            currentBalance: '90000'
        },
        {
            eventName: 'Cha Cha',
            organizationLogo: Logo,
            collection: 'Encaissé : il y à 14 jours',
            total: '12000',
            currentBalance: '12000'
        }
    ],
    lastExpensesAndRevenues: [
        {
            type: 'VENTE DE BILLET',
            date: '21/11/2022',
            event: 'Saint Valentin Party',
            status: 'RÉGLÉ',
            amount: '25 €'
        },
        {
            type: 'VENTE DE BILLET',
            date: '21/11/2022',
            event: 'Saint Valentin Party',
            status: 'RÉGLÉ',
            amount: '25 €'
        },
        {
            type: 'VENTE DE BILLET',
            date: '21/11/2022',
            event: 'Saint Valentin Party',
            status: 'RÉGLÉ',
            amount: '25 €'
        }
    ],
    detailsRevenues: [
        { name: 'Billetterie', percentage: 60, color: '#DCDFF8' },
        { name: 'Boisson', percentage: 30, color: '#F9ECED' },
        { name: 'Autres', percentage: 10, color: '#E8F4F0' }
    ]
}