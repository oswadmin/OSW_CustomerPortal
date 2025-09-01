import { notFound } from "next/navigation";
import { servicesConfig } from "@/config/servicesConfig";
import { Metadata } from "next";

import { PageTitleSection } from "@/components/PageSection-Title";
import { PageSection } from "@/components/PageSection";
import { CardServicesv4 } from "@/components/CardServices";
import { PageEstimateSection } from "@/components/PageSection-Estimate";
import Image from "next/image";
import ModalMenu from "@/components/MenuMobileTop";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import ModalOverlay from "@/components/MenuMobileBottom";

// This tells Next.js which pages to pre-build at build time.
// It improves performance and is great for SEO.
export async function generateStaticParams() {
    return servicesConfig.OSW_Services
        .filter(service => service.activeService)
        .map((service) => ({
            slug: service.slug,
        }));
}

// This function generates the unique metadata for each service page.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = servicesConfig.OSW_Services.find(s => s.slug === params.slug);

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested service could not be found.",
        };
    }

    return {
        title: service.metaTitle,
        description: service.metaDescription,
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            images: ['/OSW_Logo_3_Transparent.webp'], // You can even add service-specific images here
        },
    };
}

// This is the React component for the page itself.
export default function IndividualServicePage({ params }: { params: { slug: string } }) {
    // Find the specific service data based on the slug from the URL
    const serviceData = servicesConfig.OSW_Services.find(obj => obj.slug === params.slug);

    // If no service matches the slug, show a 404 page
    if (!serviceData || !serviceData.activeService) {
        notFound();
    }

    // Now we render the content for just this one service
    return (
        <>
            <main>
                <ModalMenu />
                <PageHeader />


                <PageSection
                    sectionID={serviceData.name}
                    title={serviceData.service.titleMsg} // Or maybe a more detailed title
                    subtitle={serviceData.service.subTitleMsg}
                    className="bg-gradient-to-b from-white from-0% via-sky-100 via-50% to-white to-100%"
                >
                    <div className="flex flex-wrap justify-center desktop:space-x-4">
                        {serviceData.service.details.map((detail, index) => (
                            <CardServicesv4
                                key={index} // Add a key for React lists
                                cardTitle={detail.detailSummary}
                                cardDesc={detail.detailDescription}
                            >
                                <Image
                                    src={detail.detailImageURL}
                                    alt={detail.detailSummary} // IMPORTANT: Add descriptive alt text for SEO
                                    width={350}
                                    height={400}
                                    className={detail.detailImageClass}
                                // Consider removing layout="responsive" and objectFit="cover" for Next 13+ Image,
                                // as it's handled differently. Styling with Tailwind is preferred.
                                />
                            </CardServicesv4>
                        ))}
                    </div>
                </PageSection>

                <PageEstimateSection title={serviceData.service.estimateMsg} className="bg-white" />
            </main>

            <PageFooter />
            <ModalOverlay />
        </>
    );
} 