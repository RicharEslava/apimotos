var mymap = L.map('map').setView([7.898154, -72.488699], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
}).addTo (mymap);

L.marker([7.897989, -72.488597]).addTo (mymap);
L.marker([7.888153, -72.496070]).addTo (mymap);
L.marker([7.903779, -72.491404]).addTo (mymap);