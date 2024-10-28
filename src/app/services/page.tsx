"use client"

import { CardServices } from "@/components/CardServices";
import ModalOverlay from "@/components/ModalOverlay";
import { PageEstimateSection } from "@/components/PageEstimateSection";
import PageFooter from "@/components/PageFooter";
import { PageSection } from "@/components/PageSection";
import { PageTitleSection } from "@/components/PageTitleSection";
import { servicesConfig } from "@/config/servicesConfig";
import { siteConfig } from "@/config/siteConfig";
import Image from "next/image";
import { useSearchParams } from "next/navigation";


export default function ServicesPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get('service')
  
  // Handle the case where router.query isn't loaded yet
  if (!service) {
    return <div>Loading...</div>
  }

  const serviceData = servicesConfig.OSW_Services.find(
    s => s.name.toLowerCase() === service.toLowerCase()
  )

  if (!serviceData) {
    return <div>Service not found</div>
  }

  return (
    <>
      <main>
        {/*****************************************************************/}
        {/* TITLE SECTION*/}
        {/*****************************************************************/}
        <PageTitleSection title={serviceData.service.titleMsg} imgURL={serviceData.service.titleImg}/>


        {/*****************************************************************/}
        {/* PRESSURE WASHING SERVICES SECTION*/}
        {/*****************************************************************/}
        <PageSection title={serviceData.service.serviceMsg}  className="bg-gradient-to-b from-white to-bg_secondary">
          
          <div className="flex flex-wrap justify-center desktop:space-x-4">

            {serviceData.service.details.map((detail, index) => (
             <>

              <CardServices
                cardTitle={detail.detailSummary}
                cardDesc={detail.detailDescription}
              >
                <Image 
                  src = {detail.detailImageURL}
                  alt = ""
                  width={600}
                  height={600}
                  className={detail.detailImageClass}
                />
              </CardServices>

              </> 
            ))}

          </div>

        </PageSection>

        {/*****************************************************************/}
        {/* ESTIMATE SECTION */}
        {/*****************************************************************/}
        <PageEstimateSection title={serviceData.service.estimateMsg} className=" bg-gradient-to-b from-bg_secondary to-orange"/>
        
        
        
        
        </main>
        

        <PageFooter/>
        <ModalOverlay/>
    </>
  );
}
