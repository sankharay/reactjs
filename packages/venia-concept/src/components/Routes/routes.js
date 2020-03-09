import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';

const CartPage = lazy(() => import('@magento/venia-ui/lib/components/CartPage'));
const CheckoutPage = lazy(() => import('@magento/venia-ui/lib/components/CheckoutPage'));
const CreateAccountPage = lazy(() => import('@magento/venia-ui/lib/components/CreateAccountPage'));
const Search = lazy(() => import('@magento/venia-ui/lib/RootComponents/Search'));

const Routes = () => {
    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route exact path="/foo.html" render={() => <h3>Hello World JSX.</h3>}/>
                <Route exact path="/search.html">
                    <Search />
                </Route>
                <Route exact path="/create-account">
                    <CreateAccountPage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/checkout">
                    <CheckoutPage />
                </Route>
                <Route>
                    <MagentoRoute />
                </Route>
                <Route exact path="/foo.html" render={() => <h3>Hello World JSX.</h3>} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
