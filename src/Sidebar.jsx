import React from 'react';
import "./comp1.css"
import Body from './Body';

const Sidebar = () => {
    return (
        <div>
             <a href='#' id='nav-button' ><span>NAV
            <img src="./logo192.png" alt="" srcset="" /> </span>
            </a>
            <div class="toc-wrapper" >
            <img src="logo512.png" alt="" className='logo' style={{height:"30px", width:"30px"}}/>
            <ul id='toc' className='toc-list-h1'>
                <li>
                <a href="#public-rest-api-for-INRX" class="toc-h1 toc-link  " data-title="Public Rest API for INRX">Public Rest API for INRX</a>
                <ul className='toc-list-h2 active' style={{display:"block"}}>
                    <li>
                    <a href="#introduction" className="toc-h2 toc-link" data-title="Introduction">Introduction</a>
                    </li>
                    <li><a href="#api-key-setup" class="toc-h2 toc-link" data-title="API Key Setup">API Key Setup</a></li>
                    <li><a href="#api-key-restrictions" class="toc-h2 toc-link" data-title="API Key Restrictions">API Key Restrictions</a></li>
                    <li><a href="#postman-collections" class="toc-h2 toc-link" data-title="Postman Collections">Postman Collections</a></li>
                    <li><a href="#contact-us" class="toc-h2 toc-link" data-title="Contact Us">Contact Us</a></li>
                    <li><a href="#api-third-party-integrations" class="toc-h2 toc-link" data-title="API third party Integrations">API third party Integrations</a></li>
                    <li><a href="#general-api-information" class="toc-h2 toc-link" data-title="General API Information">General API Information</a></li>
                    <li><a href="#http-return-codes" class="toc-h2 toc-link" data-title="HTTP Return Codes">HTTP Return Codes</a></li>
                    <li><a href="#error-codes-and-messages" class="toc-h2 toc-link" data-title="Error Codes and Messages">Error Codes and Messages</a></li>
                    <li><a href="#general-information-on-endpoints" class="toc-h2 toc-link" data-title="General Information on Endpoints">General Information on Endpoints</a></li>
                    <li><a href="#limits" class="toc-h2 toc-link" data-title="Limits">Limits</a></li>
                </ul>
                </li>
                <li>
                <a href="#endpoint-security-type" class="toc-h1 toc-link" data-title="Endpoint security type">Endpoint security type</a>
                </li>
                <ul className='toc-list-h2' style={{display:"none"}}>
                    <li><a href="#timing-security" class="toc-h2 toc-link" data-title="Timing security">Timing security</a></li>
                    <li><a href="#signed-endpoint-examples-for-post-sapi-v1-order" class="toc-h2 toc-link" data-title="SIGNED Endpoint Examples for POST /sapi/v1/order">SIGNED Endpoint Examples for POST /sapi/v1/order</a></li>
                    <li><a href="#example-1-as-a-request-body" class="toc-h2 toc-link" data-title="Example 1: As a request body">Example 1: As a request body</a></li>
                    <li><a href="#example-2-as-a-query-string" class="toc-h2 toc-link" data-title="Example 2: As a query string">Example 2: As a query string</a></li>
                </ul>
                <li><a href="#public-api-endpoints" class="toc-h1 toc-link" data-title="Public API Endpoints">Public API Endpoints</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                    <li><a href="#enum-definitions" class="toc-h2 toc-link" data-title="ENUM definitions">ENUM definitions</a></li>
                </ul>
                </li>
                <li>
                <a href="#general-endpoints" class="toc-h1 toc-link" data-title="General endpoints">General endpoints</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                    <li><a href="#test-connectivity" class="toc-h2 toc-link" data-title="Test connectivity">Test connectivity</a></li>
                    <li><a href="#system-status" class="toc-h2 toc-link" data-title="System status">System status</a></li>
                    <li><a href="#check-server-time" class="toc-h2 toc-link" data-title="Check server time">Check server time</a></li>
                    <li><a href="#exchange-info" class="toc-h2 toc-link" data-title="Exchange Info">Exchange Info</a></li>
                </ul>
                </li>
                <li>
                <a href="#market-data-endpoints" class="toc-h1 toc-link" data-title="Market Data endpoints">Market Data endpoints</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                <li><a href="#24hr-tickers-price-change-statistics" class="toc-h2 toc-link" data-title="24hr tickers price change statistics">24hr tickers price change statistics</a></li>
                <li><a href="#24hr-ticker-price-change-statistics" class="toc-h2 toc-link" data-title="24hr ticker price change statistics">24hr ticker price change statistics</a></li>
                <li><a href="#order-book" class="toc-h2 toc-link" data-title="Order book">Order book</a></li>
                <li><a href="#recent-trades-list" class="toc-h2 toc-link" data-title="Recent trades list">Recent trades list</a></li>
                <li><a href="#old-trade-lookup-market_data" class="toc-h2 toc-link" data-title="Old trade lookup (MARKET_DATA)">Old trade lookup (MARKET_DATA)</a></li>
                </ul>
                </li>
                <li><a href="#trading-endpoints" class="toc-h1 toc-link" data-title="Trading Endpoints">Trading Endpoints</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                    <li><a href="#new-order-trade" class="toc-h2 toc-link" data-title="New order (TRADE)">New order (TRADE)</a></li>
                    <li><a href="#test-new-order-trade" class="toc-h2 toc-link" data-title="Test new order (TRADE)">Test new order (TRADE)</a></li>
                    <li><a href="#query-order-user_data" class="toc-h2 toc-link" data-title="Query order (USER_DATA)">Query order (USER_DATA)</a></li>
                    <li><a href="#current-open-orders-user_data" class="toc-h2 toc-link" data-title="Current open orders (USER_DATA)">Current open orders (USER_DATA)</a></li>
                    <li><a href="#all-orders-user_data" class="toc-h2 toc-link" data-title="All orders (USER_DATA)">All orders (USER_DATA)</a></li>
                    <li><a href="#cancel-order-trade" class="toc-h2 toc-link" data-title="Cancel order (TRADE)">Cancel order (TRADE)</a></li>
                    <li><a href="#cancel-all-open-orders-on-a-symbol-trade" class="toc-h2 toc-link" data-title="Cancel All Open Orders on a Symbol (TRADE)">Cancel All Open Orders on a Symbol (TRADE)</a></li>
                    <li><a href="#my-trades-trade" class="toc-h2 toc-link" data-title="My Trades (TRADE)">My Trades (TRADE)</a></li>
                </ul>
                </li>
                <li><a href="#account-endpoints" class="toc-h1 toc-link" data-title="Account Endpoints">Account Endpoints</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                 <li><a href="#account-information-user_data" class="toc-h2 toc-link" data-title="Account information (USER_DATA)">Account information (USER_DATA)</a></li>
                 <li><a href="#fund-details-user_data" class="toc-h2 toc-link" data-title="Fund details (USER_DATA)">Fund details (USER_DATA)</a></li>
                </ul>
                </li>
                <li>
                <a href="#websocket-auth-tokens" class="toc-h1 toc-link" data-title="Websocket Auth Tokens">Websocket Auth Tokens</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                    <li><a href="#create-auth-token" class="toc-h2 toc-link" data-title="Create Auth Token">Create Auth Token</a></li>
                </ul>
                </li>
                <a href="#websocket-market-streams" class="toc-h1 toc-link" data-title="Websocket Market Streams">Websocket Market Streams</a>
                <ul className='toc-list-h2' style={{display:"non"}}>
                    <li><a href="#live-subscribing-unsubscribing-to-streams" class="toc-h2 toc-link" data-title="Live Subscribing/Unsubscribing to streams">Live Subscribing/Unsubscribing to streams</a></li>
                    <li><a href="#error-messages" class="toc-h2 toc-link" data-title="Error Messages">Error Messages</a></li>
                    <li><a href="#trade-streams" class="toc-h2 toc-link" data-title="Trade Streams">Trade Streams</a></li>
                    <li><a href="#all-market-tickers-stream" class="toc-h2 toc-link" data-title="All Market Tickers Stream">All Market Tickers Stream</a></li>
                    <li> <a href="#depth-stream" class="toc-h2 toc-link" data-title="Depth Stream">Depth Stream</a></li>
                    <li><a href="#account-update" class="toc-h2 toc-link" data-title="Account Update">Account Update</a></li>
                    <li><a href="#order-update" class="toc-h2 toc-link" data-title="Order Update">Order Update</a></li>
                    <li><a href="#trade-update" class="toc-h2 toc-link" data-title="Trade Update">Trade Update</a></li>
                </ul>
            </ul>
        </div>
    
        </div>
    );
};

export default Sidebar;