import React from 'react';
import UpdateCompany from '../../../../src/components/admin/Company/UpdateCompany/UpdateCompany';
import { adminAuth } from '../../../../__lib__/helpers/requireAuthentication';

const update = () => {
    return (
        <>
            <UpdateCompany />
        </>
    );
};

export default update;

export const getServerSideProps = adminAuth(context => {

    return {
        props: {}


    }
})