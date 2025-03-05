import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/", "/services", "/estimate"],
			disallow: "/private/",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
