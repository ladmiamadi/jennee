import { useRoutes } from 'react-router-dom'

// project import
import LoginRoutes from '@navigation/routes/LoginRoutes'
import MainRoutes from '@navigation/routes/MainRoutes'

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([MainRoutes, LoginRoutes])
}
