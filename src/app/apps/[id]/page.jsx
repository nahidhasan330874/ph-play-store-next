import React from 'react';

const  AppDetailsPage = async ({ params}) => {

    const { id } = await params;

    console.log( id, 'params')


    return (
        <div>
            apps Details Page
        </div>
    );
};

export default  AppDetailsPage;