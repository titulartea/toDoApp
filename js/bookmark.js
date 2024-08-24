console.log("Bookmark.js connected");

const bookmarkForm = document.querySelector("#bookmarkForm");
const siteName = document.querySelector("#siteName");
const siteUrl = document.querySelector("#siteUrl");
const bookmarksList = document.querySelector("#bookmarksList");

let bookmarks = [];

document.addEventListener("DOMContentLoaded", loadBookmarks);

bookmarkForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = siteName.value.trim();
  const url = siteUrl.value.trim();

  if (!name || !url) {
    alert("사이트 이름과 URL을 모두 입력해주세요.");
    return;
  }
  const bookmark = {
    id: Date.now(),
    name: name,
    url: url,
  };
  bookmarks.push(bookmark);
  renderBookmarks();
  bookmarkForm.reset();
});

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
  const storedBookmarks = localStorage.getItem("bookmarks");
  if (storedBookmarks) {
    bookmarks = JSON.parse(storedBookmarks);
    renderBookmarks();
  }
}

function renderBookmarks() {
  bookmarksList.innerHTML = "";

  bookmarks.forEach((bookmark) => {
    const li = document.createElement("li");
    li.className = "bookmark-item";
    li.innerHTML = `
      <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      <button onclick="deleteBookmark(${bookmark.id})">Delete</button>
    `;
    bookmarksList.appendChild(li);
  });
}

function deleteBookmark(id) {
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  saveBookmarks();
  renderBookmarks();
}
