import { servicesConfig } from "@/config/servicesConfig";

export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    // 1. Generate URLs for each active service slug page
    const serviceUrls = servicesConfig.OSW_Services
        .filter(service => service.activeService) // First, filter for only active services
        .map(service => {
            return {
                url: `${baseUrl}/services/${service.slug}`, // Construct the URL with the slug
                lastModified: new Date(),
            };
        });

    // 2. Define your static page routes
    const staticRoutes = ['/', '/services', '/estimate'];
    const staticUrls = staticRoutes.map(route => {
        return {
            url: route === '/' ? baseUrl : `${baseUrl}${route}`,
            lastModified: new Date(),
        };
    });

    // 3. Combine the static and dynamic URLs into a single array
    return [
        ...staticUrls,
        ...serviceUrls
    ];
}