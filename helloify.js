function insertFrame(title) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://nudger.fr/recherche?q="+title);
        ifrm.style.width = "100%";
        ifrm.style.height = "200px";
        document.body.prepend(ifrm);
    }

function getFirstNWords(inputString, n) {
  const wordsArray = inputString.split(' ');
  const firstNWords = wordsArray.slice(0, n).join(' ');
  return firstNWords;
}

const metaTitle = document.querySelector('meta[property="og:title"]').content.getFirstNWords(2);
insertFrame(metaTitle);