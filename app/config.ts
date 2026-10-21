// Host publico de gr-auth-ui (login centralizado). Es publico por diseno, no un secreto.
export const AUTH_UI_URL = process.env.NEXT_PUBLIC_AUTH_UI_URL ?? "https://auth.residencialpoli.online";
