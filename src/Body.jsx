import React from 'react';
import "./comp1.css"

const Body = () => {
    return (
        <div className='page-wrapper'>
            <div className='dark-box'></div>
            <div class="content">
        <h1 id="public-rest-api-for-wazirx">Public Rest API for INRX</h1><h2 id="introduction">Introduction</h2>
<p>This document details the use of Wazirx’s REST API for spot exchange. This helps you automate trades in real-time, stream live crypto rates and build other integrations for your trading journey.</p>

<p>Our REST API is organized into publicly accessible endpoints (market data, exchange status, etc.), and private authenticated endpoints (trading, funding, user data) which require requests to be signed.</p>
<h2 id="api-key-setup">API Key Setup</h2>
<ul>
<li>Some endpoints will require an API Key. Please refer to <a href="https://wazirx.com/settings/keys">this page</a> regarding API key creation.</li>
<li>Once API key is created, it is recommended to set IP restrictions on the key for security reasons.</li>
<li><strong>Never share your API key/secret key to ANYONE.</strong>
If the API keys were accidentally shared, please delete them immediately and create a new key.</li>
</ul>
<h2 id="api-key-restrictions">API Key Restrictions</h2>
<ul>
<li>The default settings of the API key enable you to a Read-Only key. You can enable trading rights by explicity enabling SPOT Trade option under permissions for a key</li>
<li>You can create 5 api keys for an account</li>
</ul>
<h3 id="spot-account">Spot Account</h3>
<p>A <code>SPOT</code> account is provided by default upon creation of a INRX Account.</p>
<h3 id="python-connector">Python connector</h3>
<p>This is a lightweight library that works as a connector to INRX public API, written in Python.
- <a href="https://github.com/INRX/wazirx-connector-python">Python connector</a></p>
<h3 id="ruby-connector">Ruby connector</h3>
<p>This is a lightweight library that works as a connector to INRX public API, written in Ruby.
- <a href="https://github.com/INRX/wazirx-connector-ruby">Ruby connector</a></p>
<h2 id="postman-collections">Postman Collections</h2>
<p>There is now a Postman collection containing the API endpoints for quick and easy use.
This is recommended for new users who want to get a quick-start into using the API.
For more information please refer to this page: <a href="https://github.com/wazirx/wazirx-api-postman">INRX API Postman</a></p>
<h2 id="contact-us">Contact Us</h2>
<ul>
<li>INRX Email

<ul>
<li>Please email us at api@wazirx.com</li>
</ul></li>
<li><a href="https://t.me/joinchat/OdYWSwl_FgtkN2U6">INRX API Telegram Group</a>

<ul>
<li>For any general questions about the API not covered in the documentation.</li>
</ul></li>
</ul>
<h2 id="api-third-party-integrations">API third party Integrations</h2>
<p>These integrations will help you in increasing your speed to build bots</p>

<ul>
<li><p><strong>CCXT connector</strong></p>

<ul>
<li>CCXT is a SDK provider and you may access the INRX API through CCXT. For more information, please visit: <a href="https://ccxt.trade"> https://ccxt.trade</a></li>
</ul></li>
<li><p><strong>Hummingbot</strong></p>

<ul>
<li>For traders who want to get started with bot trading but are unsure how to use APIs, Hummingbot is the perfect solution as it is an automated trading bot with inbuilt trading strategies and automated market making services.
Please <a href="https://hummingbot.org/">refer here</a> on how to get your Hummingbot trading set up.</li>
<li><strong>Disclaimer: INRX does not endorse nor will be held liable for the usage of the any of the third party platforms and any resulting financial losses, if any.</strong></li>
</ul></li>
</ul>
<h2 id="general-api-information">General API Information</h2>
<ul>
<li>The base endpoint is: <strong>https://api.wazirx.com</strong></li>
<li>All endpoints return either a JSON object or array.</li>
<li>All time and timestamp related fields are in <strong>milliseconds</strong>.</li>
</ul>
<h2 id="http-return-codes">HTTP Return Codes</h2>
<ul>
<li>HTTP <code>4XX</code> return codes are used for malformed requests;
the issue is on the sender's side.</li>
<li>HTTP <code>403</code> return code is used when the WAF Limit (Web Application Firewall) has been violated.</li>
<li>HTTP <code>429</code> return code is used when breaking a request rate limit.</li>
<li>HTTP <code>418</code> return code is used when an IP has been auto-banned for continuing to send requests after receiving <code>429</code> codes.</li>
<li>HTTP <code>5XX</code> return codes are used for internal errors; the issue is on
INRX's side.
It is important to <strong>NOT</strong> treat this as a failure operation; the execution status is
<strong>UNKNOWN</strong> and could have been a success.</li>
</ul>
<h2 id="error-codes-and-messages">Error Codes and Messages</h2>
<blockquote>
<p>Sample Payload below:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"code"</span><span class="p">:</span><span class="w"> </span><span class="mi">-1121</span><span class="p">,</span><span class="w">
  </span><span class="nl">"message"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Invalid symbol."</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<ul>
<li>If there is an error, the API will return an error with a message of the reason.</li>
<li>Specific error codes and messages defined in Error Codes.</li>
<li>Any endpoint can return an ERROR</li>
</ul>
<h2 id="general-information-on-endpoints">General Information on Endpoints</h2>
<ul>
<li>For <code>GET</code> endpoints, parameters must be sent as a <code>query string</code>.</li>
<li>For <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> endpoints, the parameters must be sent as a
<code>request body</code> with content type <code>application/x-www-form-urlencoded</code>.</li>
<li>Parameters may be sent in any order.</li>
<li>If a parameter sent in both the <code>query string</code> and <code>request body</code>, the <code>query string</code> parameter will be used.</li>
</ul>
<h2 id="limits">Limits</h2><h3 id="general-info-on-limits">General Info on Limits</h3>
<ul>
<li>Limits are set on specific api endpoints. These will be mentioned in the description of the endpoint. For e.g the Ping api will have a limit of 1 request/sec while Place order api will have a limit of 10 requests/sec</li>
<li>A 429 will be returned when rate limit is violated.</li>
<li><strong>The limits on the API are based on the API keys.</strong></li>
<li>We recommend using the websocket for getting data as much as possible, as this will not count to the request rate limit.</li>
</ul>
<h3 id="ip-limits">IP Limits</h3>
<ul>
<li>When a 429 is received, it's your obligation as an API to back off and not spam the API.</li>
<li><strong>Repeatedly violating rate limits and/or failing to back off after receiving 429s will result in an automated IP ban (HTTP status 418).</strong></li>
<li>IP bans are tracked and <strong>scale in duration</strong> for repeat offenders, <strong>from 2 minutes to 3 days</strong>.</li>
<li>A <code>Retry-After</code> header is sent with a 418 or 429 responses and will give the <strong>number of seconds</strong> required to wait, in the case of a 429, to prevent a ban, or, in the case of a 418, until the ban is over.</li>
</ul>
<h3 id="websocket-limits">Websocket Limits</h3>
<ul>
<li>WebSocket connections have a limit of 5 incoming messages per second. A message is considered:

<ul>
<li>A PING frame</li>
<li>A PONG frame</li>
<li>A JSON controlled message (e.g. subscribe, unsubscribe)</li>
</ul></li>
<li>A connection that goes beyond the limit will be disconnected; IPs that are repeatedly disconnected may be banned.</li>
<li>A single connection can listen to a maximum of 1024 streams.</li>
</ul>
<h1 id="endpoint-security-type">Endpoint security type</h1>
<ul>
<li>Each endpoint has a security type that determines the how you will
interact with it. This is stated next to the NAME of the endpoint.

<ul>
<li>If no security type is stated, assume the security type is NONE.</li>
</ul></li>
<li>API-keys are passed into the Rest API via the <code>X-API-KEY</code>
header.</li>
<li>API-keys and secret-keys <strong>are case sensitive</strong>.</li>
<li>API-keys can be configured to only access certain types of secure endpoints.
For example, one API-key could be used for TRADE only, while another API-key
can access everything except for TRADE routes.</li>
<li>By default, API-keys can access all secure routes.</li>
</ul>

<table><thead>
<tr>
<th>Security Type</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>NONE</td>
<td>Endpoint can be accessed freely.</td>
</tr>
<tr>
<td>TRADE</td>
<td>Endpoint requires sending a valid API-Key and signature.</td>
</tr>
<tr>
<td>USER_DATA</td>
<td>Endpoint requires sending a valid API-Key and signature.</td>
</tr>
<tr>
<td>MARKET_DATA</td>
<td>Endpoint requires sending a valid API-Key.</td>
</tr>
</tbody></table>

<ul>
<li><code>TRADE</code> and <code>USER_DATA</code> endpoints are <code>SIGNED</code> endpoints.</li>
</ul>
<h2 id="signed-trade-and-user_data-endpoint-security">SIGNED (TRADE and USER_DATA) Endpoint security</h2>
<ul>
<li><code>SIGNED</code> endpoints require an additional parameter, <code>signature</code>, to be
sent in the  <code>query string</code> or <code>request body</code>.</li>
<li>Endpoints use <code>HMAC SHA256</code> signatures. The <code>HMAC SHA256 signature</code> is a keyed <code>HMAC SHA256</code> operation.
Use your <code>secretKey</code> as the key and <code>totalParams</code> as the value for the HMAC operation.</li>
<li>The <code>signature</code> is <strong>not case sensitive</strong>.</li>
<li><code>totalParams</code> is defined as the <code>query string</code> concatenated with the
<code>request body</code>.</li>
</ul>
<h2 id="timing-security">Timing security</h2>
<ul>
<li>A <code>SIGNED</code> endpoint also requires a parameter, <code>timestamp</code>, to be sent which
should be the millisecond timestamp of when the request was created and sent.</li>
<li>An additional parameter, <code>recvWindow</code>, may be sent to specify the number of
milliseconds after <code>timestamp</code> the request is valid for. If <code>recvWindow</code>
is not sent, <strong>it defaults to 5000</strong>.</li>
</ul>

<blockquote>
<p>The logic is as follows:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="w">  </span><span class="err">if</span><span class="w"> </span><span class="err">(timestamp</span><span class="w"> </span><span class="err">&lt;</span><span class="w"> </span><span class="err">(serverTime</span><span class="w"> </span><span class="err">+</span><span class="w"> </span><span class="mi">1000</span><span class="err">)</span><span class="w"> </span><span class="err">&amp;&amp;</span><span class="w"> </span><span class="err">(serverTime</span><span class="w"> </span><span class="err">-</span><span class="w"> </span><span class="err">timestamp)</span><span class="w"> </span><span class="err">&lt;=</span><span class="w"> </span><span class="err">recvWindow)</span><span class="w"> </span><span class="p">{"{"}</span><span class="w">
    </span><span class="c1">// process request</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w"> </span><span class="err">else</span><span class="w"> </span><span class="p">{"{"}</span><span class="w">
    </span><span class="c1">// reject request</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p><strong>Serious trading is about timing.</strong> Networks can be unstable and unreliable,
which can lead to requests taking varying amounts of time to reach the
servers. With <code>recvWindow</code>, you can specify that the request must be
processed within a certain number of milliseconds or be rejected by the
server.</p>

<p><strong>It is recommended to use a small recvWindow of 5000 or less! The max cannot go beyond 60,000!</strong></p>
<h2 id="signed-endpoint-examples-for-post-sapi-v1-order">SIGNED Endpoint Examples for POST /sapi/v1/order</h2>
<p>Here is a step-by-step example of how to send a vaild signed payload from the
Linux command line using <code>echo</code>, <code>openssl</code>, and <code>curl</code>.</p>

<table><thead>
<tr>
<th>Key</th>
<th>Value</th>
</tr>
</thead><tbody>
<tr>
<td>apiKey</td>
<td>vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A</td>
</tr>
<tr>
<td>secretKey</td>
<td>NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j</td>
</tr>
</tbody></table>

<table><thead>
<tr>
<th>Parameter</th>
<th>Value</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>ltcbtc</td>
</tr>
<tr>
<td>side</td>
<td>buy</td>
</tr>
<tr>
<td>type</td>
<td>limit</td>
</tr>
<tr>
<td>quantity</td>
<td>1</td>
</tr>
<tr>
<td>price</td>
<td>0.1</td>
</tr>
<tr>
<td>recvWindow</td>
<td>5000</td>
</tr>
<tr>
<td>timestamp</td>
<td>1499827319559</td>
</tr>
</tbody></table>
<h2 id="example-1-as-a-request-body">Example 1: As a request body</h2>
<blockquote>
<p>Request Body:</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="nv">symbol</span><span class="o">=</span>ltcbtc&amp;side<span class="o">=</span>buy&amp;type<span class="o">=</span>limit&amp;quantity<span class="o">=</span>1&amp;price<span class="o">=</span>0.1&amp;recvWindow<span class="o">=</span>5000&amp;timestamp<span class="o">=</span>1499827319559
</code></pre></div>
<blockquote>
<p>HMAC SHA256 signature:</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="o">[</span>linux]<span class="nv">$ </span><span class="nb">echo</span> <span class="nt">-n</span> <span class="s2">"symbol=ltcbtc&amp;side=buy&amp;type=limit&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1499827319559"</span> | openssl dgst <span class="nt">-sha256</span> <span class="nt">-hmac</span> <span class="s2">"Nh***0j"</span>
<span class="o">(</span>stdin<span class="o">)=</span> a0<span class="k">***</span>60
</code></pre></div>
<blockquote>
<p>(HMAC SHA256)</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="o">[</span>linux]<span class="nv">$ </span>curl <span class="nt">-H</span> <span class="s2">"X-API-KEY: vm***8A"</span> <span class="nt">-X</span> POST <span class="s1">'https://api.wazirx.com/sapi/v1/order'</span> <span class="nt">-d</span> <span class="s1">'symbol=ltcbtc&amp;side=buy&amp;type=limit&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1499827319559&amp;signature=a0***60'</span>
</code></pre></div><h2 id="example-2-as-a-query-string">Example 2: As a query string</h2>
<blockquote>
<p>Query String:</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="nv">symbol</span><span class="o">=</span>ltcbtc&amp;side<span class="o">=</span>buy&amp;type<span class="o">=</span>limit&amp;quantity<span class="o">=</span>1&amp;price<span class="o">=</span>0.1&amp;recvWindow<span class="o">=</span>5000&amp;timestamp<span class="o">=</span>1499827319559
</code></pre></div>
<blockquote>
<p>HMAC SHA256 signature:</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="o">[</span>linux]<span class="nv">$ </span><span class="nb">echo</span> <span class="nt">-n</span> <span class="s2">"symbol=ltcbtc&amp;side=buy&amp;type=limit&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1499827319559"</span> | openssl dgst <span class="nt">-sha256</span> <span class="nt">-hmac</span> <span class="s2">"Nh***0j"</span>
<span class="o">(</span>stdin<span class="o">)=</span> a0<span class="k">***</span>60
</code></pre></div>
<blockquote>
<p>Curl Command:</p>
</blockquote>
<div class="highlight"><pre class="highlight shell tab-shell"><code><span class="o">[</span>linux]<span class="nv">$ </span>curl <span class="nt">-H</span> <span class="s2">"X-API-KEY: vm***8A"</span> <span class="nt">-X</span> POST <span class="s1">'https://api.wazirx.com/sapi/v1/order?symbol=ltcbtc&amp;side=buy&amp;type=limit&amp;quantity=1&amp;price=0.1&amp;recvWindow=5000&amp;timestamp=1499827319559&amp;signature=a0***60'</span>
</code></pre></div><h1 id="public-api-endpoints">Public API Endpoints</h1><h2 id="enum-definitions">ENUM definitions</h2>
<p><strong>Order status (status):</strong></p>

<ul>
<li>idle - The order is idle not yet triggered.</li>
<li>wait - The order is still open and waiting to be filled completely.</li>
<li>done - The order has been completely filled.</li>
<li>cancel - The order has been canceled by the user.</li>
</ul>

<p><strong>Order types (orderTypes, type):</strong></p>

<ul>
<li>limit</li>
<li>stop_limit</li>
</ul>

<p><strong>Order side (side):</strong></p>

<ul>
<li>buy</li>
<li>sell</li>
</ul>
<h1>Ideal API Endpoint</h1>
<h2>{"["}Section A {"]"} Spot Exchanges</h2>
<h2 id="test-connectivity">Summary Endpoint</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.l9fkcvy68gv0'</span></code></pre></div>
<blockquote><p>Response:
  </p></blockquote>
  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl">"trading_pairs"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"ETC_BTC"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.00067</span>
  <span class="p">,</span>
  <span class="nl">  "lowest_ask"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.000681,</span>
  <span class="p">,</span>
  <span class="nl">  "highest_bid"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.00067</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 1528.11</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  1.0282814600000003</span>
  <span class="p">,</span>
  <span class="nl">   "price_change_percent_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> -1.3254786450662739</span>
  <span class="p">,</span>
  <span class="nl">   "highest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">0.000676</span>
  <span class="p">,</span>
  <span class="nl">"lowest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.000666</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl">"trading_pairs"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">""XRP_BTC""</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.0000203</span>
  <span class="p">,</span>
  <span class="nl">  "lowest_ask"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.0000213</span>
  <span class="p">,</span>
  <span class="nl">  "highest_bid"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.0000202</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 350700</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  7.139649999999999</span>
  <span class="p">,</span>
  <span class="nl">   "price_change_percent_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.49019607843137253</span>
  <span class="p">,</span>
  <span class="nl">   "highest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">0.0000204</span>
  <span class="p">,</span>
  <span class="nl">"lowest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.0000203</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl">"trading_pairs"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"LTC_BTC"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.00469,</span>
  <span class="p">,</span>
  <span class="nl">  "lowest_ask"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  0.00479</span>
  <span class="p">,</span>
  <span class="nl">  "highest_bid"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.00469</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 592.88</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  2.7840513999999996</span>
  <span class="p">,</span>
  <span class="nl">   "price_change_percent_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> -0.635593220338983</span>
  <span class="p">,</span>
  <span class="nl">   "highest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">0.00471</span>
  <span class="p">,</span>
  <span class="nl">"lowest_price_24h"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> 0.00466</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>




    </span><span class="w"></span></code></pre></div>
    <p>Overview of market data for all tickers and all markets.</p>


    <h1>ENDPOINT A1</h1>
<h2 id="test-connectivity">ASSETS   /assets</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.lzf008k5nm6o'</span></code></pre></div>
<blockquote><p>Response:
  </p></blockquote>
  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"{"}</span>
  <span class="nl">"BTC"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl">"name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"bitcoin"</span>
  <span class="p">,</span>
  <span class="nl"> "unified_cryptoasset_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "1"</span>
  <span class="p">,</span>
  <span class="nl">"can_withdraw"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"true"</span>
  <span class="p">,</span>
  <span class="nl">  "can_deposit"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "true"</span>
  <span class="p">,</span>
  <span class="nl"> "min_withdraw"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "0.01"</span>
  <span class="p">,</span>
  <span class="nl">  "max_withdraw "</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "100"</span>
  <span class="p">,</span>
  <span class="nl">"name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "bitcoin"</span>
  <span class="p">,</span>
  <span class="nl">  "maker_fee"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"0.01"</span>
  <span class="p">,</span>
  <span class="nl"> "taker_fee"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "0.01"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="nl">"ETH"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"ethereum"</span>
  <span class="p">,</span>
  <span class="nl">  "unified_cryptoasset_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "1027"</span>
  <span class="p">,</span>
  <span class="nl">  "can_withdraw"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "false"</span>
  <span class="p">,</span>
  <span class="nl">    "can_deposit"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "false"</span>
  <span class="p">,</span>
  <span class="nl">  "min_withdraw"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "10.00"</span>
  <span class="p">,</span>
  <span class="nl">  "max_withdraw "</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0.00"</span>
  <span class="p">,</span>
  <span class="nl">    "maker_fee"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "0.01"</span>
  <span class="p">,</span>
  <span class="nl">  "taker_fee"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"0.01"</span>
  <span class="p">{"}"}</span>



    </span><span class="w"></span></code></pre></div>
    <p>The assets endpoint is to provide a detailed summary for each currency available on the exchange.</p>

    <h1>ENDPOINT A2</h1>
<h2 id="test-connectivity">TICKER   /ticker</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.lzf008k5nm6o'</span></code></pre></div>
<blockquote><p>Response:
  </p></blockquote>
  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"{"}</span>
  <span class="nl">"BTC_USDT"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl">"base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"1"</span>
  <span class="p">,</span>
  <span class="nl"> "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "825"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"10000"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "20000"</span>
  <span class="p">,</span>
  <span class="nl"> "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "2"</span>
  <span class="p">,</span>
  <span class="nl">   "isFrozen"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "0"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
 
  
  <span class="nl">"LTC_BTC"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"2"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "1"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0.00699900"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "20028,526"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "279594"</span>
  <span class="p">,</span>
  <span class="nl">   "isFrozen"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="nl">"BNB_BTC"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"1839"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "1"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0.00699900"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "53819"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "99.3459"</span>
  <span class="p">,</span>
  <span class="nl">   "isFrozen"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0"</span>
    <span class="p">{"}"}</span>
</span><span class="w"></span></code></pre></div>
    <p>The ticker endpoint is to provide a 24-hour pricing and volume summary for each market pair available on the exchange</p>

    <h1>ENDPOINT A3</h1>
<h2 id="test-connectivity">ORDERBOOK   /orderbook/market_pair</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.ojdax1m5sg58'</span></code></pre></div>
<blockquote><p>Response:
  </p></blockquote>
  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"{"}</span>
  <br/>
  <span class="nl">"timestamp"</span>
  <span class="p">:</span>
  <span class="nl">"1585177482652"</span>
  <span class="p">,</span>
  <br/>
  <span class="nl">"bids"</span><span class="p">:</span><span class="p">{"["}</span> <br/><span class="p">{"["}</span><span class="nl"> "12462000"</span><span class="p">,</span><span class="nl">  "0.04548320"</span><span class="p">{"]"}</span><span class="p">,</span><br/>
  <br/><span class="p">{"["}</span><span class="nl">"12457000"</span><span class="p">,</span><span class="nl">   "3.00000000"</span><span class="p">{"]"}</span><span class="p">,</span><br/><span class="p">{"]"}</span><span class="p">,</span>
  <span class="nl">"asks"</span><span class="p">:</span><span class="p">{"["}</span> <span class="nl">"12506000"</span><span class="p">,</span><span class="nl">  "2.73042000"</span><span class="p">{"]"}</span><span class="p">,</span><br/>
  <span class="p">{"["}</span> <span class="nl">"12508000"</span><span class="p">,</span><span class="nl">"0.33660000"</span><span class="p">{"]"}</span><br/><span class="p">{"]"}</span><br/><span class="p">{"}"}</span>
  </span><span class="w"></span></code></pre></div>
    <p>The order book endpoint is to provide a complete level 2 order book {"("}arranged by best asks/bids{")"} with full depth returned for a given market pair.</p>
    <h1>ENDPOINT A4</h1>
<h2 id="test-connectivity">TRADES   /trades/market_pair</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.9sxaz61ixguo'</span></code></pre></div>
<blockquote><p>Response:
  </p></blockquote>

  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"["}</span> <br/>
  <span class="p">{"{"}</span> <br/>
  <span class="w">
  </span>
  <span class="nl">"trade_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"3523643"</span>
  <span class="p">,</span>
  <span class="nl"> "price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "0.01"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"569000"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span> <br/>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0.01000000"</span>
  <span class="p">,</span>
  <span class="nl"> "timestamp"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "1585177482652"</span>
  <span class="p">,</span>
  <span class="nl">   "type"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "sell"</span>
  <span class="p">{"}"}</span>
  
</span><span class="w"></span></code></pre></div>
<p>The trades endpoint is to return data on all recently completed trades for a given market pair.</p>

<h2>{"["}Section B {"]"} Derivative Exchanges</h2>
<h2 id="test-connectivity">ENDPOINT OVERVIEW</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.92jgzayiyaa'</span></code></pre></div>
  
<table><thead>
<tr>
<th>Name</th>
<th>Category</th>
<th>Status</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td><a>Endpoint B1</a>
(See sample)</td>
<td>contracts</td>
<td>Mandatory</td>
<td>Summary of contracts traded on the exchange, helps to differentiate between different products available.
 Ideally, all information should be returned in a single endpoint.
</td>
<td></td>
</tr>
<tr>
<td>Endpoint B2</td>
<td>contract_specs</td>
<td>Mandatory</td>
<td>Describes the specification of the contracts, mainly the pricing of the contract and its type (vanilla, inverse, or quanto).
Note: Endpoint B2 may be combined  with Endpoint B1 for ease of reference.
</td>
</tr>
<tr>
<td>Endpoint B3
(See sample)</td>
<td>orderbook</td>
<td>Mandatory</td>
<td>Order book depth of any given trading pair, split into two different arrays for bid and ask orders.</td>
</tr>
</tbody></table>

<h2 id="test-connectivity">Endpoint B1 {"("}Contracts{")"}</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.vhax3ywehyky'</span></code></pre></div>
  <p>Endpoint B2 provides a summary of every single contract traded on the exchange. There should be a clear delineation between the contract type {"("}e.g. perpetual, futures, options{")"}. Ideally, all information should be returned in a single endpoint.</p>
<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Status</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>ticker_id
</td>
<td>string</td>
<td>Mandatory</td>
<td>Identifier of a ticker with delimiter to separate base/quote, eg. BTC-PERPUSD, BTC-PERPETH, BTC-PERPEUR
</td>
<td></td>
</tr>
<tr>
<td>base_currency</td>
<td>string</td>
<td>Mandatory</td>
<td>Symbol/currency code of base pair, eg. BTC
</td>
</tr>
<tr>
<td>quote_currency</td>
<td>string</td>
<td>Mandatory</td>
<td>Symbol/currency code of quote pair, eg. ETH</td>
</tr>
<tr>
<td>last_price</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Last transacted price of base currency based on given quote currency</td>
</tr>
<tr>
<td>base_volume</td>
<td>decimal</td>
<td>Mandatory</td>
<td>24 hour trading volume in BASE currency</td>
</tr>
<tr>
<td>USD_volume </td>
<td>decimal</td>
<td>Recommended</td>
<td>24 hour trading volume in USD</td>
</tr>
<tr>
<td>quote_volume</td>
<td>decimal</td>
<td>Mandatory</td>
<td>24 hour trading volume in QUOTE currency</td>
</tr>
<tr>
<td>bid</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Current highest bid price</td>
</tr>
<tr>
<td>ask</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Current lowest ask price</td>
</tr>
<tr>
<td>high</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Rolling 24-hour highest transaction price</td>
</tr>
<tr>
<td>low</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Rolling 24-hour lowest transaction price</td>
</tr>
<tr>
<td>product_type</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Futures, Perpetual, Options</td>
</tr>
<tr>
<td>open_interest</td>
<td>decimal</td>
<td>Mandatory</td>
<td>The sum of the Open Positions (long or short) in USD Value of the contract</td>
</tr>
<tr>
<td>index_price</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Last calculated index price for underlying of contract</td>
</tr>
<tr>
<td>creation_timestamp</td>
<td>Integer 
<sup>{"("}UTC timestamp in ms{")"}</sup>
</td>
<td>Mandatory 
 <sup>{"("}only for expirable futures/options{")"}</sup>
</td>
<td>Start date of derivative <b>{"("}not needed for perpetual swaps{")"}</b></td>
</tr>
<tr>
<td>expiry_timestamp</td>
<td>Integer 
<sup>{"("}UTC timestamp in ms{")"}</sup></td>
<td>Mandatory 
 <sup>{"("}only for expirable futures/options{")"}</sup></td>
<td>End date of derivative  <b>{"("}not needed for perpetual swaps{")"}</b></td>
</tr>
<tr>
<td>funding_rate</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Current funding rate</td>
</tr>
<tr>
<td>next_funding_rate</td>
<td>Integer 
<sup>{"("}UTC timestamp in ms{")"}</sup></td>
<td>Mandatory</td>
<td>Timestamp of the next funding rate change</td>
</tr>
<tr>
<td>maker_fee</td>
<td>decimal</td>
<td>Recommended</td>
<td>Fees for filling a “maker” order {"("}can be negative if rebate is given{")"}</td>
</tr>
<tr>
<td>taker_fee</td>
<td>decimal</td>
<td>Recommended</td>
<td>Fees for filling a “maker” order {"("}can be negative if rebate is given{")"}</td>
</tr>
</tbody></table>
<h2 id="test-connectivity">Endpoint B2   {"("}Contracts specifications{")"}</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.tdsggzkbyb5h'</span></code></pre></div>
  <p>Describes the specification of the contracts, mainly the pricing of the contract and its type (vanilla, inverse, or quanto). Endpoint B2 {"("}contract_specs{")"} can be combined with endpoint B1 {"("}contracts{")"}.</p>
  <table><thead>
<tr>
<th>Name</th>
<th>DataType</th>
<th>Category</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>contract_type</td>
<td>string</td>
<td>Mandatory</td>
<td>Describes the type of contract - Vanilla, Inverse or Quanto?
</td>
</tr>
<tr>
<td>contract_price</td>
<td>decimal</td>
<td>Mandatory</td>
<td>Describes the price per contract.
</td>
</tr>
<tr>
<td>contract_price_currency</td>
<td>string</td>
<td>Mandatory</td>
<td>Describes the currency which the contract is priced in {""}e.g. USD, EUR, BTC, USDT{")"}
</td>
</tr>
</tbody>
</table>
<h2 id="test-connectivity">Endpoint B3    {"("}Order book{")"}</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.3pqork81s73e'</span></code></pre></div>
  <p>Provide order book information with at least depth = 100 {"("} 50 each side {")"} returned for a given market pair/ticker. </p>
  <table><thead>
<tr>
<th>Name</th>
<th>DataType</th>
<th>Category</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>ticker_id</td>
<td>string</td>
<td>Mandatory</td>
<td>A pair such as "BTC-PERPUSD", with delimiter between different cryptoassets
</td>
</tr>
<tr>
<td>timestamp</td>
<td>Integer <sup>
{"("}UTC timestamp in ms {")"} </sup>
</td>
<td>Mandatory</td>
<td>Unix timestamp in milliseconds for when the last updated time occurred.
</td>
</tr>
<tr>
<td>bids</td>
<td>decimal</td>
<td>Mandatory</td>
<td>An array containing 2 elements. The offer price and quantity fyor each bid order
</td>
</tr>
<tr>
<td>asks</td>
<td>decimal</td>
<td>Mandatory</td>
<td>An array containing 2 elements. The ask price and quantity for each ask order
</td>
</tr>
</tbody>
</table>
<p>Order book depth of any given trading pair, split into two different arrays for bid and ask orders. This is similar to Endpoint A3 for spot markets.</p>

<h2>{"["}Section c {"]"}  AMM DEXes</h2>
<div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping</code></pre></div>
<div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://docs.google.com/document/d/1S4urpzUnO2t7DmS_1dc4EL4tgnnbTObPYXvDeBnukCg/edit#bookmark=kix.5p33g7oj0og8'</span></code></pre></div>
<ul>
   <li>C1: Uniswap Sample</li> 
   <li>C2: Subgraph Sample</li>
   <li>C3: Yield Farming Sample</li>
   </ul>

   <h2>C1: Uniswap Sample</h2>

<blockquote><p>Response:
  </p></blockquote>
  <div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">
  <span class="p">{"{"}</span>
  <span class="nl"> "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599_0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"</span>
  <span class="p">,</span>
  <span class="nl"> "base_name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"Wrapped BTC"</span>
  <span class="p">,</span>
  <span class="nl"> "base_symbol"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "WBTC"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">   "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "Wrapped Ether"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_symbol"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "WETH"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="nl">  "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "30.45692523596447546478"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"1725.0451867"</span>
  <span class="p">,</span>
  <span class="nl">"quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "52450.878529932577252127"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
 
  
  <span class="nl">  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2_0xdAC17F958D2ee523a2206206994597C13D831ec7"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  
  <span class="nl"> "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599_0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"</span>
  <span class="p">,</span>
  <span class="nl"> "base_name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"Wrapped Ether"</span>
  <span class="p">,</span>
  <span class="nl"> "base_symbol"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "WETH"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">   "0xdAC17F958D2ee523a2206206994597C13D831ec7"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_name"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "Tether USD"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_symbol"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "USDT"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="nl">  "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "345.2244580923542612263"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"195644.931427163765765227"</span>
  <span class="p">,</span>
  <span class="nl">"quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "67443916.533922"</span>
  <span class="p">{"}"}</span>
  <span class="p">,</span>
  <span class="nl">"BNB_BTC"</span>
  <span class="p">:</span>
  <span class="p">{"{"}</span>
  <span class="w">
  </span>
  <span class="nl"> "base_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">"1839"</span>
  <span class="p">,</span>
  <span class="nl">   "quote_id"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "1"</span>
  <span class="p">,</span>
  <span class="nl"> "last_price"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0.00699900"</span>
  <span class="p">,</span>
  <span class="nl">  "base_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "53819"</span>
  <span class="p">,</span>
  <span class="nl">  "quote_volume"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2"> "99.3459"</span>
  <span class="p">,</span>
  <span class="nl">   "isFrozen"</span>
  <span class="p">:</span>
  <span class="w"> </span>
  <span class="s2">  "0"</span>
    <span class="p">{"}"}</span>
</span><span class="w"></span></code></pre></div>



<h1 id="general-endpoints">General endpoints</h1><h2 id="test-connectivity">Test connectivity</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ping
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/ping'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}{"}"}</span><span class="w">
</span></code></pre></div>



<p>Test connectivity to the Rest API.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong>
NONE</p>

<p><br/>
<br/></p>
<h2 id="system-status">System status</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/systemStatus
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/systemStatus'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"normal"</span><span class="p">,</span><span class="w">  </span><span class="c1">// normal or system maintenance</span><span class="w">
    </span><span class="nl">"message"</span><span class="p">:</span><span class="w"> </span><span class="s2">"System is running normally."</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Fetch system status.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong>
NONE</p>

<p><br/>
<br/>
<br/>
<br/>
<br/></p>
<h2 id="check-server-time">Check server time</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/time
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/time'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"serverTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Test connectivity to the Rest API and get the current server time.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong>
NONE</p>

<p><br/>
<br/>
<br/>
<br/>
<br/></p>
<h2 id="exchange-info">Exchange Info</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/exchangeInfo
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/exchangeInfo'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"timezone"</span><span class="p">:</span><span class="w"> </span><span class="s2">"UTC"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"serverTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1631531599247</span><span class="p">,</span><span class="w">
    </span><span class="nl">"symbols"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
        </span><span class="p">{"{"}</span><span class="w">
            </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcinr"</span><span class="p">,</span><span class="w">
            </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"trading"</span><span class="p">,</span><span class="w">
            </span><span class="nl">"baseAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btc"</span><span class="p">,</span><span class="w">
            </span><span class="nl">"quoteAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"inr"</span><span class="p">,</span><span class="w">
            </span><span class="nl">"baseAssetPrecision"</span><span class="p">:</span><span class="w"> </span><span class="mi">5</span><span class="p">,</span><span class="w">
            </span><span class="nl">"quoteAssetPrecision"</span><span class="p">:</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w">
            </span><span class="nl">"orderTypes"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
                </span><span class="s2">"limit"</span><span class="p">,</span><span class="w">
                </span><span class="s2">"stop_limit"</span><span class="w">
            </span><span class="p">],</span><span class="w">
            </span><span class="nl">"isSpotTradingAllowed"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span><span class="w">
            </span><span class="nl">"filters"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
                </span><span class="p">{"{"}</span><span class="w">
                    </span><span class="nl">"filterType"</span><span class="p">:</span><span class="w"> </span><span class="s2">"PRICE_FILTER"</span><span class="p">,</span><span class="w">
                    </span><span class="nl">"minPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1"</span><span class="p">,</span><span class="w">
                    </span><span class="nl">"tickSize"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1"</span><span class="w">
                </span><span class="p">{"}"}</span><span class="w">
            </span><span class="p">]</span><span class="w">
        </span><span class="p">{"}"}</span><span class="w">
      </span><span class="p">]</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Fetch all exchange information</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong>
NONE</p>
<h1 id="market-data-endpoints">Market Data endpoints</h1><h2 id="24hr-tickers-price-change-statistics">24hr tickers price change statistics</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/tickers/24hr
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/tickers/24hr'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcinr"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"baseAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btc"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"quoteAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"inr"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"openPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"704999.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"lowPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"702603.0"</span><span class="p">,</span><span class="w">    
    </span><span class="nl">"highPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"730001.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"lastPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"720101.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"volume"</span><span class="p">:</span><span class="w"> </span><span class="s2">"891.8329"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"bidPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"720102.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"askPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"722999.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"at"</span><span class="p">:</span><span class="w"> </span><span class="mi">1588829734</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>24 hour rolling window price change statistics.</p>

<p>Rate limit: 1 per second</p>
<h2 id="24hr-ticker-price-change-statistics">24hr ticker price change statistics</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/ticker/24hr
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=wrxinr'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"baseAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrx"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"quoteAsset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"inr"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"openPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"704999.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"lowPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"702603.0"</span><span class="p">,</span><span class="w">    
  </span><span class="nl">"highPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"730001.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"lastPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"720101.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"volume"</span><span class="p">:</span><span class="w"> </span><span class="s2">"891.8329"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"bidPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"720102.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"askPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"722999.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"at"</span><span class="p">:</span><span class="w"> </span><span class="mi">1588829734</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>24 hour rolling window price change statistics.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<aside class="notice">
If the symbol is not sent, response will throw error.
</aside>
<h2 id="kline-candlestick-data">Kline/Candlestick Data</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/klines
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.hellopye.comsapi/v1/klines?symbol=btcinr&amp;limit=5&amp;interval=1m&amp;startTime=1647822960&amp;endTime=1647823020'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
    </span><span class="p">[</span><span class="w">
        </span><span class="mi">1647822960</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">0</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="p">[</span><span class="w">
        </span><span class="mi">1647823020</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">20</span><span class="p">,</span><span class="w">
        </span><span class="mi">0</span><span class="w">
    </span><span class="p">]</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Request via this endpoint to get the klines data of the specified symbol.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>STRING</td>
<td>NO</td>
<td>default 500, max 2000</td>
</tr>
<tr>
<td>interval</td>
<td>STRING</td>
<td>NO</td>
<td>allowed values [1m,5m,15m,30m,1h,2h,4h,6h,12h,1d,1w]</td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
</tbody></table>

<aside class="notice">
If startTime and endTime are not sent, the most recent klines are returned.
</aside>
<h2 id="order-book">Order book</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/depth
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/depth?symbol=wrxinr&amp;limit=5'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
   </span><span class="nl">"lastUpdateAt"</span><span class="p">:</span><span class="w"> </span><span class="mi">1588831243</span><span class="p">,</span><span class="w">
   </span><span class="nl">"asks"</span><span class="p">:[</span><span class="w">
      </span><span class="p">[</span><span class="w">
         </span><span class="s2">"9291.0"</span><span class="p">,</span><span class="w">   </span><span class="c1">// PRICE</span><span class="w">
         </span><span class="s2">"0.0119"</span><span class="w">    </span><span class="c1">// QTY</span><span class="w">
      </span><span class="p">]</span><span class="w">
   </span><span class="p">],</span><span class="w">
   </span><span class="nl">"bids"</span><span class="p">:[</span><span class="w">
      </span><span class="p">[</span><span class="w">
         </span><span class="s2">"9253.0"</span><span class="p">,</span><span class="w">   </span><span class="c1">// PRICE</span><span class="w">
         </span><span class="s2">"1.0456"</span><span class="w">    </span><span class="c1">// QTY</span><span class="w">
      </span><span class="p">]</span><span class="w">
   </span><span class="p">]</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 20; max 1000. Valid limits:[1, 5, 10, 20, 50, 100, 500, 1000]</td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="recent-trades-list">Recent trades list</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/trades
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/trades?symbol=wrxinr&amp;limit=10'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28457</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"4.00000100"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"qty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"12.00000000"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"quoteQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"48.000012"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"time"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499865549590</span><span class="p">,</span><span class="w">
    </span><span class="nl">"isBuyerMaker"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get recent trades.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="old-trade-lookup-market_data">Old trade lookup (MARKET_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/historicalTrades
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/historicalTrades?limit=10&amp;symbol=wrxinr&amp;signature=e0***cb&amp;recvWindow=10000&amp;timestamp=1632376801204'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28457</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"4.00000100"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"qty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"12.00000000"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"quoteQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"48.000012"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"time"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499865549590</span><span class="p">,</span><span class="w">
    </span><span class="nl">"isBuyerMaker"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get older trades.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
<tr>
<td>fromId</td>
<td>LONG</td>
<td>NO</td>
<td>TradeId to fetch from. Default gets most recent trades.</td>
</tr>
</tbody></table>
<h1 id="trading-endpoints">Trading Endpoints</h1><h2 id="new-order-trade">New order (TRADE)</h2><div class="highlight"><pre class="highlight plaintext"><code>POST /sapi/v1/order (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> POST <span class="s1">'https://api.wazirx.com/sapi/v1/order'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'Content-Type: application/x-www-form-urlencoded'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'symbol=wrxinr'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'side=buy'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'type=limit'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'price=500'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'quantity=1'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'recvWindow=10000'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'timestamp=1632376923837'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'signature=11***6f'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28</span><span class="p">,</span><span class="w">
  </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"8.2"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wait"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"limit"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
  </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Send in a new order.</p>

<p>Rate limit: 10 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Body Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>side</td>
<td>ENUM</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>ENUM</td>
<td>YES</td>
<td><code>limit</code> or <code>stop_limit</code></td>
</tr>
<tr>
<td>quantity</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>price</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>stopPrice</td>
<td>DECIMAL</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p>Additional mandatory parameters based on <code>type</code>:</p>

<table><thead>
<tr>
<th>Type</th>
<th>Additional mandatory parameters</th>
</tr>
</thead><tbody>
<tr>
<td><code>limit</code></td>
<td><code>quantity</code>, <code>price</code></td>
</tr>
<tr>
<td><code>stop_limit</code></td>
<td><code>quantity</code>,  <code>price</code>, <code>stopPrice</code></td>
</tr>
</tbody></table>
<h2 id="test-new-order-trade">Test new order (TRADE)</h2><div class="highlight"><pre class="highlight plaintext"><code>POST /sapi/v1/order/test (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> POST <span class="s1">'https://api.wazirx.com/sapi/v1/order/test'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'Content-Type: application/x-www-form-urlencoded'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'symbol=wrxinr'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'side=buy'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'type=limit'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'price=500'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'quantity=1'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'recvWindow=10000'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'timestamp=1632376923837'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'signature=11***6f'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}{"}"}</span><span class="w">
</span></code></pre></div>
<p>Test new order creation and signature/recvWindow long.
Validates a new order but does not send it into the matching engine.</p>

<p>Rate limit: 2 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Body Parameters:</strong>
Same as <code>POST /sapi/v1/order</code></p>
<h2 id="query-order-user_data">Query order (USER_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/order (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/order/?orderId=1234&amp;recvWindow=20000&amp;timestamp=1632377057552&amp;signature=91***f0'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">30</span><span class="p">,</span><span class="w">
  </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"stopPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9200.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"idle"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"stop_limit"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
  </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1507725176595</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Check an order's status.</p>

<p>Rate limit: 2 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="current-open-orders-user_data">Current open orders (USER_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/openOrders  (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/openOrders?symbol=wrxinr&amp;limit=2&amp;recvWindow=20000&amp;timestamp=1632377102391&amp;signature=a1***af'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28</span><span class="p">,</span><span class="w">
    </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"8.2"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wait"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"limit"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
    </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">30</span><span class="p">,</span><span class="w">
    </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcusdt"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"stopPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9200.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"idle"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"stop_limit"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
    </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1507725176595</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get all open orders on a symbol.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch orders after this time</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch orders before this time</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Notes:</strong></p>

<ul>
<li>If the symbol is not sent, orders for all symbols will be returned in an array.</li>
<li>If <code>orderId</code> is set, it will get orders &gt;= that <code>orderId</code>. Otherwise most recent orders are returned.</li>
</ul>

<p><br/></p>
<h2 id="all-orders-user_data">All orders (USER_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/allOrders (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/uapi/v1/allOrders?symbol=wrxinr&amp;orderId=1234&amp;startTime=1590148051000&amp;endTime=1590148051000&amp;limit=100&amp;recvWindow=20000&amp;timestamp=1632377355091&amp;signature=Ot***'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28</span><span class="p">,</span><span class="w">
    </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"8.2"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"cancel"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"limit"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
    </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">30</span><span class="p">,</span><span class="w">
    </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"stopPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9200.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"cancel"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"stop_limit"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
    </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1507725176595</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get all account orders; "idle", "wait", "cancel" or "done".</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch order after this time</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch order before this time</td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Notes:</strong>
* If <code>orderId</code> is set, it will get orders &gt;= that <code>orderId</code>. Otherwise most recent orders are returned.</p>

<p><br/></p>
<h2 id="cancel-order-trade">Cancel order (TRADE)</h2><div class="highlight"><pre class="highlight plaintext"><code>DELETE /sapi/v1/order  (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> DELETE <span class="s1">'https://api.wazirx.com/sapi/v1/order'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'Content-Type: application/x-www-form-urlencoded'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'symbol=wrxinr'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'orderId=1234'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'recvWindow=20000'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'timestamp=1632377448564'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'signature=c2***17'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">30</span><span class="p">,</span><span class="w">
  </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"stopPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9200.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"cancel"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"stop_limit"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
  </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1507725176595</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Cancel an active order.</p>

<p>Rate limit: 10 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Body Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="cancel-all-open-orders-on-a-symbol-trade">Cancel All Open Orders on a Symbol (TRADE)</h2><div class="highlight"><pre class="highlight plaintext"><code>DELETE /sapi/v1/openOrders (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> DELETE <span class="s1">'https://api.wazirx.com/sapi/v1/openOrders'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'Content-Type: application/x-www-form-urlencoded'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'symbol=wrxinr'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'recvWindow=20000'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'timestamp=1632377515580'</span> <span class="se">\</span>
<span class="nt">--data-urlencode</span> <span class="s1">'signature=5f***5e'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
      </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">28</span><span class="p">,</span><span class="w">
      </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcusdt"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"8.2"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"cancel"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"limit"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
      </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="w">
    </span><span class="p">{"}"},</span><span class="w">
    </span><span class="p">{"{"}</span><span class="w">
      </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">30</span><span class="p">,</span><span class="w">
      </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcusdt"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9293.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"stopPrice"</span><span class="p">:</span><span class="w"> </span><span class="s2">"9200.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"origQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"executedQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"status"</span><span class="p">:</span><span class="w"> </span><span class="s2">"cancel"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"stop_limit"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"sell"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"createdTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1499827319559</span><span class="p">,</span><span class="w">
      </span><span class="nl">"updatedTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">1507725176595</span><span class="w">
    </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Cancels all active orders on a symbol.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Body Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="my-trades-trade">My Trades (TRADE)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET sapi/v1/myTrades
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/myTrades?limit=10&amp;symbol=wrxinrt&amp;signature=5f***5e&amp;orderId=22394630&amp;recvWindow=10000&amp;timestamp=1632377515580'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
      </span><span class="nl">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">22394630</span><span class="p">,</span><span class="w">
      </span><span class="nl">"symbol"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"fee"</span><span class="p">:</span><span class="w"> </span><span class="s2">"32.40551116"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"feeCurrency"</span><span class="p">:</span><span class="w"> </span><span class="s2">"inr"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"quoteQty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"16202.75558"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"price"</span><span class="p">:</span><span class="w"> </span><span class="s2">"22.0"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"qty"</span><span class="p">:</span><span class="w"> </span><span class="s2">"736.48889"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"orderId"</span><span class="p">:</span><span class="w"> </span><span class="mi">22394630</span><span class="p">,</span><span class="w">
      </span><span class="nl">"side"</span><span class="p">:</span><span class="w"> </span><span class="s2">"buy"</span><span class="p">,</span><span class="w">
      </span><span class="nl">"isBuyerMaker"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span><span class="w">
      </span><span class="nl">"time"</span><span class="p">:</span><span class="w"> </span><span class="mi">1634898186000</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get trades for a specific orderId and symbol.</p>

<p>Rate limit: 2 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>symbol</td>
<td>STRING</td>
<td>NO</td>
<td></td>
</tr>
<tr>
<td>orderId</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>limit</td>
<td>INT</td>
<td>NO</td>
<td>Default 500; max 1000.</td>
</tr>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>startTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch trades after this time</td>
</tr>
<tr>
<td>endTime</td>
<td>LONG</td>
<td>NO</td>
<td>Fetch trades before this time</td>
</tr>
</tbody></table>
<h1 id="account-endpoints">Account Endpoints</h1><h2 id="account-information-user_data">Account information (USER_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/account (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/account?recvWindow=20000&amp;timestamp=1632377552095&amp;signature=3c***e5'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"accountType"</span><span class="p">:</span><span class="w"> </span><span class="s2">"default"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"canTrade"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span><span class="w">
  </span><span class="nl">"canWithdraw"</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="p">,</span><span class="w">
  </span><span class="nl">"updateTime"</span><span class="p">:</span><span class="w"> </span><span class="mi">123456789</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Get current account information.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><br/></p>
<h2 id="fund-details-user_data">Fund details (USER_DATA)</h2><div class="highlight"><pre class="highlight plaintext"><code>GET /sapi/v1/funds (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> GET <span class="s1">'https://api.wazirx.com/sapi/v1/funds?recvWindow=20000&amp;timestamp=1632377552095&amp;signature=3c***e5'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">[</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"asset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btc"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"free"</span><span class="p">:</span><span class="w"> </span><span class="s2">"4723846.89208129"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"locked"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"asset"</span><span class="p">:</span><span class="w"> </span><span class="s2">"wrx"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"free"</span><span class="p">:</span><span class="w"> </span><span class="s2">"4763368.68006011"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"locked"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"reservedFee"</span><span class="p">:</span><span class="w"> </span><span class="s2">"12.5"</span><span class="w">
  </span><span class="p">{"}"}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div>
<p>Get fund details for current account.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>
<h1 id="websocket-auth-tokens">Websocket Auth Tokens</h1><h2 id="create-auth-token">Create Auth Token</h2><div class="highlight"><pre class="highlight plaintext"><code>POST /sapi/v1/create_auth_token (HMAC SHA256)
</code></pre></div><div class="highlight"><pre class="highlight shell tab-shell"><code>curl <span class="nt">--location</span> <span class="nt">--request</span> POST <span class="s1">'https://api.wazirx.com/sapi/v1/create_auth_token?recvWindow=20000&amp;timestamp=1632377552095&amp;signature=3c***e5'</span> <span class="se">\</span>
<span class="nt">--header</span> <span class="s1">'X-Api-Key: Ry***n0'</span>
</code></pre></div>
<blockquote>
<p>Response:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"auth_key"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Xx***dM"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"timeout_duration"</span><span class="p">:</span><span class="w"> </span><span class="mi">900</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Create your auth token for subscription to private socket streams. The stream will close after 30 minutes unless a <code>ping</code> event is sent. If the account has an active <code>auth_key</code>, the api will return the same <code>auth_key</code> and its validity will be extended for another 30 minutes.</p>

<p>Rate limit: 1 per second</p>

<p><strong>Headers:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>X-API-KEY</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><strong>Query Parameters:</strong></p>

<table><thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead><tbody>
<tr>
<td>recvWindow</td>
<td>LONG</td>
<td>NO</td>
<td>The value cannot be greater than <code>60000</code></td>
</tr>
<tr>
<td>timestamp</td>
<td>LONG</td>
<td>YES</td>
<td></td>
</tr>
<tr>
<td>signature</td>
<td>STRING</td>
<td>YES</td>
<td></td>
</tr>
</tbody></table>

<p><br/></p>
<h1 id="websocket-market-streams">Websocket Market Streams</h1>
<ul>
<li>The base endpoint is: wss://stream.wazirx.com/stream</li>
<li>Streams can be accessed as a combined stream</li>
<li>Combined stream events are wrapped as follows: {"{"}"event":"<eventname>","streams":["<streamname>"]{"}"}</streamname></eventname></li>
<li>A single connection to stream.wazirx.com is only valid for 30 minutes, expect to be disconnected at the 30 minutes mark</li>
<li>The client will send a <code>ping frame</code> every 30 minutes. If the client does not receive a <code>pong frame</code> back from the connection within a 10 minute period, the connection will be disconnected.</li>
</ul>

<blockquote>
<p>Sample ping request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"ping"{"}"}
</code></pre></div>
<blockquote>
<p>Sample pong response</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"data":{"{"}"timeout_duration":1800{"}"},"event":"pong","id":0{"}"}
</code></pre></div><h2 id="live-subscribing-unsubscribing-to-streams">Live Subscribing/Unsubscribing to streams</h2>
<ul>
<li>The following data can be sent through the websocket instance in order to subscribe/unsubscribe from streams. Examples can be seen below.</li>
<li>The <code>id</code> used in the JSON payloads is an unsigned INT used as an identifier to uniquely identify the messages going back and forth.</li>
<li>In the response, if the <code>result</code> received is <code>null</code> this means the request sent was a success.</li>
</ul>

<blockquote>
<p>Subscribe to public streams</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["!ticker@arr"]{"}"}
</code></pre></div>
<blockquote>
<p>Subscribe to private streams</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["orderUpdate"], "auth_key": "***"{"}"}
</code></pre></div>
<blockquote>
<p>Payload (same for both public and private):</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"streams"</span><span class="p">:</span><span class="w">
    </span><span class="p">[</span><span class="w">
    </span><span class="s2">"!ticker@arr"</span><span class="w">
    </span><span class="p">]</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"event"</span><span class="p">:</span><span class="s2">"subscribed"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"id"</span><span class="p">:</span><span class="mi">0</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p><strong>Subscribe to a stream</strong>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/></p>

<blockquote>
<p>Unsubscribing from any stream</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"unsubscribe","streams":["!ticker@arr"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"streams"</span><span class="p">:</span><span class="w">
    </span><span class="p">[</span><span class="w">
    </span><span class="s2">"!ticker@arr"</span><span class="w">
    </span><span class="p">]</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"event"</span><span class="p">:</span><span class="s2">"unsubscribed"</span><span class="p">,</span><span class="w">
  </span><span class="nl">"id"</span><span class="p">:</span><span class="mi">0</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p><strong>Unsubscribe to a stream</strong></p>
<h2 id="error-messages">Error Messages</h2>
<table><thead>
<tr>
<th><strong>Error Message</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead><tbody>
<tr>
<td>{"{"}"data":{"{"}"code":400,"message":"Invalid request: streams must be an array"{"}"},"event":"error","id":0{"}"}</td>
<td>This is when key-pair is not valid</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":401,"message":"Invalid request: unauthorized access"{"}"},"event":"error","id":0{"}"}</td>
<td>This is when your <code>auth_key</code> does not have access for a private stream</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":400,"message":"Invalid request: unsupported method","id":0{"}"}</td>
<td>This is when method is not correct</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":500,"message":"Invalid request: could not parse message","id":0{"}"}</td>
<td>This is when message cannot be parsed</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":400,"message":"Invalid request: ID must be an unsigned integer","id":0{"}"}</td>
<td>This is when <code>ID</code> is invalid</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":400,"message":"Invalid request: auth_key must be a string","id":0{"}"}</td>
<td>This is when <code>auth_key</code> is not a string</td>
</tr>
<tr>
<td>{"{"}"data":{"{"}"code":429,"message":"Too many request: max streams subscription limit reached","id":0{"}"}</td>
<td>This is when <code>limit reached</code> of maximum requests</td>
</tr>
</tbody></table>
<h2 id="trade-streams">Trade Streams</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["btcinr@trades"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"trades"</span><span class="p">:</span><span class="w">
    </span><span class="p">[</span><span class="w">
      </span><span class="p">{"{"}</span><span class="w">
        </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631681323000</span><span class="p">,</span><span class="w">  </span><span class="c1">// Event time</span><span class="w">
        </span><span class="nl">"S"</span><span class="p">:</span><span class="s2">"buy"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Side</span><span class="w">
        </span><span class="nl">"a"</span><span class="p">:</span><span class="mi">26946138</span><span class="p">,</span><span class="w">       </span><span class="c1">// Buyer order ID</span><span class="w">
        </span><span class="nl">"b"</span><span class="p">:</span><span class="mi">26946169</span><span class="p">,</span><span class="w">       </span><span class="c1">// Seller order ID</span><span class="w">
        </span><span class="nl">"m"</span><span class="p">:</span><span class="kc">true</span><span class="p">,</span><span class="w">           </span><span class="c1">// Is buyer maker?</span><span class="w">
        </span><span class="nl">"p"</span><span class="p">:</span><span class="s2">"7.0"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Price</span><span class="w">
        </span><span class="nl">"q"</span><span class="p">:</span><span class="s2">"15.0"</span><span class="p">,</span><span class="w">         </span><span class="c1">// Quantity</span><span class="w">
        </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"btcinr"</span><span class="p">,</span><span class="w">       </span><span class="c1">// Symbol</span><span class="w">
        </span><span class="nl">"t"</span><span class="p">:</span><span class="mi">17376030</span><span class="w">        </span><span class="c1">// Trade ID</span><span class="w">
      </span><span class="p">{"}"}</span><span class="w">
    </span><span class="p">]</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"btcinr@trades"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>The Trade Streams push raw trade information; each trade has a unique buyer and seller.</p>

<p><strong>Stream Name:</strong> <code>&lt;symbol&gt;@trades</code></p>
<h2 id="all-market-tickers-stream">All Market Tickers Stream</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["!ticker@arr"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">[</span><span class="w">
    </span><span class="p">{"{"}</span><span class="w">
      </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631625534000</span><span class="p">,</span><span class="w">    </span><span class="c1">// Event time</span><span class="w">
      </span><span class="nl">"T"</span><span class="p">:</span><span class="s2">"SPOT"</span><span class="p">,</span><span class="w">           </span><span class="c1">// Type</span><span class="w">
      </span><span class="nl">"U"</span><span class="p">:</span><span class="s2">"wrx"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Quote unit</span><span class="w">
      </span><span class="nl">"a"</span><span class="p">:</span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Best sell price</span><span class="w">
      </span><span class="nl">"b"</span><span class="p">:</span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Best buy price</span><span class="w">
      </span><span class="nl">"c"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Last price</span><span class="w">
      </span><span class="nl">"h"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// High price</span><span class="w">
      </span><span class="nl">"l"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Low price</span><span class="w">
      </span><span class="nl">"o"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Open price</span><span class="w">
      </span><span class="nl">"q"</span><span class="p">:</span><span class="s2">"0.0"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Quantity</span><span class="w">
      </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"btcwrx"</span><span class="p">,</span><span class="w">         </span><span class="c1">// Symbol</span><span class="w">
      </span><span class="nl">"u"</span><span class="p">:</span><span class="s2">"btc"</span><span class="w">             </span><span class="c1">// Base unit</span><span class="w">
    </span><span class="p">{"}"}</span><span class="w">
  </span><span class="p">],</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"!ticker@arr"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>24hr rolling window ticker statistics for all symbols that changed in an array. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs. Note that only tickers that have changed will be present in the array.</p>

<p><strong>Stream Name:</strong> <code>!ticker@arr</code></p>
<h2 id="kline-candlestick-stream">Kline/Candlestick Stream</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["btcinr@kline_1m"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"data"</span><span class="p">:</span><span class="w"> </span><span class="p">{"{"}</span><span class="w">
      </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631683058904</span><span class="p">,</span><span class="w">      </span><span class="c1">// Event time</span><span class="w">
      </span><span class="nl">"s"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcinr"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Symbol</span><span class="w">
      </span><span class="nl">"t"</span><span class="p">:</span><span class="w"> </span><span class="mi">1638747660000</span><span class="p">,</span><span class="w">     </span><span class="c1">// Kline start time</span><span class="w">
      </span><span class="nl">"T"</span><span class="p">:</span><span class="w"> </span><span class="mi">1638747719999</span><span class="p">,</span><span class="w">     </span><span class="c1">// Kline close time</span><span class="w">
      </span><span class="nl">"i"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1m"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Interval</span><span class="w">
      </span><span class="nl">"o"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0010"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Open price</span><span class="w">
      </span><span class="nl">"c"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0020"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Close price</span><span class="w">
      </span><span class="nl">"h"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0025"</span><span class="p">,</span><span class="w">          </span><span class="c1">// High price</span><span class="w">
      </span><span class="nl">"l"</span><span class="p">:</span><span class="w"> </span><span class="s2">"0.0015"</span><span class="p">,</span><span class="w">          </span><span class="c1">// Low price</span><span class="w">
      </span><span class="nl">"v"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1000"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Base asset volume</span><span class="w">
    </span><span class="p">{"}"},</span><span class="w">
    </span><span class="nl">"stream"</span><span class="p">:</span><span class="w"> </span><span class="s2">"btcinr@kline_1m"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>The Kline/Candlestick Stream pushes update of current klines/candlestick every few second.</p>

<p>Kline intervals:</p>

<table><thead>
<tr>
<th>Key</th>
<th>Value</th>
</tr>
</thead><tbody>
<tr>
<td>m</td>
<td>Minutes</td>
</tr>
<tr>
<td>h</td>
<td>Hours</td>
</tr>
<tr>
<td>d</td>
<td>Days</td>
</tr>
<tr>
<td>w</td>
<td>Weeks</td>
</tr>
<tr>
<td>M</td>
<td>Months</td>
</tr>
</tbody></table>

<p><strong>Stream Name:</strong> <code>&lt;symbol&gt;@kline_&lt;interval&gt;</code></p>

<p><strong>Update Speed:</strong> <code>5 seconds</code></p>
<h2 id="depth-stream">Depth Stream</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["btcinr@depth"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631682370000</span><span class="p">,</span><span class="w">       </span><span class="c1">// Event time</span><span class="w">
    </span><span class="nl">"a"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">                   </span><span class="c1">// Asks to be updated</span><span class="w">
      </span><span class="p">[</span><span class="w">
        </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Price level to be updated</span><span class="w">
        </span><span class="s2">"75.0"</span><span class="w">               </span><span class="c1">// Quantity</span><span class="w">
      </span><span class="p">]</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="nl">"b"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">                   </span><span class="c1">// Bids to be updated</span><span class="w">
      </span><span class="p">[</span><span class="w">
        </span><span class="s2">"6.0"</span><span class="p">,</span><span class="w">               </span><span class="c1">// Price level to be updated</span><span class="w">
        </span><span class="s2">"50.0"</span><span class="w">               </span><span class="c1">// Quantity</span><span class="w">
      </span><span class="p">]</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"btcinr"</span><span class="w">             </span><span class="c1">// Symbol</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"btcinr@depth"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Order book price and quantity depth updates.</p>

<p><strong>Stream Name:</strong> <code>&lt;symbol&gt;@depth</code></p>

<p><strong>Update Speed:</strong> <code>3 seconds</code></p>
<h2 id="partial-depth-stream">Partial Depth Stream</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["btcinr@depth10@100ms"]{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631682370000</span><span class="p">,</span><span class="w">       </span><span class="c1">// Event time</span><span class="w">
    </span><span class="nl">"a"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">                   </span><span class="c1">// Asks to be updated</span><span class="w">
      </span><span class="p">[</span><span class="w">
        </span><span class="s2">"10.0"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Price level to be updated</span><span class="w">
        </span><span class="s2">"75.0"</span><span class="w">               </span><span class="c1">// Quantity</span><span class="w">
      </span><span class="p">],</span><span class="w">
      </span><span class="c1">...</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="nl">"b"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">                   </span><span class="c1">// Bids to be updated</span><span class="w">
      </span><span class="p">[</span><span class="w">
        </span><span class="s2">"6.0"</span><span class="p">,</span><span class="w">               </span><span class="c1">// Price level to be updated</span><span class="w">
        </span><span class="s2">"50.0"</span><span class="w">               </span><span class="c1">// Quantity</span><span class="w">
      </span><span class="p">],</span><span class="w">
      </span><span class="c1">...</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"btcinr"</span><span class="w">             </span><span class="c1">// Symbol</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"btcinr@depth10@100ms"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Order book price and quantity depth updates. </p>

<p>Supported levels - 5, 10 or 20.</p>

<p><strong>Stream Name:</strong> <code>&lt;symbol&gt;@depth&lt;level&gt;@100ms</code></p>

<p><strong>Update Speed:</strong> <code>100 ms</code></p>

<aside class="notice">
This will send an update only when there is a change in the order book.
</aside>
<h2 id="account-update">Account Update</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["outboundAccountPosition"], "auth_key":"***"{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"B"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">                            </span><span class="c1">// Balances Array</span><span class="w">
      </span><span class="p">{"{"}</span><span class="w">
        </span><span class="nl">"a"</span><span class="p">:</span><span class="s2">"wrx"</span><span class="p">,</span><span class="w">                    </span><span class="c1">// Asset</span><span class="w">
        </span><span class="nl">"b"</span><span class="p">:</span><span class="s2">"2043856.426455209"</span><span class="p">,</span><span class="w">      </span><span class="c1">// Free</span><span class="w">
        </span><span class="nl">"l"</span><span class="p">:</span><span class="s2">"3001318.98"</span><span class="w">              </span><span class="c1">// Locked</span><span class="w">
      </span><span class="p">{"}"}</span><span class="w">
    </span><span class="p">],</span><span class="w">
    </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631683058909</span><span class="w">                 </span><span class="c1">// Event time</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"outboundAccountPosition"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p><code>outboundAccountPosition</code> is sent any time an account balance has changed and contains the assets that were possibly changed by the event that generated the balance change.</p>

<p><strong>Stream Name:</strong> <code>outboundAccountPosition</code></p>

<p><strong>Requires:</strong> <code>auth_key</code></p>
<h2 id="order-update">Order Update</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}"event":"subscribe","streams":["orderUpdate"], "auth_key":"***"{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631683058904</span><span class="p">,</span><span class="w">       </span><span class="c1">// Event time</span><span class="w">
    </span><span class="nl">"O"</span><span class="p">:</span><span class="mi">1631683058000</span><span class="p">,</span><span class="w">       </span><span class="c1">// Updated time</span><span class="w">
    </span><span class="nl">"S"</span><span class="p">:</span><span class="s2">"ask"</span><span class="p">,</span><span class="w">               </span><span class="c1">// Kind</span><span class="w">
    </span><span class="nl">"V"</span><span class="p">:</span><span class="s2">"70.0"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Original volume</span><span class="w">
    </span><span class="nl">"X"</span><span class="p">:</span><span class="s2">"wait"</span><span class="p">,</span><span class="w">              </span><span class="c1">// State</span><span class="w">
    </span><span class="nl">"i"</span><span class="p">:</span><span class="mi">26946170</span><span class="p">,</span><span class="w">            </span><span class="c1">// Order ID</span><span class="w">
    </span><span class="nl">"m"</span><span class="p">:</span><span class="kc">true</span><span class="p">,</span><span class="w">                </span><span class="c1">// Is market maker?</span><span class="w">
    </span><span class="nl">"o"</span><span class="p">:</span><span class="s2">"sell"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Type</span><span class="w">
    </span><span class="nl">"p"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">               </span><span class="c1">// Price</span><span class="w">
    </span><span class="nl">"q"</span><span class="p">:</span><span class="s2">"70.0"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Balance Volume</span><span class="w">
    </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"wrxinr"</span><span class="p">,</span><span class="w">            </span><span class="c1">// Symbol</span><span class="w">
    </span><span class="nl">"v"</span><span class="p">:</span><span class="s2">"0.0"</span><span class="w">                </span><span class="c1">// Average price</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"orderUpdate"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Orders are updated with the <code>orderUpdate</code> event.</p>

<p><strong>Stream Name:</strong> <code>orderUpdate</code></p>

<p><strong>Requires:</strong> <code>auth_key</code></p>
<h2 id="trade-update">Trade Update</h2>
<blockquote>
<p>Request</p>
</blockquote>
<div class="highlight"><pre class="highlight plaintext"><code>{"{"}event":"subscribe","streams":["ownTrade"], "auth_key":"***"{"}"}
</code></pre></div>
<blockquote>
<p>Payload:</p>
</blockquote>
<div class="highlight"><pre class="highlight json-doc tab-json-doc"><code><span class="p">{"{"}</span><span class="w">
  </span><span class="nl">"data"</span><span class="p">:</span><span class="w">
  </span><span class="p">{"{"}</span><span class="w">
    </span><span class="nl">"E"</span><span class="p">:</span><span class="mi">1631683058000</span><span class="p">,</span><span class="w">      </span><span class="c1">// Event time</span><span class="w">
    </span><span class="nl">"S"</span><span class="p">:</span><span class="s2">"ask"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Kind</span><span class="w">
    </span><span class="nl">"U"</span><span class="p">:</span><span class="s2">"inr"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Fee currency</span><span class="w">
    </span><span class="nl">"a"</span><span class="p">:</span><span class="mi">114144050</span><span class="p">,</span><span class="w">          </span><span class="c1">// Seller ID</span><span class="w">
    </span><span class="nl">"b"</span><span class="p">:</span><span class="mi">114144121</span><span class="p">,</span><span class="w">          </span><span class="c1">// Buyer ID</span><span class="w">
    </span><span class="nl">"f"</span><span class="p">:</span><span class="s2">"0.2"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Fee</span><span class="w">
    </span><span class="nl">"m"</span><span class="p">:</span><span class="kc">true</span><span class="p">,</span><span class="w">               </span><span class="c1">// Is market maker?</span><span class="w">
    </span><span class="nl">"o"</span><span class="p">:</span><span class="mi">26946170</span><span class="p">,</span><span class="w">           </span><span class="c1">// Order ID</span><span class="w">
    </span><span class="nl">"p"</span><span class="p">:</span><span class="s2">"5.0"</span><span class="p">,</span><span class="w">              </span><span class="c1">// Price</span><span class="w">
    </span><span class="nl">"q"</span><span class="p">:</span><span class="s2">"20.0"</span><span class="p">,</span><span class="w">             </span><span class="c1">// Quantity</span><span class="w">
    </span><span class="nl">"s"</span><span class="p">:</span><span class="s2">"btcinr"</span><span class="p">,</span><span class="w">           </span><span class="c1">// Symbol</span><span class="w">
    </span><span class="nl">"t"</span><span class="p">:</span><span class="mi">17376032</span><span class="p">,</span><span class="w">           </span><span class="c1">// Trade ID</span><span class="w">
    </span><span class="nl">"w"</span><span class="p">:</span><span class="s2">"100.0"</span><span class="w">             </span><span class="c1">// Funds</span><span class="w">
  </span><span class="p">{"}"},</span><span class="w">
  </span><span class="nl">"stream"</span><span class="p">:</span><span class="s2">"ownTrade"</span><span class="w">
</span><span class="p">{"}"}</span><span class="w">
</span></code></pre></div>
<p>Trades are updated with the <code>ownTrade</code> event.</p>

<p><strong>Stream Name:</strong> <code>ownTrade</code></p>

<p><strong>Requires:</strong> <code>auth_key</code></p>

      </div>
      <div class="dark-box">
      </div>
</div>
        
    );
};

export default Body;