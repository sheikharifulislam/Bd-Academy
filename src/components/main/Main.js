import React from 'react';
import ShopAndCartContainer from './shop-and-cart-container/ShopAndCartContainer';
import TotalBudget from './totalBudget/TotalBudget';

const Main = () => {
    return (
        <div>
            <TotalBudget></TotalBudget>
            <ShopAndCartContainer></ShopAndCartContainer>
        </div>
    );
};

export default Main;