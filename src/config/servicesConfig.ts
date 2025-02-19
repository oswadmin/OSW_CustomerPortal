import { siteConfig } from "./siteConfig";

export const servicesConfig = {

    OSW_Services: [
    {
        activeService: true,
        name: 'Surfaces',
        url: '/services#Surfaces',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.SURFACE3,
        className: "absolute scale-[2.2] left-[-130px] top-[40px]",
        service: {
            titleMsg: "Surface Pressure Washing",
            subTitleMsg: "Driveways, Patios, Pool Decks, Porches, Stoops, Walkways",
            serviceMsg: "Surface Pressure Washing",
            estimateMsg: "Ready to peel away the dirt?",
            details: [
                {
                    detailSummary:"Concrete, Brick, or Stone",
                    detailDescription: "Accumulating grime seems to be a superpower of hard surfaces.  While there is no miracle to keep them clean forever, with our refined C-3P-O process you'll get the longest lasting results possible.",
                    detailImageURL: siteConfig.OSW_IMG.SURFACE4,
                    detailImageAlt: "Clean Driveway",
                    detailImageClass:  "absolute scale-[1.3] left-[0px] top-[40px]",
                },
                {
                    detailSummary:"Stains and Chemicals",
                    detailDescription: "Often, it's more than just grime that makes your surfaces look bad.  We can treat oil, paint, rust, tire and hard water marks, sometimes removing them entirely.",
                    detailImageURL: siteConfig.OSW_IMG.SURFACE8,
                    detailImageAlt: "Oil Stain",
                    detailImageClass:  "absolute scale-[2.3] left-[10px] top-[110px]",
                },
                {
                    detailSummary:"Resealing & Regrouting",
                    detailDescription: "The cleaning is complete, but the job's not truly done. Sealer guards against future stains and chemical damage, while fresh grout revitalizes those joints. Investing in these services will pay off for years to come.",
                    detailImageURL: siteConfig.OSW_IMG.Paver1,
                    detailImageAlt: "Paver Regrout",
                    detailImageClass:  "absolute scale-[1.9] left-[0px] top-[90px]",
                },                    
            ],
        },
    },
    {
        activeService: true,
        name: 'Siding',
        url: '/services#Siding',
        aria_label: "Siding Soft Washing",
        src: siteConfig.OSW_IMG.SIDING1,
        className: "absolute scale-[2.2] left-[-130px] top-[60px]",
        service: {
            titleMsg: "Siding Soft Washing",
            subTitleMsg: "Gentle whole-home cleaning.",
            serviceMsg: "Siding Soft Washing",
            estimateMsg: "Squeeze the dirt away from your siding.",
            details: [
                {
                    detailSummary:"Vinyl, Stucco, Hardie Board",
                    detailDescription: "Regardless of what your home or business is surrounded with, our gentle and effective cleaning methods will leave your property sparkling clean without causing any damage.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageAlt: "Vinyl Siding",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"FREE",
                    detailDescription: "And hey, while we're making things shine, don't forget to check out our Waste Bin service! You get TWO FREE bin cleanings with any whole-house siding wash.  Because who wants a sparkling house with stinky bins?",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageAlt: "Vinyl Siding",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Citrus Spider Shield",
                    detailDescription: "Our Citrus Spider Shield isn't just a scent, it's an eviction notice! This specialized, long-lasting treatment creates a barrier spiders despise. Think of it as giving spiders a 'taste' of orange they won't forget, sending them packing!",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageAlt: "",
                    detailImageClass: "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Decks',
        url: '/services#Decks',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.DECK1,
        className: "absolute scale-[5.1] left-[100px] top-[-140px]",
        service: {
            titleMsg: "Deck Soft Washing",
            subTitleMsg: "Restore your deck's natural beauty.",
            serviceMsg: "Decks",
            estimateMsg: "Bring back the orange-like gleam",
            details: [
                {
                    detailSummary:"Wood, Composite, Vinyl",
                    detailDescription: "We promise to never use high pressure on any deck material.  You can have peace of mind that your deck will not be damaged by our gentle soft deck wash service.",
                    detailImageURL: siteConfig.OSW_IMG.DECK1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Brightening, Sealing, Restaining",
                    detailDescription: "People are amazed at the magical transformations we can bring to your outdoor spaces.  Our experts understand the science of wood care,  and have a knack for restoring its natural beauty. Whether your looking to brighten, seal, or restain, your deck, we'll make it look as though it were touched by an enchantment.",
                    detailImageURL: siteConfig.OSW_IMG.DECK1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Fences',
        url: '/services#Fences',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.FenceWood,
        className: "absolute scale-[2.2] left-[0px] top-[105px]",
        service: {
            titleMsg: "Fence Washing",
            subTitleMsg: "Hey",
            serviceMsg: "Fences Soft Washing",
            estimateMsg: "Ready for a fresh fence?",
            details: [
                {
                    detailSummary:"Wood, Vinyl, Metal",
                    detailDescription: "Regular wood fence washing is essential to preserve its beauty and integrity. Removing dirt, mildew, and stains through professional cleaning not only enhances the fence's curb appeal but also prevents potential decay, ensuring a longer-lasting and aesthetically pleasing addition to your property. comfortable living environment during hot and dry weather.",
                    detailImageURL: siteConfig.OSW_IMG.FenceVinyl,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[2.1] left-[60px] top-[100px]",
                },
                {
                    detailSummary:"Staining, Resealing, Replacing",
                    detailDescription: "Regular vinyl fence washing is essential to maintain its appearance and durability. Professional cleaning removes dirt, mold, and stains, preventing degradation and ensuring your fence remains a lasting, low-maintenance asset to your property.",
                    detailImageURL: siteConfig.OSW_IMG.FenceWood,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[2.0] left-[60px] top-[110px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Roofs',
        url: '/services#Roofs',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.Roof1,
        className: "absolute scale-[1.7] left-[-62px] top-[50px]",
        service: {
            titleMsg: "Roof Soft Washing",
            subTitleMsg: "Hey",
            serviceMsg: "Roofs",
            estimateMsg: "Let the sun shine onto your home",
            details: [
                {
                    detailSummary:"Shingle, Tile, Metal",
                    detailDescription: "Ensuring proper maintenance for your shingle roof is imperative as it helps prevent potential issues such as mold growth, deterioration, and costly repairs. Regular inspections and upkeep guarantee that your shingle roof remains durable, resilient, and capable of withstanding the elements for years to come.",
                    detailImageURL: siteConfig.OSW_IMG.SURFACE1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[2.1] left-[60px] top-[100px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Gutters',
        url: '/services#Gutters',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.Gutters1,
        className: "absolute scale-[3.3] left-[-3 0px] top-[120px]",
        service: {
            titleMsg: "Gutters Rejuvenation",
            subTitleMsg: "Hey",
            serviceMsg: "Gutters",
            estimateMsg: "Squeeze grime from your gutters",
            details: [
                {
                    detailSummary:"Debris Removal",
                    detailDescription: "Gutter debris removal is essential to maintain the structural integrity of your home and prevent water damage. Regularly cleaning out gutters prevents clogs and ensures proper water flow, protecting your roof, walls, and foundation from potential costly repairs.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[40px]",
                },
                {
                    detailSummary:"Downspout Flushing",
                    detailDescription: "Clearing downspouts is essential for maintaining proper drainage and preventing potential water damage to your home. When downspouts are clogged with debris such as leaves, twigs, and dirt, rainwater cannot flow freely away from the roof and foundation, leading to potential leaks, mold growth, and even structural issues.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[40px]",
                },
                {
                    detailSummary:"Brightening",
                    detailDescription: "Gutter brightening is a crucial maintenance task that helps enhance the overall appearance of your home while preserving the integrity of the gutter system. By removing dirt, grime, and stains, it ensures that rainwater flows smoothly and prevents potential clogs. For this process, we will be using eco-friendly cleaning agents and specialized tools to effectively brighten the gutters without causing any harm to the environment.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[130px]",
                },                
            ],
        },
    },
    {
        activeService: false,
        name: 'Boats & RVs',
        url: '/services#Boat & RVs',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.SURFACE2,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            subTitleMsg: "Hey",
            serviceMsg: "Boats & RVs",
            estimateMsg: "Ready to peel away the dirt?",
            details: [],
        },
    }, 
    {
        activeService: true,
        name: 'Bins',
        url: '/services#Bins',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.WasteBin1,
        className: "absolute scale-[1.8] left-[00px] top-[72px]",
        service: {
            titleMsg: "Waste Bins",
            subTitleMsg: "Hey",
            serviceMsg: "Waste Bins",
            estimateMsg: "Give your bins a citrus blast!",
            details: [
                {
                    detailSummary:"Residential",
                    detailDescription: "Regularly washing your general waste bin is crucial for maintaining a healthy living environment. Over time, bins accumulate harmful bacteria and germs from disposed waste, posing a serious risk to your well-being. Cleaning your bin not only eliminates foul odors but also reduces the potential spread of infections, creating a safer and more hygienic space for you and your family. It's a simple yet effective measure to promote overall cleanliness and prevent the buildup of hazardous microbes in your living environment.",
                    detailImageURL: siteConfig.OSW_IMG.WasteBinBlue,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.7] left-[0px] top-[-40px]",
                },
                {
                    detailSummary:"Commercial",
                    detailDescription: "Regularly washing your dumpster is crucial for maintaining a hygienic environment and preventing the proliferation of harmful bacteria and unpleasant odors. Accumulated waste residue can attract pests, posing health risks, while routine cleaning not only ensures a sanitized waste disposal area but also contributes to the longevity and structural integrity of the dumpster itself, reducing the likelihood of corrosion and deterioration.",
                    detailImageURL: siteConfig.OSW_IMG.WasteBinCommercial,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[2.5] left-[-80px] top-[80px]",
                },
            ],
        },
    },  
    {
        activeService: false,
        name: 'Graffiti',
        url: '/services#Graffiti',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.SURFACE2,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            subTitleMsg: "Hey",
            serviceMsg: "Graffiti",
            estimateMsg: "Ready to peel away the dirt?",
            details: [],
        },
    },            
    {
        activeService: true,
        name: 'Commercial',
        url: '/services#Commercial',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.Commercial1,
        className: "absolute scale-[1.85] left-[-20px] top-[90px]",
        service: {
            titleMsg: "Commercial Services",
            subTitleMsg: "Cost Effective, Time Efficient, Highest Value",
            serviceMsg: "Commercial Properties",
            estimateMsg: "Brighten your business!",
            details: [
                {
                    detailSummary:"Quality",
                    detailDescription: "Our experienced teams work swiftly and meticulously, using industry-standard equipment and proven techniques, to deliver superior results with minimal disruption to your operations.",
                    detailImageURL: "/OSW_Commercial_Quality.png",
                    detailImageAlt: "Quality",
                    detailImageClass:  "absolute scale-[1.1] left-[-10px] top-[0x]",
                }, 
                {
                    detailSummary:"Curb Painting",
                    detailDescription: "Our experienced teams work swiftly and meticulously, using industry-standard equipment and proven techniques, to deliver superior results with minimal disruption to your operations.",
                    detailImageURL: "/OSW_Commercial_Quality.png",
                    detailImageAlt: "Quality",
                    detailImageClass:  "absolute scale-[1.1] left-[-10px] top-[0x]",
                }, 
            ],
        },
    },
    {
        activeService: false,
        name: 'Windows',
        url: '/services?service=siding',
        aria_label: "Surface Pressure Washing",
        src: siteConfig.OSW_IMG.SIDING1,
        className: "absolute scale-[2.5] left-[-120px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            tsubTitleMsg: "Hey",
            serviceMsg: "We can clean any siding...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [
                {
                    detailSummary:"Vinyl",
                    detailDescription: "Vinyl siding looks good, it’s versatile, and has a great lifespan. However, it does need to be maintained in order to be able to reach its full durability. Our house washing service will remove any staining, moss, and other residues to have the siding on your home looking brand new.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Stucco",
                    detailDescription: "Stucco sidings, with their unique texture and classic appearance, need special care to preserve their beauty. Over time, they can attract dirt and grime that’s hard to remove. Our specialized house washing methods ensure your stucco remains clean and vibrant, enhancing its durability while maintaining its distinctive look.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Hardie Board",
                    detailDescription: "Hardie Board siding is renowned for its robustness and authentic look. Yet, without proper upkeep, even the toughest Hardie Board can lose its charm. Our house washing service dives deep to clear off any muck, mildew, or marks. Once we’re done, your Hardie Board siding will not only recapture its original allure but also be primed for many more years of service.",
                    detailImageURL: siteConfig.OSW_IMG.Paver1,
                    detailImageAlt: "",
                    detailImageClass:  "absolute scale-[1.8] left-[0px] top-[85px]",
                }, 
            ],
        },
    },   
],
} as const;   