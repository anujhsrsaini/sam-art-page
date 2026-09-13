// Helper to ensure links work with GitHub Pages base repository sub-path
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path: string): string {
  if (!path || path === '/') {
    return `${base}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
