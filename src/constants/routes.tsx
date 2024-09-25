import getEndpoint from '@/lib/api/url';

export const DEV_SERVER_URL = "http://localhost:8080"
export const PRO_SERVER_URL = "https://takahara-morpet-36949f6ab0f6.herokuapp.com"

export const USERS_URL = `${getEndpoint()}/users`
export const USERS_DETAIL_URL = `${getEndpoint()}/users`

export const POSTS_URL = `${getEndpoint()}/posts`
export const REPLIES_URL = `${getEndpoint()}/replys`

// export const HOME_URL = `${getEndpoint()}/events`
// export const PROFILE_URL = `${getEndpoint()}/user/@me`
// export const EVENTS_URL = `${getEndpoint()}/events`
// export const EVENTS_DETAIL_URL = `${getEndpoint()}/event/`
// export const SEARCH_FRIENDS_URL = `${getEndpoint()}/search/friends
//`