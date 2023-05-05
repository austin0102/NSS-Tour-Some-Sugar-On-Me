import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

const findBand = (booking, allBands) => {
  let bandName = null;

  for (const band of allBands) {
    if (band.id === booking.bandId) {
      bandName = band;
    }
  }

  return bandName;
};

const findVenue = (booking, allVenues) => {
  let venueName = null;

  for (const venue of allVenues) {
    if (venue.id === booking.venueId) {
      venueName = venue;
    }
  }

  return venueName;
};

export const bookingList = () => {
  let html = "";
  html = "<ul>";

  for (const booking of bookings) {
    const band = findBand(booking, bands);
    const venue = findVenue(booking, venues);
    if (band && venue) {
      html += `<li data-bookingid=${booking.id} data-bandid=${booking.bandId} data-type="booking">${band.name} are playing at ${venue.name} on ${booking.date}</li>`;
    }
  }
  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "venue") {
    const venue = itemClicked.dataset.venueid;
    const venueBookings = [];
    for (const booking of bookings) {
      if (booking.venueId === parseInt(venue)) {
        venueBookings.push(booking);
      }
    }
    const bookedBands = [];
    for (const venueObj of venueBookings) {
      for (const bandsBooked of bands) {
        if (venueObj.bandId === bandsBooked.id) {
          bookedBands.push(bandsBooked.name);
        }
      }
    }
    const venueName = [];
    for (const place of venueBookings) {
      for (const names of venues) {
        if (place.venueId === names.id) {
          venueName.push(names.name);
        }
      }
    }

    window.alert(
      `These are the bands playning at the ${venueName[0]}: ${bookedBands.join(
        ", "
      )}`
    );
  }
});

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "band") {
    const band = itemClicked.dataset.bandid;
    const venueBands = [];
    for (const booking of bookings) {
      if (booking.bandId === parseInt(band)) {
        venueBands.push(booking);
      }
    }
    const venuesBooked = [];
    for (const bandObj of venueBands) {
      for (const theVenues of venues) {
        if (
          bandObj.venueId === theVenues.id &&
          !venuesBooked.includes(theVenues.name)
        ) {
          venuesBooked.push(theVenues.name);
        }
      }
    }
    const theBand = [];
    for (const name of venueBands) {
      for (const bandName of bands) {
        if (name.bandId === bandName.id) {
          theBand.push(bandName.name);
        }
      }
    }
    window.alert(
      `${theBand[0]} will be playing at ${venuesBooked.join(" + ")}`
    );
  }
});


document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "booking") {
    const bookingId = itemClicked.dataset.bookingid;

    let booking;
    for (const currentBooking of bookings) {
      if (currentBooking.id === parseInt(bookingId)) {
        booking = currentBooking;
        break;
      }
    }

    for (const bandInfo of bands) {
      if (booking.bandId === bandInfo.id) {
        window.alert(
          ` ${bandInfo.name}\n Genre: ${bandInfo.genre}\n Formed in ${bandInfo.yearFormed}\n ${bandInfo.numOfMems} band members`
        );
        break;
      }
    }
  }
});
