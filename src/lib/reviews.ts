// // server/reviews.ts
// import { Review } from '../components/ReviewCarousel'; // Import the Review interface if needed

// // Dummy function - Replace with your actual server-side data fetching logic
// export const getGoogleReviews = async (): Promise<Review[]> => {
//   // Simulate fetching reviews from an API or database
//   await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

//   const dummyReviews: Review[] = [
//     { name: "John Doe", rating: 5, text: "Excellent service! Highly recommended." },
//     { name: "Jane Smith", rating: 4, text: "Great experience overall. Will use again." },
//     { name: "Peter Jones", rating: 5, text: "Top-notch quality and professionalism." },
//     { name: "Alice Brown", rating: 3, text: "Good, but could be slightly better." },
//     { name: "Bob Williams", rating: 5, text: "Fantastic! Exceeded my expectations." },
//     { name: "Charlie Davis", rating: 4, text: "Very happy with the results." },
//     { name: "Diana Miller", rating: 5, text: "Amazing service and friendly staff." },
//     { name: "Ethan Green", rating: 3, text: "Decent, but not outstanding." },
//     { name: "Fiona White", rating: 5, text: "The best in the business!" },
//     { name: "George Black", rating: 4, text: "Reliable and trustworthy." },
//   ];

//   // Return the first 5 reviews as per your requirement
//   return dummyReviews.slice(0, 5);
// };