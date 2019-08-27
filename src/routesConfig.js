import Home from './pages/home/Home';
import User from './pages/user/User'
import Contato from './pages/Contato/Contato'


const routesConfig = [
    {
        path:"/",
        component:Home,
        exact: true
    },
    {
        path:"/user",
        component:User,
        exact: true
    },
    {
        path:"/contato",
        component:Contato,
        exact: true
    }
]
export default routesConfig;