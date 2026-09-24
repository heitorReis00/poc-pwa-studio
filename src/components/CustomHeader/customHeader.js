import React, { Fragment, Suspense } from 'react';
import logo from '../../assets/logo.svg';
import { Link, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import NavTrigger from '@magento/venia-ui/lib/components/Header/navTrigger';
import SearchTrigger from '@magento/venia-ui/lib/components/Header/searchTrigger';
import AccountTrigger from '@magento/venia-ui/lib/components/Header/accountTrigger';
import CartTrigger from '@magento/venia-ui/lib/components/Header/cartTrigger';
import StoreSwitcher from '@magento/venia-ui/lib/components/Header/storeSwitcher';
import CurrencySwitcher from '@magento/venia-ui/lib/components/Header/currencySwitcher';
import OnlineIndicator from '@magento/venia-ui/lib/components/Header/onlineIndicator';
import MegaMenu from '@magento/venia-ui/lib/components/MegaMenu';

import { IoBagHandleOutline } from 'react-icons/io5';
import { RiMore2Line } from 'react-icons/ri';
import { HiBars3 } from 'react-icons/hi2';

const SearchBar = React.lazy(() =>
    import('@magento/venia-ui/lib/components/SearchBar')
);

const CustomHeader = () => {
    const {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        isSearchOpen,
        searchRef,
        searchTriggerRef
    } = useHeader();

    const { formatMessage } = useIntl();
    const title = formatMessage({
        id: 'logo.title',
        defaultMessage: 'Starbelly'
    });

    const searchBar = isSearchOpen ? (
        <Suspense fallback={<div>Carregando busca...</div>}>
            <Route>
                <SearchBar isOpen={isSearchOpen} ref={searchRef} />
            </Route>
        </Suspense>
    ) : null;

    return (
        <Fragment>
            <div className=" bg-white/90 fixed py-3 backdrop-blur-md fixed z-50 w-full">
                <div className=" flex justify-center">
                    <header className=" w-full max-w-[1220px] flex items-center justify-between">
                        <NavTrigger />

                        <div>
                            <Link
                                aria-label={title}
                                to={resourceUrl('/')}
                                className="mx-auto"
                            >
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-10 cursor-pointer"
                                />
                            </Link>
                        </div>

                        <div>
                            <MegaMenu />
                        </div>

                        <div className="flex items-center gap-4">
                            <SearchTrigger
                                onClick={handleSearchTriggerClick}
                                ref={searchTriggerRef}
                            />
                            <AccountTrigger />
                            <CartTrigger />
                        </div>
                    </header>
                </div>
            </div>

            {searchBar}
            <OnlineIndicator
                hasBeenOffline={hasBeenOffline}
                isOnline={isOnline}
            />
        </Fragment>
    );
};

export default CustomHeader;
