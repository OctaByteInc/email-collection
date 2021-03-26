$(document).ready(function () {
  console.log("extension loaded");

  const pathName = window.location.pathname;
  let nextLinkIndex = -1;
  for (let i = 0; i < pagesLinks.length; i++) {
    if (pagesLinks[i] == pathName) {
      nextLinkIndex = i + 1;
      break;
    }
  }

  const nextPage =
    "https://www.firstnational.com.au" + pagesLinks[nextLinkIndex];

  let name = "not-found";
  let email = "not-found";

  try {
    name = $(".padding-row-sm h1")[0].innerText;
    email = $(".right-col p a")[0].innerText;
  } catch (err) {
    window.location = nextPage;
    return;
  }

  console.log(name, email);

  if (pathName == "/agent/3312/deanne-lamprey") {
    window.localStorage.removeItem("localdata");
  }

  let data = [];

  const d = window.localStorage.getItem("localdata");

  if (d) {
    data = JSON.parse(d);
  }

  data.push({ name, email });

  window.localStorage.setItem("localdata", JSON.stringify(data));

  // window.localStorage.removeItem("localdata");
  if (nextLinkIndex >= 300) {
    console.log(data);
    window.localStorage.removeItem("localdata");
    downloadJSON(data, "email-data-" + nextLinkIndex);
    return;
  } else {
    window.location = nextPage;
  }
});
