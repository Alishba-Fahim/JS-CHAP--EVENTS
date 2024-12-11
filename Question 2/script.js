// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 


// answer

function toggleDescription() {
    var moreText = document.getElementById("more-text");
    var readMoreBtn = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
}

