export const environment = {
    production: false,
    apiBaseUrl: 'https://practice4angularapi-preprod.azurewebsites.net/api/',
    adalConfig: {
      tenant: '89be46b9-7f83-4900-b212-b958a44c5aaf',
      clientId: '34bc9585-04bb-4acf-af95-33bf2e49f0d2',
      redirectUri: 'https://practice4angular-preprod.azurewebsites.net/signin-oidc',
      postLogoutRedirectUri: 'https://practice4angular-preprod.azurewebsites.net/',
      endpoints: { 'https://practice4angularapi-preprod.azurewebsites.net/api/' : '8ea30e0f-c491-4814-bdd7-2daa2f1adfd4' },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'sessionStorage'
    }
};