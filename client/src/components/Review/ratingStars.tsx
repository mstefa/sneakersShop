export const ratingStars = (rating, id) => {
  var divId = "rating" + id
  var stars = Math.round(rating)
  var emptyStars = 5 - rating
  for (let i = 0; i < stars; i++) {
    var div = document.createElement("div");
    div.className = "clip-star"
    document.getElementById(divId).appendChild(div);
  }
  for (let i = 0; i < emptyStars; i++) {
    var div = document.createElement("div");
    div.className = "empty-star"
    document.getElementById(divId).appendChild(div);
  }
}
