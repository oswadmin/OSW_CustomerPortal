export default function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/estimate`,
			lastModified: new Date(),
		},
	]
}
