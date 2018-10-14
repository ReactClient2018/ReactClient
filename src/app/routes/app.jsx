import DashboardPage from "views/Dashboard/makerDashboard.jsx";
import ScreeningPrimaryRequestPage from "views/screeningnatural/ScreeningPrimaryRequest.jsx";
import ScreeningNaturalRequestPage from "views/screeningnatural/ScreeningNaturalRequest.jsx";
import ScreeningNaturalReviewPage from "views/screeningnatural/ScreeningNaturalReview.jsx";
import ScreeningDocumentsPage from "views/forms/ScreeningDocuments.jsx";
import TableList from "views/TableList/TableList.jsx";
import {Authorization} from "utils";
import ScreeningRelatedEntityPage from "views/forms/ScreeningRelatedEntity.jsx";
import ScreeningRelatedPersonPage from "views/forms/ScreeningRelatedPerson.jsx";
import ScreeningPrimaryRequestEditPage from "views/screeningEditList/ScreeningPrimaryRequestEdit.jsx";
import ScreeningRelatedPersonEditPage from "views/screeningEditList/ScreeningRelatedPersonEdit.jsx";
import ScreeningRelatedEntityEditPage from "views/screeningEditList/ScreeningRelatedEntityEdit.jsx";
import ScreeningDocumentsEditPage from "views/screeningEditList/ScreeningDocumentsEdit.jsx";

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
    { path: "/screeningDocuments",component: ScreeningDocumentsPage },
    { path: "/screeningPrimaryRequestEdit",component: ScreeningPrimaryRequestEditPage },
    { path: "/screeningRelatedPersonEdit",component: ScreeningRelatedPersonEditPage },
    { path: "/screeningRelatedEntityEdit",component: ScreeningRelatedEntityEditPage },
    { path: "/screeningDocumentsEdit",component: ScreeningDocumentsEditPage },

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
