
/*
    DISCLAIMER!!!
    all of this code only works locally,
    obviously in the full working version
    of the website, we'd want it to work
    remotely on a hosted server so that
    the reviews stay more persistantly.

    However, as a show of it working,
    I hope this suffices
*/

//Setting what runs when the user hits submit
document.getElementById('reviewForm').addEventListener('submit', function () {
    const reviewerName = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const description = document.getElementById('description').value;
    //defining a review as a concept (might want to make a seperate class this is just what I saw used elsewhere)
    //also, doing this is equivalent to C# this.rating = rating, I think, like a constructor
    const review = {
        reviewerName: reviewerName,
        title: title,
        rating: rating,
        description: description
    };

    // Get existing reviews, or empty array if the parse function just returns false/null
    const reviews = JSON.parse(localStorage.getItem('reviews')) || []; 

    // Add the new review
    reviews.push(review);

    // Save back to LocalStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Reset the form - set the form to blanks
    document.getElementById('reviewForm').reset();

    // Reload reviews on page
    displayReviews();
});

function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || []; 
    const container = document.querySelector('.review-container'); // total container for all reviews
    container.innerHTML = ''; // Clear existing content -- MAKE SURE THE FORM ISN'T UNDER THE REVIEW CONTAINER OR IT'LL DISAPEAR!!!

    reviews.forEach(r => { // Going through each review
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-score">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)} ${r.rating}/5</div>
            <div class="reviewer-name">${r.reviewerName}</div>
            <div class="review-title">${r.title}</div>
            <div class="review-content">${r.description}</div>
        `;
        container.appendChild(item);
    });
}

function getAverageReviewScore(){
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    let totalReviewScore = 0;
    for (let i = 0; i < reviews; i++)
    {
        totalReviewScore += reviews[i].rating;
    }
    return totalReviewScore / reviews.length;
}


// Display any saved reviews when the page loads
document.addEventListener('DOMContentLoaded', displayReviews);
