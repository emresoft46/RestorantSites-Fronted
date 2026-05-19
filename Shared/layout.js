fetch("Shared/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;
  });

fetch("Shared/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });
