// assets
import { DashboardOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
