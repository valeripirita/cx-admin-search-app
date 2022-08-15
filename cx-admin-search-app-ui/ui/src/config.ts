import { OktaAuth } from '@okta/okta-auth-js';

const OKTA_DOMAIN = 'gamesys.okta.com';
const CLIENT_ID = '0oan1dtyetv6TtyZD1t7';
const REDIRECT_URI = window.location.origin + '/login/callback';

export const oktaConfig = new OktaAuth({
    issuer: `https://${OKTA_DOMAIN}/oauth2/ausn1dtvgpXMM9dKE1t7`,
    clientId: `${CLIENT_ID}`,
    redirectUri: REDIRECT_URI,
    scopes: ['profile', 'openid', 'email']
});
