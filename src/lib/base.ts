/** Prefix site paths so GitHub Pages (`/glass-website/`) and local (`/`) both work. */
export function withBase(path: string) {
  if (/^(https?:|tel:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
