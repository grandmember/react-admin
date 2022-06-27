import React, { useEffect, useState } from 'react';
import { useGetIdentity, Resource, ListGuesser } from 'react-admin';
import dataProvider from '../dataProvider';
import { SuperuserDashboard } from '../superuserDashboard';
import { CustomerDashboard } from '../customerDashboard';

const Dashboard = () => {
    const [userRole, setUserRole] = useState<any>();
    const { identity, isLoading: identityLoading } = useGetIdentity();

    useEffect(() => {
        if (identity) {
            setUserRole(identity.userRole);
        }
    }, [identity]);

    if (userRole === 'SUPERUSER') {
        if (identityLoading) return <>Loading...</>;
        // return <SuperuserDashboard />;
        <>
            <Resource name="products" list={ListGuesser} />
        </>;
    }

    if (identityLoading) return <>Loading...</>;

    return (
        <>
            <Resource name="products" list={ListGuesser} />
            {/* {dataProvider
                .getOne('products', {
                    id: '460c53df-cdaa-4bec-b6bc-3b5cfb7eba9c',
                })
                .then(product => {
                    console.log('product', product);
                    <>${product.data}</>;
                })
                .catch(error => {
                    console.log('error', error);
                })} */}

            {/* <CustomerDashboard /> */}
        </>
    );
};

export default Dashboard;
