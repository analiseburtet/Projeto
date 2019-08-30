import Home from './pages/home/Home';
import Contato from './pages/Contato/Contato'


const routesConfig = [
    {
        path:"/",
        component:Home,
        exact: true
    },
    {
        path:"/contato",
        component:Contato,
        exact: true
    }
]
export default routesConfig;