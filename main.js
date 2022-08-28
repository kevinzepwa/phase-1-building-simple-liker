// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal")
errorModal.className = "hidden"

const likeState = {
  EMPTY_HEART : FULL_HEART,
  FULL_HEART : EMPTY_HEART
}

const heartList = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
	const heart = e.target;
	mimicServerCall() 
		.then(function () {
			heart.innerText = likeState[heart.innerText];
			heart.innerHTML = FULL_HEART;
		})
		.catch(function () {
			errorModal.className = "";
		});
}

for (const singleHeart of heartList) {
  singleHeart.addEventListener("click", likeCallback)
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



