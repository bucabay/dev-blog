/**
 * Prefix an internal, root-relative path with Astro's configured `base`.
 *
 * Astro applies `base` automatically to bundled assets and to the URLs it
 * generates (e.g. `paginate()`), but NOT to hrefs written by hand in templates.
 * Use this for every hardcoded internal link so the site works both at a domain
 * root and under a subpath such as GitHub Pages' `/<repo>/`.
 *
 *   withBase("/posts/")  // "/dev-blog/posts/" when base is "/dev-blog"
 *   withBase("/posts/")  // "/posts/"          when base is "/"
 */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
