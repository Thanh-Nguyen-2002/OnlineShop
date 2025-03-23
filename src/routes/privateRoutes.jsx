import React, { Children } from 'react';
import AdminHome from '../pages/Admin/AdminHomePage'
import CustomerHome from '../pages/Customer/CustomerHomePage';
import OwnerHome from '../pages/ShopOwner/ShopOwnerHomePage'
import ManagerUser from '../pages/Admin/ManagerUser';
import ManagerProduct from '../pages/ShopOwner/ManagerProduct';
import ListProduct from '../pages/Customer/ListProduct';

const privateRoutes = {
    Customer: [
        {
            path : "/customer",
            element : <CustomerHome />,
            children : [
                {
                    path : "products",
                    element : <ListProduct />
                }
            ]
        }
    ],
    Admin: [
        {
            path : "/admin",
            element : <AdminHome />,
            children: [
                {
                    path : "users",
                    element : <ManagerUser />
                },
            ]
        }
    ],
    ShopOwner: [
        {
            path : "/owner",
            element : <OwnerHome />,
            children : [
                {
                    path : "products",
                    element  : <ManagerProduct />
                }
            ]
        }
    ]
}

export default privateRoutes;