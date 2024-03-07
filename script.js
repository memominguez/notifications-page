const friendMessages = document.querySelectorAll(".friend-message");
const markReads = document.querySelectorAll(".mark-read");
const notReadCount = document.querySelector(".not-read-count");
const markAll = document.querySelector(".mark-all");

// Set to read state, on individual selection
friendMessages.forEach((item) => {
  let friendName = item.querySelector(".friend-name");
  let markRead = item.querySelector(".mark-read");

  friendName.addEventListener("click", () => {
    item.classList.toggle("read");
    markRead.classList.toggle("read");
    countNotRead();
  });
});

// Count the not-read messages
function countNotRead() {
  let count = 0;
  friendMessages.forEach((message) => {
    if (!message.classList.contains("read")) {
      count++;
    }
  });

  notReadCount.innerHTML = count;
}


// Mark all messages as read. 
// Change background color and remove the red stars
markAll.addEventListener("click", () => {
 
  friendMessages.forEach((message) => {
    if (!message.classList.contains("read")) {
      message.classList.add("read");
    }
  });

  markReads.forEach((mark) => {
    if (!mark.classList.contains("read")) {
      mark.classList.add("read");
    }
  });

  countNotRead();
});
