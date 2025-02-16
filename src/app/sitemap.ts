import { servicesConfig } from "@/config/servicesConfig";

export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    
    const services = servicesConfig.OSW_Services.map((obj, index) => {
                  
        if (obj.activeService === false) {
            return null;
        }

        return {
            url: `${baseUrl}${obj.url}`,
            lastModified: new Date(),
        }
    
    }).filter(service => service != null); //Filter out null entries


    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...services.map(service => ({
            ...service,
            lastModified: service.lastModified.toISOString()
        })),
        {
            url: `${baseUrl}/estimate`,
            lastModified: new Date(),
        },
    ]
}