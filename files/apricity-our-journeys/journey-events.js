// Renders upcoming events from calendar-data.js into every
// <div data-journey-events="music"> on the page (several genres: "art fashion").
// Past events drop off automatically by today's date.
document.querySelectorAll('[data-journey-events]').forEach(function (box) {
  var cats = box.getAttribute('data-journey-events').split(' ');
  var rows = APRICITY_EVENTS
    .filter(function (e) { return cats.indexOf(e.cat) !== -1 && apricityIsUpcoming(e); })
    .sort(function (a, b) { return apricityDateKey(a) - apricityDateKey(b); });

  if (!rows.length) {
    box.innerHTML = '<p class="apj-events-empty">The programme for the coming season is being finalised. Tell us the event and we will build the trip around it.</p>';
    return;
  }

  box.className = 'apj-events';
  box.innerHTML = rows.map(function (e) {
    var price = e.amt
      ? apricityPrice(e)
      : '<a href="mailto:hello@apricity.ooo?subject=' + encodeURIComponent(e.title) + '">Request access</a>';
    return '<div class="apj-ev">' +
      '<p class="apj-ev-date">' + apricityFmtDate(e) + '</p>' +
      '<div><h3>' + e.title + '</h3>' +
        '<p class="apj-place">' + apricityLoc(e) + '</p>' +
        '<p>' + e.access + '</p></div>' +
      '<p class="apj-ev-price">' + price + '</p>' +
    '</div>';
  }).join('');
});
