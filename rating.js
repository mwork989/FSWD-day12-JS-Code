const ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];


let totalRating = 0;
let count = 0;

ratingData.forEach(item => {
    totalRating += item.rating;
    count++;
});
const averageRating = totalRating / count;
console.log("Average rating for all restaurants:", averageRating.toFixed(2));


// [{ restaurant: 'KFC', averageRating: 4}, { restaurant: 'Burger King', averageRating: 4}, { restaurant: 'Domino', averageRating: 1.5}, { restaurant: 'Subway', averageRating: 3.5}, { restaurant: 'Pizza Hut', averageRating: 5}]