import DashboardPage from "views/Dashboard/MakerDashboard.jsx";
import CheckerDashboardPage from "views/Dashboard/CheckerDashboard.jsx";
import AdminDashboardPage from "views/Dashboard/AdminDashBoard.jsx";
import ScreeningPrimaryRequestPage from "views/screeningnatural/ScreeningPrimaryRequest.jsx";
import ScreeningNaturalRequestPage from "views/screeningnatural/ScreeningNaturalRequest.jsx";
import ScreeningNaturalReviewPage from "views/screeningnatural/ScreeningNaturalReview.jsx";
import ScreeningDocumentsPage from "views/forms/ScreeningDocuments.jsx";
import AddUserPage from "views/forms/AddUserRequest.jsx";
import TableList from "views/TableList/TableList.jsx";
import {Authorization} from "utils";
import ScreeningRelatedEntityPage from "views/forms/ScreeningRelatedEntity.jsx";
import ScreeningRelatedPersonPage from "views/forms/ScreeningRelatedPerson.jsx";
import ScreeningPrimaryRequestEditPage from "views/screeningEditList/ScreeningPrimaryRequestEdit.jsx";
import ScreeningRelatedPersonEditPage from "views/screeningEditList/ScreeningRelatedPersonEdit.jsx";
import ScreeningRelatedEntityEditPage from "views/screeningEditList/ScreeningRelatedEntityEdit.jsx";
import ScreeningDocumentsEditPage from "views/screeningEditList/ScreeningDocumentsEdit.jsx";
import ScreeningNotificationPage from "views/screeningnatural/ScreeningNotification.jsx";
import ScreeningActionPage from "components/Screening/ScreeningAction.jsx";
import {Login} from 'components';

import {Dashboard, Person, ContentPaste} from 'material-ui-icons';
const ADMIN = ['ADMIN'];
const Admin = Authorization(ADMIN);

const adminRoutes = [
    {
        path: "/makerDashBoard",
        navbarName: "Admin Dashboard",
        icon: Dashboard,
        component: DashboardPage
    }, {
        path: "/checkerDashBoard",
        icon: Dashboard,
        component: CheckerDashboardPage
    }, {
        redirect: true,
        path: "/",
        to: "/makerDashBoard",
        navbarName: "Redirect"
    }
];

const userRoutes = [
    {
        path: "/makerDashBoard",
        navbarName: "Admin Dashboard",
        icon: Dashboard,
        component: DashboardPage
    }, {
        path: "/checkerDashBoard",
        icon: Dashboard,
        component: CheckerDashboardPage
    }, {
        path: "/adminDashBoard",
        icon: Dashboard,
        component: AdminDashboardPage
    }, {
        path: "/screeningRequest",
        component: ScreeningNaturalRequestPage
    }, {
        path: "/addUserRequest",
        component: AddUserPage
    }, {
        path: "/screeningPrimaryRequest",
        component: ScreeningPrimaryRequestPage
    }, {
        path: "/screeningRelatedEntity",
        component: ScreeningRelatedEntityPage
    }, {
        path: "/screeningRelatedPerson",
        component: ScreeningRelatedPersonPage
    }, {
        path: "/screeningNaturalReview",
        component: ScreeningNaturalReviewPage
    }, {
        path: "/screeningDocuments",
        component: ScreeningDocumentsPage
    }, {
        path: "/screeningPrimaryRequestEdit",
        component: ScreeningPrimaryRequestEditPage
    }, {
        path: "/screeningRelatedPersonEdit",
        component: ScreeningRelatedPersonEditPage
    }, {
        path: "/screeningRelatedEntityEdit",
        component: ScreeningRelatedEntityEditPage
    }, {
        path: "/screeningDocumentsEdit",
        component: ScreeningDocumentsEditPage
    }, {
        path: "/screeningNotification",
        component: ScreeningNotificationPage
    }, {
        path: "/screeningAction",
        component: ScreeningActionPage
    }, {
        redirect: true,
        path: "/",
        to: "/makerDashBoard",
        navbarName: "Redirect"
    }
];

const appRoutes = (() => {
    if (ADMIN.indexOf(localStorage.getItem("roles")) > -1) {
        return userRoutes;
    } else {
        return userRoutes;
    }

})();

export default appRoutes;
