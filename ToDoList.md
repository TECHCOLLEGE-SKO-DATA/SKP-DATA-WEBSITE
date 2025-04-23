# Todoliste

Ændre baggrunds billedet til en karosel der skifter mellem de 3 uddanesler.

Landing page

- Her skal der være lidt om hvad vi laver, hvem vi er og byde brugeren velkommen.

Pc hjælp - Side for sig.

- Hvad tilbyder de osv osv.

Projekter - en side for sig.

- Hvor folk kan se hvad vi arbejder med.

Om os.

- Hvem er skolepraktikken?
- Hvad laver vi heroppe?

Kontak os.

- Kontakt os

---

[Hero-sektion med billede + overskrift]
Velkommen til TECHWORKS DATA
→ CTA: Læs mere

[Om os-boks]
Vi uddanner fremtidens IT-specialister i programmering, IT-support og infrastruktur.

[Kort oversigt med 3 ikoner]
👨‍💻 Programmering  
🛠 IT-support  
🌐 Infrastruktur

[Billeder med tekst + hover-effekt]

[PC-hjælpen-sektion]
📱 Vi hjælper ældre med digitale udfordringer

[Citater fra elever i slider eller grid]

[Partnere / Samarbejde / Kontaktinfo]

CAROUSEL

🛠️ 1. Gør klar i Umbraco Backoffice

Gå ind i Settings → Document Types → [din side, fx "Home Page"]:

    Tilføj en ny property:

        Alias: carouselImages

        Editor: Media Picker (og slå "Multiple items" til ✅)

        Label: fx "Karuselbilleder"

Gem dokumenttypen.
🧠 2. Tilføj billeder på din side

    Gå til Content

    Vælg den relevante side

    Brug den nye property carouselImages til at tilføje dine billeder

🧾 3. Hent billederne i dit view (.cshtml)

Fx i homePageCurrent.cshtml:

@{
var carouselImages = Model.Value<IEnumerable<IPublishedContent>>("carouselImages");
}

<div class="carousel-container">
    @foreach (var image in carouselImages)
    {
        <img src="@image.Url()" alt="@image.Name" class="carousel-image" />
    }
</div>

💅 4. Tilføj styling + class

I din shared.css eller homepage.css:

.carousel-container {
position: relative;
width: 100%;
max-width: 900px;
margin: 0 auto;
overflow: hidden;
}

.carousel-image {
display: none;
width: 100%;
height: auto;
position: absolute;
left: 0;
top: 0;
transition: opacity 0.5s ease-in-out;
opacity: 0;
}

.carousel-image.active {
display: block;
opacity: 1;
position: relative;
}

🧠 5. Script til at skifte billeder (karusel.js)

document.addEventListener("DOMContentLoaded", function () {
let index = 0;
const images = document.querySelectorAll('.carousel-image');

if (images.length > 0) {
images[index].classList.add('active');

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 4000);

}
});

Og i layoutfilen:

<script src="/js/carousel.js" defer></script>

✅ Så ja – det hele kan laves dynamisk med Umbraco + Media Picker, og det spiller supergodt sammen med frontend-karusellen.

Vil du have jeg samler det hele i en skabelon du kan copy/paste direkte ind i dit projekt?
