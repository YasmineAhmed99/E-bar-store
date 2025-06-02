
export function getSessionToken() {
  const tokenKey = 'session_token';
  let token = localStorage.getItem(tokenKey);

  if (!token) {
    token = [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    localStorage.setItem(tokenKey, token);
  }

  return token;
}

