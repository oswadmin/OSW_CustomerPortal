import { CardReviews } from "@/components/CardReviews";
import { CardServices, CardServicesv2 } from "@/components/CardServices";
import { CardWhyUsLarge } from "@/components/CardWhyUsLarge";
import ModalOverlay from "@/components/ModalOverlay";
import { PageEstimateSection } from "@/components/PageEstimateSection";
import PageFooter from "@/components/PageFooter";
import { PageSection } from "@/components/PageSection";
import { PageTitleSection } from "@/components/PageTitleSection";
import { servicesConfig, siteConfig } from "@/config";
import Image from "next/image";


import { map } from "zod";


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
        <PageTitleSection title="Soft Washing Central Ohio" imgURL={siteConfig.OSW_IMG.SIDING1}/>

        {/*****************************************************************/}
        {/* SERVICES SECTION*/}
        {/*****************************************************************/}
        <PageSection sectionID="Services" title="What we wash" subtitle="Click a service to dive deeper..." className="bg-gradient-to-b from-white to-bg_secondary">
                   
          <div className="flex flex-col desktop:flex-row desktop:flex-wrap justify-center gap-4 px-4 desktop:px-0">
            
          {
            servicesConfig.OSW_Services.map((obj, index) => {
              if (obj.activeService) {
                return (
                    <CardServicesv2 cardTitle={obj.name} cardURL={obj.url} key={`svc${obj.name}`}>
                      <Image
                        src={obj.src}
                        alt=""
                        width={600}
                        height={600}
                        className={obj.className}
                      />
                    </CardServicesv2>
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
        <PageSection sectionID="FAQs" title="What is Soft Washing?" subtitle="A safe  effective way to clean your home..." className="bg-bg_secondary">
        <div className="container">
          <div className="flex-1">
            <p>Soft washing is a low-pressure approach which combines special cleaning solution, soaps, and a power washing system that uses about the same pressure as a garden hose.   However, unlike a standard garden hose, our equipment provides increased flow rate allowing us to easily reach any part of your home from the ground.  We promise to never use high-pressure on delicate surfaces!</p>
          </div>

        </div>


        </PageSection>

        {/*****************************************************************/}
        {/* LOCATIONS SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="Locations" title="Our Locations" subtitle="We are proudly serving..." className="bg-bg_secondary">
          
          <div className="flex flex-col desktop:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center space-y-1 text-blue">
              <div className="flex flex-1 w-full justify-center text-3xl">Westerville, OH</div>
              <div className="flex flex-1 justify-center text-3xl">Worthington, OH</div>
              <div className="flex flex-1 w-full justify-center text-3xl">Lewis Center, OH</div>
              <div className="flex flex-1 w-full justify-center text-3xl">Sunbury, OH</div>
              <div className="flex flex-1 w-full justify-center text-3xl">New Albany, OH</div>
              <p>&nbsp;</p>
              <div className="flex flex-1 w-full justify-center text-3xl">+ Surrounding Areas</div>
              <p>&nbsp;</p>
            </div>

            <div className="flex-1">
              <Image 
                src="/OSW_Locations.png"
                alt="" 
                width={700}
                height={700}
                className='rounded-[12px] border-white border-8 w-auto h-auto shadow-md'
              />
            
            </div>
          </div>
        </PageSection>

        {/*****************************************************************/}
        {/* REVIEWS SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="Reviews" title="Our Reviews..." subtitle="What people say about us" className="bg-bg_secondary ">
          
        <div className="container flex flex-col desktop:flex-row desktop:items-start justify-center desktop:justify-around ">

          <div className="flex flex-1 desktop:flex-none justify-center">

            <div className='w-[250px] h-[250px] rounded-full border-4 border-orange shadow-md overflow-hidden relative mb-6 desktop:mb-0'>
                  <Image 
                    src = {siteConfig.OSW_IMG.REVIEWER}
                    alt = ""
                    width={600}
                    height={600}
                    className="relative scale-[1.7] left-[-20px] bottom-[-50px]"
                  />
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 desktop:gap-0 desktop:h-[750px]">
          <div className="flex justify-center items-center desktop:space-x-[10px]  transform desktop:-translate-x-[20px]">
              <CardReviews 
                cardText="Had my parents house power washed for a surprise after their anniversary. Orange Soft Wash was incredible. Dylan came by with all the necessary tools, and he got everything cleaned up before his promised time was up. 5 Star service- Keep it up!" 
                cardName="Nick B."/>
          </div>
          <div className=" flex justify-center items-center mt-[-15px] space-x-[10px] left-1/2 transform desktop:-translate-x-[150px]">
              <CardReviews 
                cardText="Another post recommending Orange Softwash. I contacted Dylan based on the reviews here and he didn't disappoint. He really went above and beyond to clean my really old white vinyl siding."
                cardName="Lisa W."/>
          </div>  
          <div className="flex justify-center items-center mt-[-15px] space-x-[10px] left-1/2 transform desktop:-translate-x-[-110px] desktop:-translate-y-[235px]">
              <CardReviews 
                cardText="They did a great job on the side of my house and they were very polite and professional with their business, I have them come to do my sidewalk next spring because they were very affordable and the best option around the area!"
                cardName="Jason V."/>
          </div>
          <div className=" flex justify-center items-center  mt-[-15px] space-x-[10px] left-1/2 transform desktop:-translate-x-[280px] desktop:-translate-y-[235px]">
              <CardReviews 
                cardText="I used this company for power-washing my patio. I've never had such wonderful service. Great job, very reasonable, friendly, personable, did a wonderful job. I highly recommend them."
                cardName="Margaret A."
              />
          </div>
          <div className=" flex justify-center items-center  mt-[-15px] space-x-[10px] left-1/2 transform desktop:-translate-x-[20px] desktop:-translate-y-[470px]">
              <CardReviews 
                cardText="I was skeptical of 'soft washing' as i have always pressure washed my siding, but Dylan assured us that the results would be amazing and last a lot longer. He was right as it turned out amazing and more than I expected."
                cardName="Scott D."/>
          </div>
        </div>
        </div>
        </PageSection>

        {/*****************************************************************/}
        {/* ABOUT SECTION */}
        {/*****************************************************************/}
        <PageSection sectionID="AboutUs"  title="About us" subtitle=" " className="bg-bg_secondary">

          {/*****************************************************************/}
          {/* OWNERS MESSAGE */}
          {/*****************************************************************/}
          <div className="container flex gap-6 mb-4 flex-col desktop:flex-row ">
            <div className="flex flex-col w-full desktop:w-2/3 order-2 desktop:order-1">
              <span className="text-2xl desktop:text-3xl font-bold text-blue mb-4">A message from the owner</span>
              <span>{`Dylan Daly here, owner and operator of Orange Softwash. I'd like to start off by saying thank you for considering us for your home washing needs. I have instilled in my team that excellence, commitment, passion, and top-notch services are table stakes, but they are only part of our measurement of success.  Above all else, its the people we serve, and the experiences we create, that truly set us apart.   I take great pride in my team, and I'm confident that you will not find a better exterior washing services anywhere else.`}</span>
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
        <PageSection sectionID="Why" title="Why Choose Us?" subtitle=" " className="bg-bg_secondary">
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
              title='Satisfacion Guaranteed'
              cardText="We stand behind our services 100%" />
          </div>
        </PageSection>


        {/*****************************************************************/}
        {/* ESTIMATE SECTION */}
        {/*****************************************************************/}
        <PageEstimateSection className="bg-gradient-to-b from-bg_secondary to-orange" title="Orange ya ready for a new look?"/>

      </main>
      
      <PageFooter/>
      <ModalOverlay/>
    </>
  );
}
