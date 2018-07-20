let SERVER_URL;
//process.env.NODE_ENV = 'local'; complex due to fb page webhook settings
if (process.env.NODE_ENV === 'local'){
  SERVER_URL = 'localhost'
}
else {
  SERVER_URL = 'https://smart-jimmy.herokuapp.com'
}
module.exports = {
    FB_PAGE_TOKEN: '<token>',
    FB_VERIFY_TOKEN: '<token>',
    API_AI_CLIENT_ACCESS_TOKEN: '<token>',
    FB_APP_SECRET: '<secret>',
    OWM_API_KEY: '<key>',
    SERVER_URL
};
