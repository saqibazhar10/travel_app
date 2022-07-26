import React from 'react';
import AdminGraph from './AdminGraph';
import Cardlist from './CardList';
import Bcards from './Bcards';
const Overview = () => {
    return (
        <div>
            <div>
                <Cardlist/>
            </div>
            <div>
                <AdminGraph/>
            </div>
            <div>
                <Bcards/>
            </div>

        </div>
    );
}

export default Overview;
