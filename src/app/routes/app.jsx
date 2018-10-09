import DashboardPage from "views/Dashboard/makerDashboard.jsx";
import ScreeningPrimaryRequestPage from "views/screeningnatural/ScreeningPrimaryRequest.jsx";
import ScreeningNaturalRequestPage from "views/screeningnatural/ScreeningNaturalRequest.jsx";
import ScreeningNaturalReviewPage from "views/screeningnatural/ScreeningNaturalReview.jsx";
import TableList from "views/TableList/TableList.jsx";
import {Authorization} from "utils";
import ScreeningRelatedEntityPage from "views/forms/ScreeningRelatedEntity.jsx";
import ScreeningRelatedPersonPage from "views/forms/ScreeningRelatedPerson.jsx";


import {
    Dashboard, Person, ContentPaste
} from 'material-ui-icons';
const ADMIN = ['ADMIN'];
const Admin = Authorization(ADMIN);


const adminRoutes = [
    { path: "/makerDashBoard", navbarName: "Admin Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/table", avbarName: "Manage User", icon: ContentPaste, component:Admin(TableList)  },
    { redirect: true, path: "/", to: "/makerDashBoard", navbarName: "Redirect" }
];

const userRoutes = [
    { path: "/makerDashBoard", navbarName: "Admin Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/screeningRequest",component: ScreeningNaturalRequestPage },
    { path: "/screeningPrimaryRequest",component: ScreeningPrimaryRequestPage },
    { path: "/screeningRelatedEntity",component: ScreeningRelatedEntityPage },
    { path: "/screeningRelatedPerson",component: ScreeningRelatedPersonPage },
    { path: "/screeningNaturalReview",component: ScreeningNaturalReviewPage },
    { redirect: true, path: "/", to: "/makerDashBoard", navbarName: "Redirect" }
];

const appRoutes = (() => {
    if ( ADMIN.indexOf(localStorage.getItem("roles")) > -1){
        return adminRoutes;
    }else{
        return userRoutes;
    }

})();

export default appRoutes;
