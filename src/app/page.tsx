"use client"
import { CardReviews } from "@/components/CardReviews";
import { CardServices, CardServicesv2, CardServicesv4 } from "@/components/CardServices";
import { CardWhyUsLarge } from "@/components/CardWhyUsLarge";
import ModalOverlay from "@/components/ModalOverlay";
import { PageEstimateSection } from "@/components/PageEstimateSection";
import PageFooter from "@/components/PageFooter";
import { PageSection } from "@/components/PageSection";
import { PageTitleSection } from "@/components/PageTitleSection";
import { servicesConfig, siteConfig } from "@/config";
import Image from "next/image";
import { map } from "zod";
import { useState, useEffect } from 'react';
import GoogelReviews from "@/components/GoogleReview";


const imgH = "600";
let mapCount = 0;
let printDiv = true;

export default function HomePage() {

  return (
    <>
      <main>
        

        {/*****************************************************************/}
        {/* TITLE SECTION*/}
        {/*****************************************************************/}
        <PageTitleSection title="Soft Washing Central Ohio" imgURL="/Sunny.png"/>

        {/*****************************************************************/}
        {/* SERVICES SECTION*/}
        {/*****************************************************************/}
        <PageSection sectionID="Services" title="What we wash" subtitle="Click a service to dive deeper..." className="bg-white">
                   
          <div className="flex flex-col desktop:flex-row desktop:flex-wrap justify-center gap-4 px-4 desktop:px-0">
            
          {
            servicesConfig.OSW_Services.map((obj, index) => {
              if (obj.activeService) {
                return (
                    <CardServicesv4 cardTitle={obj.name} cardURL={obj.url} key={`svc${obj.name}`}>
                      <Image
                        src={obj.src}
                        alt=""
                        width={600}
                        height={600}
                        className={obj.className}
                      />
                    </CardServicesv4>
                );
              }
              return null;
            })
          }
          </div>

        </PageSection>


        {/*****************************************************************/}
        {/* LOCATIONS SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="FAQs" title="What is Soft Washing?" subtitle="A safe  effective way to clean your home..." className="bg-white">
        <div className="flex flex-col desktop:flex-row">

            <div className="flex flex-1 flex-col justify-center items-center p-6">
            <p>Soft washing is a low-pressure approach which combines special cleaning solution, soaps, and a power washing system that uses about the same pressure as a garden hose.   However, unlike a standard garden hose, our equipment provides increased flow rate allowing us to easily reach any part of your home from the ground.  We promise to never use high-pressure on delicate surfaces!</p>
          </div>
          

        </div>


        </PageSection>

        {/*****************************************************************/}
        {/* LOCATIONS SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="Locations" title="Our Locations" subtitle="We are proudly serving..." className="bg-white">
          
          <div className="flex flex-col desktop:flex-row">
            <div className="flex flex-1 flex-col justify-center items-center text-blue">

              <p className="text-3xl pb-2">Westerville, OH</p>
              <p className="text-3xl pb-2">Worthington, OH</p>
              <p className="text-3xl pb-2">Lewis Center, OH</p>
              <p className="text-3xl pb-2">Sunbury, OH</p>
              <p className="text-3xl pb-2">New Albany, OH</p>
              <p className="text-3xl pt-2 pb-2">+ Surrounding Areas</p>
            </div>

            <div className="flex-1">
              <Image 
                src="/OSW_Locations.png"
                alt="" 
                width={700}
                height={700}
                className='rounded-[12px] border-slate-200 border-[1px] w-auto h-auto shadow-lg'
              />
            
            </div>
          </div>
        </PageSection>

        {/*****************************************************************/}
        {/* REVIEWS SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="Reviews" title="Our Reviews" subtitle="What people are saying..." className="bg-white ">
          
          <GoogelReviews placeId="ChIJQ7ge5FCdNKMRdhLJTP6maks"/>


        </PageSection>

        {/*****************************************************************/}
        {/* ABOUT SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="AboutUs"  title="About us" subtitle=" " className="bg-white">

          {/*****************************************************************/}
          {/* OWNERS MESSAGE */}
          {/*****************************************************************/}
          <div className="container flex gap-6 mb-4 flex-col desktop:flex-row ">
            <div className="flex flex-col w-full desktop:w-2/3 order-2 desktop:order-1">
              <span className="text-2xl desktop:text-3xl font-bold text-blue mb-4">A message from the owner</span>
              <span>{`Dylan here, owner and operator of Orange Softwash. I'd like to start off by saying thank you for considering us for your home washing needs. I have instilled in my team that excellence, commitment, passion, and top-notch services are table stakes, but they are only part of our measurement of success.  Above all else, its the people we serve, and the experiences we create, that truly set us apart.   I take great pride in my team, and I'm confident that you will not find a better exterior washing services anywhere else.`}</span>
            </div>

            <div className="flex order-1 md:order-2">
              
              <div className='w-[250px] h-[250px] rounded-full border-4 border-orange shadow-md overflow-hidden'>
                <Image 
                  src = {siteConfig.OSW_IMG.PROFILE_DYLAN}
                  alt = ""
                  width={600}
                  height={600}
                  className="relative scale-[1.4] left-[0px] bottom-[0px]"
                />
              </div>

            </div>

          </div>
          
          
          {/*****************************************************************/}
          {/* VALUE MESSAGE */}
          {/*****************************************************************/}
          <div className="container flex flex-col desktop:flex-row justify-between gap-6 items-center ">
          <div className="flex lg:w-1/3 sm:flex-col">
             <div className='w-[250px] h-[250px] rounded-full border-4 border-orange shadow-md overflow-hidden'>
                <Image 
                  src = {siteConfig.OSW_IMG.Edger1}
                  alt = ""
                  width={600}
                  height={600}
                  className="relative scale-[1.7] left-[0px] bottom-[-50px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:w-2/3 ">
            <span className="text-2xl desktop:text-3xl font-bold text-blue mb-4">Our value is unmatched</span>
              <span>{`Orange Softwash goes above and beyond to provide results at prices that make sense for your budget. We don't just clean—we aim to protect your investment. Our expert team tailors each service to your property's specific needs. We bring the perfect balance of power and precision to every job, proving why homeowners and businesses throughout the area trust us as their go-to exterior cleaning specialists.`}</span>
            </div>

          </div>
        </PageSection>

        {/*****************************************************************/}
        {/* WHY SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="Why" title="Why Choose Us?" subtitle=" " className="bg-white">
          <div className="container flex flex-wrap justify-center gap-4 ">
            <CardWhyUsLarge 
              title='Quick & Easy'
              cardText="Customer experience is our #1 goal.  We make it a breaze to work with us" />
            <CardWhyUsLarge 
              title='Eco-Friendly Options'
              cardText="We prioritize both the health of your property and the planet" />
            <CardWhyUsLarge 
              title='Licensed & Insured'
              cardText="Trust and confidence in the team you call" />
            <CardWhyUsLarge 
              title='Satisfaction Guaranteed'
              cardText="We stand behind our services 100%" />
          </div>
        </PageSection>


        {/*****************************************************************/}
        {/* ESTIMATE SECTION */}
        {/*****************************************************************/}
        {/* <PageEstimateSection className="bg-gradient-to-b from-white to-orange_light" title="Orange ya ready for a new look?"/> */}

        <PageEstimateSection className="bg-white" title="Orange ya ready for a new look?"/>

      </main>
      
      <PageFooter/>
      <ModalOverlay/>
    </>
  );
}
