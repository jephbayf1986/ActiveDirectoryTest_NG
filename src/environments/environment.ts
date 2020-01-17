export const environment = {
    production: false,
    apiBaseUrl: 'https://localhost:44366/api/',
    adalConfig: {
      tenant: '89be46b9-7f83-4900-b212-b958a44c5aaf',
      clientId: '34bc9585-04bb-4acf-af95-33bf2e49f0d2',
      redirectUri: 'http://localhost:4200/signin-oidc',
      //Adal-Angular4
      //postLogoutRedirectUri: 'http://localhost:4200',
      endpoints: { 
        'https://localhost:44366/api/': '8ea30e0f-c491-4814-bdd7-2daa2f1adfd4',
        'https://graph.microsoft.com/v1.0/': '00000003-0000-0000-c000-000000000000'
      },
      //MS Adal-Angular6
      navigateToLoginRequestUrl: false,
      cacheLocation: 'sessionStorage'
    }
};