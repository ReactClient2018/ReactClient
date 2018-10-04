import App from 'containers';
import {Login} from 'components'

const indexRoutes = [
    { path: "/login", component: Login },
    { path: "/", component: App }
];
export default indexRoutes;
