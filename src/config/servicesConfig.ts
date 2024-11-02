import { siteConfig } from "./siteConfig";

export const servicesConfig = {

    OSW_Services: [
    {
        activeService: true,
        name: 'Surfaces',
        url: '/services?service=surfaces',
        src: siteConfig.OSW_IMG.SURFACE1,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Surface Pressure Washing",
            titleImg: siteConfig.OSW_IMG.SURFACE2,
            serviceMsg: "Surfaces We Specialize In...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [
                {
                    detailSummary:"Driveways, Walkways, Patios",
                    detailDescription: "Driveways, walkways, and patios, are prone to staining and can accumulate grime over time. We target and remove the toughest stains, like oil and rust, for a fresher concrete appearance.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Brick, Stone, Metal",
                    detailDescription: "Whether brick, stone, or composite decking, our team adjusts the pressure and cleaning agents accordingly without damaging the material.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Pavers & Regrouting",
                    detailDescription: "We effectively strip unwanted paint and markings from various surfaces, restoring the original look of the affected area.",
                    detailImageURL: siteConfig.OSW_IMG.Paver1,
                    detailImageClass:  "absolute scale-[1.8] left-[0px] top-[85px]",
                },                    
            ],
        },
    },
    {
        activeService: true,
        name: 'Siding',
        url: '/services?service=siding',
        src: siteConfig.OSW_IMG.SIDING1,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            titleImg: siteConfig.OSW_IMG.SIDING1,
            serviceMsg: "We can clean any siding...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [
                {
                    detailSummary:"Vinyl",
                    detailDescription: "Vinyl siding looks good, it’s versatile, and has a great lifespan. However, it does need to be maintained in order to be able to reach its full durability. Our house washing service will remove any staining, moss, and other residues to have the siding on your home looking brand new.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Stucco",
                    detailDescription: "Stucco sidings, with their unique texture and classic appearance, need special care to preserve their beauty. Over time, they can attract dirt and grime that’s hard to remove. Our specialized house washing methods ensure your stucco remains clean and vibrant, enhancing its durability while maintaining its distinctive look.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Hardie Board",
                    detailDescription: "Hardie Board siding is renowned for its robustness and authentic look. Yet, without proper upkeep, even the toughest Hardie Board can lose its charm. Our house washing service dives deep to clear off any muck, mildew, or marks. Once we’re done, your Hardie Board siding will not only recapture its original allure but also be primed for many more years of service.",
                    detailImageURL: siteConfig.OSW_IMG.Paver1,
                    detailImageClass:  "absolute scale-[1.8] left-[0px] top-[85px]",
                }, 
            ],
        },
    },
    {
        activeService: true,
        name: 'Decks',
        url: '/services?service=decks',
        src: siteConfig.OSW_IMG.DECK1,
        className: "absolute scale-[3.0] left-[60px] top-[-20px]",
        service: {
            titleMsg: "Deck Soft  Washing",
            titleImg: siteConfig.OSW_IMG.DECK1,
            serviceMsg: "We clean all deck surfaces...",
            estimateMsg: "Bring back the orange-like gleam",
            details: [
                {
                    detailSummary:"Wood, Composite, Vinyl",
                    detailDescription: "Regular wood decking washing is crucial to maintain its longevity and appearance. Removing dirt, mold, and mildew not only enhances its beauty but also prevents potential structural damage, ensuring a safe and inviting outdoor space for years to come.",
                    detailImageURL: siteConfig.OSW_IMG.DECK1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Brightening, Sealing, Restaining",
                    detailDescription: "People call us the Deck Druids, because of the magical transformations we can bring to your outdoor spaces.  Our experts understand the science of wood care,  and have a knack for restoring its natural beauty. Whether your looking to brighten, seal, or restain, your deck, we'll make it look as though it were touched by an enchantment.",
                    detailImageURL: siteConfig.OSW_IMG.DECK1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Fences',
        url: '/services?service=fences',
        src: siteConfig.OSW_IMG.Fence3,
        className: "absolute scale-[1.7] left-[0px] top-[75px]",
        service: {
            titleMsg: "Fence Washing",
            titleImg: siteConfig.OSW_IMG.Fence1,
            serviceMsg: "Our Fence Washing Services...",
            estimateMsg: "Ready to bring a fresh gleam to your fence?",
            details: [
                {
                    detailSummary:"Wood",
                    detailDescription: "Regular wood fence washing is essential to preserve its beauty and integrity. Removing dirt, mildew, and stains through professional cleaning not only enhances the fence's curb appeal but also prevents potential decay, ensuring a longer-lasting and aesthetically pleasing addition to your property. comfortable living environment during hot and dry weather.",
                    detailImageURL: siteConfig.OSW_IMG.FenceWood,
                    detailImageClass:  "absolute scale-[2.1] left-[60px] top-[100px]",
                },
                {
                    detailSummary:"Vinyl",
                    detailDescription: "Regular vinyl fence washing is essential to maintain its appearance and durability. Professional cleaning removes dirt, mold, and stains, preventing degradation and ensuring your fence remains a lasting, low-maintenance asset to your property.",
                    detailImageURL: siteConfig.OSW_IMG.FenceVinyl,
                    detailImageClass:  "absolute scale-[2.0] left-[60px] top-[110px]",
                },
                {
                    detailSummary:"Metal",
                    detailDescription: "Regular metal fence washing is vital to maintain its appearance and structural integrity. Professional cleaning, targeting rust, dirt, and pollutants, not only enhances the fence's visual appeal but also prevents corrosion, ensuring a longer-lasting and resilient boundary for your property.",
                    detailImageURL: siteConfig.OSW_IMG.FenceMetal,
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[130px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Roofs',
        url: '/services?service=roofs',
        src: siteConfig.OSW_IMG.Gutters1,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Roof Soft Washing",
            titleImg: siteConfig.OSW_IMG.SURFACE2,
            serviceMsg: "Our Roof Washing Services...",
            estimateMsg: "Let the sun shine onto your home",
            details: [
                {
                    detailSummary:"Shingle, Tile, Metal",
                    detailDescription: "Ensuring proper maintenance for your shingle roof is imperative as it helps prevent potential issues such as mold growth, deterioration, and costly repairs. Regular inspections and upkeep guarantee that your shingle roof remains durable, resilient, and capable of withstanding the elements for years to come.",
                    detailImageURL: siteConfig.OSW_IMG.SURFACE1,
                    detailImageClass:  "absolute scale-[2.1] left-[60px] top-[100px]",
                },
            ],
        },
    },
    {
        activeService: true,
        name: 'Gutters',
        url: '/services?service=gutters',
        src: siteConfig.OSW_IMG.Gutters1,
        className: "bsolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Gutter Rejuvenation",
            titleImg: siteConfig.OSW_IMG.Gutters1,
            serviceMsg: "Our Gutter Rejuvenation Services...",
            estimateMsg: "Squeeze every last drop of grime from your gutters",
            details: [
                {
                    detailSummary:"Debris Removal",
                    detailDescription: "Gutter debris removal is essential to maintain the structural integrity of your home and prevent water damage. Regularly cleaning out gutters prevents clogs and ensures proper water flow, protecting your roof, walls, and foundation from potential costly repairs.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[40px]",
                },
                {
                    detailSummary:"Downspout Flushing",
                    detailDescription: "Clearing downspouts is essential for maintaining proper drainage and preventing potential water damage to your home. When downspouts are clogged with debris such as leaves, twigs, and dirt, rainwater cannot flow freely away from the roof and foundation, leading to potential leaks, mold growth, and even structural issues.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[40px]",
                },
                {
                    detailSummary:"Brightening",
                    detailDescription: "Gutter brightening is a crucial maintenance task that helps enhance the overall appearance of your home while preserving the integrity of the gutter system. By removing dirt, grime, and stains, it ensures that rainwater flows smoothly and prevents potential clogs. For this process, we will be using eco-friendly cleaning agents and specialized tools to effectively brighten the gutters without causing any harm to the environment.",
                    detailImageURL: siteConfig.OSW_IMG.Gutters1,
                    detailImageClass:  "absolute scale-[3.0] left-[60px] top-[130px]",
                },                
            ],
        },
    },
    {
        activeService: true,
        name: 'Waste Bins',
        url: '/services?service=waste bins',
        src: siteConfig.OSW_IMG.WasteBin1,
        className: "absolute scale-[1.7] left-[00px] top-[75px]",
        service: {
            titleMsg: "Waste Bin Pressure Washing",
            titleImg: siteConfig.OSW_IMG.WasteBin1,
            serviceMsg: "Our Waste Bin Cleaning Services...",
            estimateMsg: "Give your bins a citrus blast!",
            details: [
                {
                    detailSummary:"Residential",
                    detailDescription: "Regularly washing your general waste bin is crucial for maintaining a healthy living environment. Over time, bins accumulate harmful bacteria and germs from disposed waste, posing a serious risk to your well-being. Cleaning your bin not only eliminates foul odors but also reduces the potential spread of infections, creating a safer and more hygienic space for you and your family. It's a simple yet effective measure to promote overall cleanliness and prevent the buildup of hazardous microbes in your living environment.",
                    detailImageURL: siteConfig.OSW_IMG.WasteBinBlue,
                    detailImageClass:  "absolute scale-[1.4] left-[20px] top-[10px]",
                },
                {
                    detailSummary:"Commercial",
                    detailDescription: "Regularly washing your dumpster is crucial for maintaining a hygienic environment and preventing the proliferation of harmful bacteria and unpleasant odors. Accumulated waste residue can attract pests, posing health risks, while routine cleaning not only ensures a sanitized waste disposal area but also contributes to the longevity and structural integrity of the dumpster itself, reducing the likelihood of corrosion and deterioration.",
                    detailImageURL: siteConfig.OSW_IMG.WasteBinCommercial,
                    detailImageClass:  "absolute scale-[2.5] left-[-160px] top-[135px]",
                },
            ],
        },
    },
    {
        activeService: false,
        name: 'Boats',
        url: '/services?service=boats',
        src: siteConfig.OSW_IMG.SURFACE2,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            titleImg: siteConfig.OSW_IMG.SURFACE2,
            serviceMsg: "Surfaces We Specialize In...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [],
        },
    },   
    {
        activeService: false,
        name: 'RVs',
        url: '/services?service=rvs',
        src: siteConfig.OSW_IMG.SURFACE2,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            titleImg: siteConfig.OSW_IMG.SURFACE2,
            serviceMsg: "Surfaces We Specialize In...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [],
        },
    }, 
    {
        activeService: false,
        name: 'Graffiti',
        url: '/services?service=graffiti',
        src: siteConfig.OSW_IMG.SURFACE2,
        className: "absolute scale-[3.0] left-[60px] top-[40px]",
        service: {
            titleMsg: "Siding Soft Washing",
            titleImg: siteConfig.OSW_IMG.SURFACE2,
            serviceMsg: "Surfaces We Specialize In...",
            estimateMsg: "Ready to peel away the dirt?",
            details: [],
        },
    },           
    {
        activeService: true,
        name: 'Commercial',
        url: '/services?service=commercial',
        src: siteConfig.OSW_IMG.Commercial1,
        className: "absolute scale-[1.8] left-[-20px] top-[80px]",
        service: {
            titleMsg: "Commercial Services",
            titleImg: siteConfig.OSW_IMG.Commercial1,
            serviceMsg: "A trusted partner...",
            estimateMsg: "Orange you glad there's a way to brighten your business?",
            details: [
                {
                    detailSummary:"Cost Effective",
                    detailDescription: "Our competitive pricing combined with our proven ability to increase property value means you're investing in, not just spending on, exterior maintenance. We offer flexible packages tailored to your budget, ensuring maximum ROI.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Time  Efficient",
                    detailDescription: "We understand your business runs on tight schedules. Our efficient, streamlined process ensures minimal disruption to your operations. Our teams work swiftly and meticulously to deliver exceptional results.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.7] left-[-40px] top-[80px]",
                },
                {
                    detailSummary:"Quality",
                    detailDescription: "Our experienced technicians use industry standard equipment and proven techniques to deliver superior results. We pay meticulous attention to detail, to ensure your property looks its best.",
                    detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                    detailImageClass:  "absolute scale-[1.8] left-[0px] top-[85px]",
                }, 
            ],
        },
    },   
],
} as const;   