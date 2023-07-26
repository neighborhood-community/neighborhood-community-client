const REDIRECT_URI = 'http://localhost:5173/verify';
const { VITE_APP_KAKAO_API_KEY } = import.meta.env;

export const loginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
