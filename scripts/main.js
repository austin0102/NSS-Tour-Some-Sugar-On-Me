import { venueList } from "./venues.js"
import { bandList } from "./bands.js"
import { bookingList } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>RisingSoundWave</h1>
<article class="details">
    <section class="bookings">
        <h2>Upcoming Shows</h2>
        ${bookingList()}
    </section>
    <section class="bottom-section">
    <section class="venues">
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section class="bands">
        <h2>Bands</h2>
        ${bandList()}
    </section>
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
