import DashboardPage from "views/Dashboard/MakerDashboard.jsx";
import CheckerDashboardPage from "views/Dashboard/CheckerDashboard.jsx";
import AdminDashboardPage from "views/Dashboard/AdminDashBoard.jsx";
import MainAdminDashboardPage from "views/Dashboard/MainAdminDashboard.jsx";
import ScreeningPrimaryRequestPage from "views/screeningnatural/ScreeningPrimaryRequest.jsx";
import ScreeningNaturalRequestPage from "views/screeningnatural/ScreeningNaturalRequest.jsx";
import ScreeningNaturalResponsePage from "views/screeningnatural/ScreeningNaturalResponse.jsx";
import ScreeningLegalResponsePage from "views/screeninglegal/ScreeningLegalResponse.jsx";
import ScreeningLegalRequestPage from "views/screeninglegal/ScreeningLegalRequest.jsx";
import ScreeningLegalPage from "views/screeninglegal/ScreeningLegal.jsx";
import ScreeningNaturalReviewPage from "views/screeningnatural/ScreeningNaturalReview.jsx";
import ScreeningLegalReviewPage from "views/screeninglegal/ScreeningLegalReview.jsx";
import ScreeningDocumentsPage from "views/forms/ScreeningDocuments.jsx";
import AddUserPage from "views/forms/AddUserRequest.jsx";
import CreateTenantAdminPage from "views/forms/CreateTenantAdmin.jsx";

import CreateTenantPage from "views/forms/CreateNewTenant.jsx";
import TableList from "views/TableList/TableList.jsx";
import { Authorization } from "utils";
import ScreeningRelatedEntityPage from "views/forms/ScreeningRelatedEntity.jsx";
import ScreeningRelatedPersonPage from "views/forms/ScreeningRelatedPerson.jsx";
import ScreeningPrimaryRequestEditPage from "views/screeningEditList/ScreeningPrimaryRequestEdit.jsx";
import ScreeningLegalPrimaryEditPage from "views/screeningEditList/ScreeningLegalPrimaryEdit.jsx";
import ScreeningRelatedPersonEditPage from "views/screeningEditList/ScreeningRelatedPersonEdit.jsx";
import ScreeningRelatedEntityEditPage from "views/screeningEditList/ScreeningRelatedEntityEdit.jsx";
import ScreeningDocumentsEditPage from "views/screeningEditList/ScreeningDocumentsEdit.jsx";
import ScreeningNotificationPage from "views/screeningnatural/ScreeningNotification.jsx";
import viewKYCRequestsPage from "views/forms/viewKYCRequests.jsx";
import ScreeningActionPage from "components/Screening/ScreeningAction.jsx";

import ScreeningNaturalReplyPage from "components/Screening/ScreeningNaturalReply.jsx";
import ScreeningLegalReplyPage from "components/Screening/ScreeningLegalReply.jsx";
import ScreeningActionLegalPage from "components/Screening/ScreeningActionLegal.jsx";

import UsersPage from "components/User/Users.jsx";
import TenantsPage from "components/User/Tenants.jsx";

import PersonalInfoForm from "views/forms/kycForms/personalInfoForm.jsx";
import { Login } from 'components';

import { Dashboard, Person, ContentPaste } from 'material-ui-icons';

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
    }, 
    {
        path: "/mainAdminDashBoard",
        icon: Dashboard,
        component: MainAdminDashboardPage
    }, {
        path: "/screeningRequest",
        component: ScreeningNaturalRequestPage

    },{
        path: "/screeningLRequest",
        component: ScreeningLegalPage
    }, {
        path: "/screeningLegalRequest",
        component: ScreeningLegalRequestPage
    }, {
        path: "/screeningLegalRequest",
        component: ScreeningLegalRequestPage
    }, {
        path: "/addUserRequest",
        component: AddUserPage

    }, {
        path: "/createTenantRequest",
        component: CreateTenantPage
    }, {
        path: "/createTenantAdmin",
        component: CreateTenantAdminPage
    },{
        path:"/screeningPrimaryRequest",
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
        path: "/screeningLegalReview",
        component: ScreeningLegalReviewPage
    }, {
        path: "/screeningDocuments",
        component: ScreeningDocumentsPage
    }, {
        path: "/screeningPrimaryRequestEdit",
        component: ScreeningPrimaryRequestEditPage

    }, {
        path: "/screeningLegalPrimaryEdit",
        component: ScreeningLegalPrimaryEditPage
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
        path: "/screeningNaturalReply",
        component: ScreeningNaturalReplyPage
    },{
        path: "/screeningLegalReply",
        component: ScreeningLegalReplyPage
    },  {
        path: "/screeningActionLegal",
        component: ScreeningActionLegalPage
    },
     {
        path: "/screeningNaturalResponse",
        component: ScreeningNaturalResponsePage
    },{
        path: "/screeningLegalResponse",
        component: ScreeningLegalResponsePage
    }, {
        path: "/viewTenantUsers",
        component: UsersPage
    }, 
    {
        path: "/viewTenants",
        component: TenantsPage
    },
    {
        path: "/viewKYCRequests",
        component: viewKYCRequestsPage
    },
    {
        path: "/personalInfoForm",
        component: PersonalInfoForm
    },
    {
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
