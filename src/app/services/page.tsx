"use client"

import { CardServices, CardServicesv2, CardServicesv3, CardServicesv4 } from "@/components/CardServices";
import ModalOverlay from "@/components/MenuMobileBottom";
import { PageEstimateSection } from "@/components/PageSection-Estimate";
import PageFooter from "@/components/PageFooter";
import { PageSection } from "@/components/PageSection";
import { PageTitleSection } from "@/components/PageSection-Title";
import { servicesConfig } from "@/config/servicesConfig";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


function ServicePage() {
    const searchParams = useSearchParams()
    const service = searchParams.get('service')
    
    // Handle the case where router.query isn't loaded yet
    if (!service) {
      return <div>Loading...</div>
    }

    const serviceData = servicesConfig.OSW_Services.find(
      s => s.name.toLowerCase() === service.toLowerCase()
    )

    //return <div>Service not found</div>
    if (!serviceData) {
      return <div>ServiceData Not Found</div>
    }

    return (
      <>
          {/*****************************************************************/}
          {/* TITLE SECTION*/}
          {/*****************************************************************/}
          <PageTitleSection title={serviceData?.service?.titleMsg || "Service Not Found"} imgURL={serviceData?.service?.titleImg || "Default Image" } />


          {/*****************************************************************/}
          {/* PRESSURE WASHING SERVICES SECTION*/}
          {/*****************************************************************/}
          <PageSection title={serviceData?.service.serviceMsg  || "Service Not Found"}  className="bg-white">
            
            <div className="flex flex-wrap justify-center desktop:space-x-4">

              {serviceData?.service.details.map((detail, index) => (
              <>

                <CardServicesv4
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
                </CardServicesv4>

                </> 
              ))}

            </div>

          </PageSection>

          {/*****************************************************************/}
          {/* ESTIMATE SECTION */}
          {/*****************************************************************/}
          {/* <PageEstimateSection title={serviceData?.service.estimateMsg  || "Service Not Found"} className=" bg-gradient-to-b from-white to-orange"/> */}
          <PageEstimateSection title={serviceData?.service.estimateMsg  || "Service Not Found"} className="bg-white"/>
      </>
    )
  }
  





export default function ServicesPage() {

  return (
    <>
      <main>
      <Suspense fallback={<div>Loading Content...</div>}>
        <ServicePage/>
      </Suspense>
        
        
      </main>
        

        <PageFooter/>
        <ModalOverlay/>
    </>
  );
}
