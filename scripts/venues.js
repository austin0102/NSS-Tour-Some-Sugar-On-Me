import { getVenues } from "./database.js";

const venues = getVenues()

export const venueList = () => {
    let venueHTML = "<ul>";

    for (const venue of venues) {
        venueHTML += `<li class="note" data-type="venue" data-venueid="${venue.id}">
        ${venue.name}
        </li>`
    }
    venueHTML += "<ul>";

    return venueHTML;
}