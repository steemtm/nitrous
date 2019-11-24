import { fromJSOrdered } from './utils/immutable';

export const CONFIG_MAP = {
    'foodiesunite.net': {
        APP_NAME: 'FoodiesUnite',
        APP_ICON: 'foodies',
        APP_ICON_WIDTH: '220px',
        APP_ICON_HEIGHT: '40px',
        APP_URL: 'https://foodiesunite.net',
        APP_DOMAIN: 'foodiesunite.net',
        LIQUID_TOKEN: 'FOODIE',
        LIQUID_TOKEN_UPPERCASE: 'FOODIE',
        APP_MAX_TAG: 10,
        SCOT_TAG: 'foodie',
        TAG_LIST: fromJSOrdered({
            bbq: [],
            beverages: [
                'functionalbeverages',
                'healthybeverages',
                'sportsbeverages',
            ],
            dairy: [],
            desserts: [],
            food: ['fooding', 'functionalfood', 'healthfood'],
            gastronomy: [],
            healthyfoods: [],
            keto: [],
            organic: [],
            snacks: [],
            sweets: ['vitamins', 'minerals'],
            vegetarian: [],
            vegan: [],
            recipies: [],
            community: [
                'cleanplanet',
                'innerblocks',
                'ecotrain',
                'steembasicincome',
                'weedcash',
                'vegansofsteemit',
            ],
            contest: [],
        }),
        INTERLEAVE_PROMOTED: true,
        PROMOTED_POST_ACCOUNT: 'foodiepromo',
        VESTING_TOKEN: 'FOODIE POWER',
        SITE_DESCRIPTION:
            'FoodiesUnite is a social media platform where everyone gets paid for ' +
            'creating and curating content. It leverages a robust digital points system, called FOODIE, that ' +
            'supports real value for digital rewards through market price discovery and liquidity',
        // Revive Ads
        NO_ADS_STAKE_THRESHOLD: 9999999999,
        REVIVE_ADS: {},
        ALLOW_MASTER_PW: false,
        // Footer to attach to posts. ${POST_URL} is a macro that can be used, will be expanded to the URL of the post.
        POST_FOOTER: '',
        SCOT_TAG_FIRST: false,
        PINNED_POSTS_URL: null,
        SDC_GTAG_MEASUREMENT_ID: 'UA-145448693-27',
    },
    'vit.global': {
        APP_NAME: 'VisionIndustry',
        APP_ICON: 'vitp',
        APP_ICON_WIDTH: '125px',
        APP_ICON_HEIGHT: '40px',
        APP_URL: 'https://vit.global',
        APP_DOMAIN: 'vit.global',
        LIQUID_TOKEN: 'VIT',
        LIQUID_TOKEN_UPPERCASE: 'VITP',
        APP_MAX_TAG: 10,
        SCOT_TAG: 'vit',
        TAG_LIST: fromJSOrdered(['vit']),
        INTERLEAVE_PROMOTED: true,
        PROMOTED_POST_ACCOUNT: 'null',
        VESTING_TOKEN: 'VIT POWER',
        SITE_DESCRIPTION:
            'VisionIndustry is a social media platform where everyone gets paid for ' +
            'creating and curating content. It leverages a robust digital points system, called VIT, that ' +
            'supports real value for digital rewards through market price discovery and liquidity',
        // Revive Ads
        NO_ADS_STAKE_THRESHOLD: 9999999999,
        REVIVE_ADS: {},
        ALLOW_MASTER_PW: false,
        // Footer to attach to posts. ${POST_URL} is a macro that can be used, will be expanded to the URL of the post.
        POST_FOOTER: '',
        SCOT_TAG_FIRST: false,
        PINNED_POSTS_URL: null,
        SDC_GTAG_MEASUREMENT_ID: 'UA-145448693-26',
    },
    'dblog.io': {
        APP_NAME: 'DBlog',
        APP_ICON: 'dblog',
        APP_ICON_WIDTH: '150px',
        APP_ICON_HEIGHT: '40px',
        APP_URL: 'https://dblog.io',
        APP_DOMAIN: 'dblog.io',
        LIQUID_TOKEN: 'DBLOG',
        LIQUID_TOKEN_UPPERCASE: 'DBLOG',
        APP_MAX_TAG: 10,
        SCOT_TAG: 'dblog',
        TAG_LIST: fromJSOrdered(['dblog']),
        INTERLEAVE_PROMOTED: true,
        PROMOTED_POST_ACCOUNT: 'dblog.promo',
        VESTING_TOKEN: 'DBLOG POWER',
        SITE_DESCRIPTION:
            'DBlog is a social media platform where everyone gets paid for ' +
            'creating and curating content. It leverages a robust digital points system, called DBLOG, that ' +
            'supports real value for digital rewards through market price discovery and liquidity',
        // Revive Ads
        NO_ADS_STAKE_THRESHOLD: 9999999999,
        REVIVE_ADS: {},
        ALLOW_MASTER_PW: false,
        // Footer to attach to posts. ${POST_URL} is a macro that can be used, will be expanded to the URL of the post.
        POST_FOOTER: '',
        SCOT_TAG_FIRST: false,
        PINNED_POSTS_URL: null,
        SDC_GTAG_MEASUREMENT_ID: 'UA-145448693-25',
        GOOGLE_AD_CLIENT: 'ca-pub-8763908884278473',
    },
    'weedcash.network': {
        APP_NAME: 'WeedCash',
        APP_ICON: 'weedcash',
        APP_ICON_WIDTH: '140px',
        APP_ICON_HEIGHT: '40px',
        APP_URL: 'https://www.weedcash.network',
        APP_DOMAIN: 'www.weedcash.network',
        LIQUID_TOKEN: 'Weed',
        LIQUID_TOKEN_UPPERCASE: 'WEED',
        APP_MAX_TAG: 10,
        SCOT_TAG: 'weedcash',
        TAG_LIST: fromJSOrdered([
            'weedcash',
            'weed',
            'cannabis',
            'hemp',
            'psychedelic',
            'review',
            'naturalmedicine',
            'concentrate',
            'edibles',
            'breeding',
            'glass',
            'canna-curate',
            'hash',
            'cbd',
            'news',
            'props4crops',
            'ganja',
        ]),
        INTERLEAVE_PROMOTED: true,
        PROMOTED_POST_ACCOUNT: 'null',
        VESTING_TOKEN: 'WEED POWER',
        SITE_DESCRIPTION:
            'Weedcash is a social media platform where everyone gets paid for ' +
            'creating and curating content. It leverages a robust digital points system, called WEED, that ' +
            'supports real value for digital rewards through market price discovery and liquidity',
        // Revive Ads
        NO_ADS_STAKE_THRESHOLD: 9999999999,
        REVIVE_ADS: {},
        ALLOW_MASTER_PW: false,
        // Footer to attach to posts. ${POST_URL} is a macro that can be used, will be expanded to the URL of the post.
        POST_FOOTER: '',
        SCOT_TAG_FIRST: false,
        PINNED_POSTS_URL: 'https://richardcrill.github.io',
        SDC_GTAG_MEASUREMENT_ID: 'UA-140856330-1',
        SCOT_DEFAULT_BENEFICIARY_ACCOUNT: 'coffeebuds',
        SCOT_DEFAULT_BENEFICIARY_PERCENT: 4.2, // between 0 amd 100
        SHOW_AUTHOR_RECENT_POSTS: true,
    },
};

// FIXME figure out best way to do this on both client and server from env
// vars. client should read $STM_Config, server should read config package.

export const INVEST_TOKEN_UPPERCASE = 'STEEM POWER';
export const INVEST_TOKEN_SHORT = 'SP';
export const DEBT_TOKEN = 'STEEM DOLLAR';
export const DEBT_TOKENS = 'STEEM DOLLARS';
export const CURRENCY_SIGN = '$';
export const WIKI_URL = ''; // https://wiki.golos.io/
export const LANDING_PAGE_URL = 'https://steem.io/';
export const WHITEPAPER_URL = 'https://steem.io/SteemWhitePaper.pdf';

// these are dealing with asset types, not displaying to client, rather sending data over websocket
export const LIQUID_TICKER = 'STEEM';
export const VEST_TICKER = 'VESTS';
export const DEBT_TICKER = 'SBD';
export const DEBT_TOKEN_SHORT = 'SBD';

// application settings
export const DEFAULT_LANGUAGE = 'en'; // used on application internationalization bootstrap
export const DEFAULT_CURRENCY = 'USD';
export const ALLOWED_CURRENCIES = ['USD'];
