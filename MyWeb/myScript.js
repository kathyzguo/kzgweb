"Time stuff"
function currentTime() {
    let current_time = new Date().toLocaleString("en-UK").split(',')[1];
    date = new Date().toDateString()
    for (let x of document.getElementsByClassName("time")) {
        x.innerHTML = current_time;
    }
    for (let x of document.getElementsByClassName("time_message")) {
        x.innerHTML = convertTimeMessage(current_time);
        runEvents(current_time);
    }
    for (let x of document.getElementsByClassName("time_day")) {
        x.innerHTML = date;
    }
}

function convertTimeMessage(time) {
    first_2 = parseInt(time.substring(0, 3));
    if (first_2 >= 1 && first_2 < 3) {
        return "Bro go to sleep...";
    }
    if (first_2 >= 3 && first_2 < 6) {
        return "?????";
    }
    else if (first_2 >= 6 && first_2 < 13) {
        return "Good Morning!";
    }
    else if (first_2 >= 13 && first_2 < 19) {
        return "Good Afternoon!";
    }
    else {
        return "Good Evening!";
    }
}

function runEvents(time) {
    last_2 = parseInt(time.substring(7, 9));
    if (last_2 == 0) {
        upcomingEvents();
    }
}

document.addEventListener("DOMContentLoaded", currentTime)
setInterval(currentTime, 1000);

"Scrolling different color based on place"
const target = document.querySelectorAll(".scroll");
const links_target = document.querySelectorAll(".leftnav a");
isVisible = false;

const options = { 
    threshold: 0
};

function callback(entries) {
    entries.forEach(highlight);
}

function highlight(entry) {
    entry_id = entry.target.id;
    if (entry.isIntersecting) {
        document.querySelector(`.leftnav a[href = "#${entry_id}"]`).classList.add("active");
    }
    else {
        document.querySelector(`.leftnav a[href = "#${entry_id}"]`).classList.remove("active");
    }
}

const io = new IntersectionObserver(callback, options)
active_tabs = [];

for (t of target) {
    io.observe(t);
}

"Sliding sidebar animation"
function openNav() {
    document.getElementsByClassName("leftnav")[0].style.width = "175px";
    document.getElementsByTagName("body")[0].style.marginLeft = "185px";
}

function closeNav() {
    document.getElementsByClassName("leftnav")[0].style.width = "0px";
    document.getElementsByTagName("body")[0].style.marginLeft = "5px";
}

"WeatherWidget! NOT MY CODE"
function __weatherwidget_init() {
    currentweather = document.getElementsByClassName("weatheractive")[0]
    var a = document.getElementsByClassName("weatherwidget-io"),
    i = {};
    if (a.length !== 0) {
        for (var nu = function (t) {
                var e = a[t],
                o = {};
                o.id = "weatherwidget-io-" + t;
                o.href = e.href;
                o.label_1 = e.getAttribute("data-label_1");
                o.label_2 = e.getAttribute("data-label_2");
                o.font = e.getAttribute("data-font");
                o.icons = e.getAttribute("data-icons");
                o.mode = e.getAttribute("data-mode");
                o.days = e.getAttribute("data-days");
                o.theme = e.getAttribute("data-theme");
                o.basecolor = e.getAttribute("data-basecolor");
                o.accent = e.getAttribute("data-accent");
                o.textcolor = e.getAttribute("data-textcolor");
                o.textAccent = e.getAttribute("data-textAccent");
                o.highcolor = e.getAttribute("data-highcolor");
                o.lowcolor = e.getAttribute("data-lowcolor");
                o.suncolor = e.getAttribute("data-suncolor");
                o.mooncolor = e.getAttribute("data-mooncolor");
                o.cloudcolor = e.getAttribute("data-cloudcolor");
                o.cloudfill = e.getAttribute("data-cloudfill");
                o.raincolor = e.getAttribute("data-raincolor");
                o.snowcolor = e.getAttribute("data-snowcolor");
                o.windcolor = e.getAttribute("data-windcolor");
                o.fogcolor = e.getAttribute("data-fogcolor");
                o.thundercolor = e.getAttribute("data-thundercolor");
                o.hailcolor = e.getAttribute("data-hailcolor");
                o.dayscolor = e.getAttribute("data-dayscolor");
                o.tempcolor = e.getAttribute("data-tempcolor");
                o.desccolor = e.getAttribute("data-desccolor");
                o.label1color = e.getAttribute("data-label1color");
                o.label2color = e.getAttribute("data-label2color");
                o.shadow = e.getAttribute("data-shadow");
                o.scale = e.getAttribute("data-scale");
                i[o.id] = document.createElement("iframe");
                i[o.id].setAttribute("id", o.id);
                i[o.id].setAttribute("class", "weatherwidget-io-frame");
                i[o.id].setAttribute("title", "Weather Widget");
                i[o.id].setAttribute("scrolling", "no");
                i[o.id].setAttribute("frameBorder", "0");
                i[o.id].setAttribute("width", "95%");
                i[o.id].setAttribute("src", "https://weatherwidget.io/w/");
                i[o.id].style.display = "block";
                i[o.id].style.position = "absolute";
                i[o.id].style.top = "0px";
                i[o.id].onload = function () {
                    i[o.id].contentWindow.postMessage(o, "https://weatherwidget.io");
                };
                if (currentweather.textContent.toUpperCase().indexOf(o.label_1) > -1) {
                    e.style.display = "block";
                }
                else {
                    e.style.display = "none";
                }
                e.style.position = "relative";
                e.style.height = "150px";
                e.style.padding = "0px";
                e.style.overflow = "hidden";
                e.style.textAlign = "left";
                e.style.clear = "both";
                e.style.textIndent = "-299rem";
                e.appendChild(i[o.id]);
            }, e = 0, o = a.length; e < o; e++) {
            nu(e);
        }
        window.addEventListener("message", function (t) {
            if (t.origin === "https://weatherwidget.io" && i[t.data.wwId] && i[t.data.wwId].parentNode) {
                i[t.data.wwId].style.height = t.data.wwHeight - 5 + "px";
                i[t.data.wwId].parentNode.style.height = t.data.wwHeight - 5 + "px";
            }
        });
    }   
    else {
        setTimeout(__weatherwidget_init, 1500);
    }
}
setTimeout(__weatherwidget_init, 0);

"Weather Selector/Initializer"
function setAttri() {
    first = document.getElementById("ithNY-io");
    allLocations = document.getElementsByClassName("weatherwidget-io");
    for (t of allLocations) {
        for (attri of first.attributes) {
            if (attri.name.startsWith("data") && attri.name != "data-label_1" && attri.name != "data-label_2") {
                t.setAttribute(attri.name, attri.value);
            }
        }
    }
}

setAttri();

function displayCities() {
    document.getElementsByClassName("weathernav")[0].classList.toggle("show");
}

function filter() {
    const string = document.getElementById("weatherinput").value.toUpperCase();
    let collection = document.getElementsByClassName("weathernav")[0].getElementsByTagName("p");
    for (i = 0; i < collection.length; i++) {
        if (collection[i].textContent.toUpperCase().indexOf(string) == -1) {
            collection[i].style.display = "none";
        }
        else {
            collection[i].style.display = "";
        }
    }
}

weatherCities = ["ITHACA", "NEW YORK CITY", "PITTSBURGH", "GAINESVILLE", "SAN FRANCISCO", "LOS ANGELES", "ANN ARBOR",
    "BOSTON", "WEST LAFAYETTE", "BLACKSBURG", "WILLIAMSBURG", "ALEXANDRIA", "CHICAGO", "WASHINGTON D.C.", "LONDON", "MOSCOW",
    "BERLIN", "VIENNA", "PARIS", "WARSAW", "ROME", "TORONTO", "MEXICO CITY", "BEIJING", "SHANGHAI", "TOKYO", "SEOUL", "MADRID",
    "DALLAS", "PHILADELPHIA"]
weatherLinks = ["https://forecast7.com/en/42d44n76d50/ithaca/", "https://forecast7.com/en/40d71n74d01/new-york/",
    "https://forecast7.com/en/40d44n80d00/pittsburgh/", "https://forecast7.com/en/38d80n77d61/gainesville/", 
    "https://forecast7.com/en/37d77n122d42/san-francisco/", "https://forecast7.com/en/34d05n118d24/los-angeles/", 
    "https://forecast7.com/en/42d28n83d74/ann-arbor/", "https://forecast7.com/en/42d36n71d06/boston/", 
    "https://forecast7.com/en/40d43n86d91/west-lafayette/", "https://forecast7.com/en/37d23n80d41/blacksburg/", 
    "https://forecast7.com/en/37d27n76d71/williamsburg/", "https://forecast7.com/en/38d80n77d05/alexandria/", 
    "https://forecast7.com/en/41d88n87d63/chicago/", "https://forecast7.com/en/38d91n77d04/washington/", 
    "https://forecast7.com/en/51d51n0d13/london/", "https://forecast7.com/en/55d7637d62/moscow/",
    "https://forecast7.com/en/52d5213d40/berlin/", "https://forecast7.com/en/48d2116d37/vienna/", 
    "https://forecast7.com/en/48d862d35/paris/", "https://forecast7.com/en/52d2321d01/warsaw/",
    "https://forecast7.com/en/41d9012d50/metropolitan-city-of-rome/", "https://forecast7.com/en/43d65n79d38/toronto/",
    "https://forecast7.com/en/19d25n99d10/mexico-city/", "https://forecast7.com/en/39d90116d41/beijing/",
    "https://forecast7.com/en/31d23121d47/shanghai/", "https://forecast7.com/en/35d69139d69/tokyo/",
    "https://forecast7.com/en/37d57126d98/seoul/", "https://forecast7.com/en/40d42n3d70/madrid/",
    "https://forecast7.com/en/32d78n96d80/dallas/", "https://forecast7.com/en/39d95n75d17/philadelphia/"]
weatherTagIDs = ["ithNY", "nycNY", "pitPA", "gaiVA", "sanCA", "losCA", "annMI", "bosMA", "wesIN", "blaVA", "wilVA", "aleVA",
    "chiIL", "wasDC", "lonUK", "mosRU", "berGE", "vieAU", "parFR", "warPO", "romIT", "torCA", "mexME", "beiCH", "shaCH", 
    "tokJA", "seoSK", "madSP", "dalTX", "phiPA"]
usUnits = false;

function reEvalWeather(cityTagID) {
    var classP = document.getElementsByClassName("weathernav")[0].getElementsByTagName("p");
    arrayP = Array.from(classP)
    arrayP.forEach(x => {x.classList.remove("weatheractive");});
    document.getElementById(cityTagID).classList.add("weatheractive");
    document.getElementById("citiesbutton").innerHTML = document.getElementById(cityTagID).innerHTML;
    i = weatherTagIDs.indexOf(cityTagID);
    weatherWidget = document.getElementsByClassName("weatherwidget-io")[0];
    weatherWidget.setAttribute("data-label_1", weatherCities[i]);
    if (usUnits) {
        weatherWidget.setAttribute("href", weatherLinks[i] + "?unit=us");
    }
    else {
        weatherWidget.setAttribute("href", weatherLinks[i]);
    }
    weatherWidget.innerHTML = weatherCities[i] + " WEATHER";
    __weatherwidget_init();
}

function reEvalDegree() {
    currentCity = document.getElementsByClassName("weatheractive")[0];
    cityTagID = currentCity.getAttribute("id");
    i = weatherTagIDs.indexOf(cityTagID);
    weatherWidget = document.getElementsByClassName("weatherwidget-io")[0]
    const weatherchecked = document.getElementById("weatherdegree");
    if (weatherchecked.checked) {
        usUnits = true;
        weatherWidget.setAttribute("href", weatherLinks[i] + "?unit=us");
    }
    else {
        usUnits = false;
        weatherWidget.setAttribute("href", weatherLinks[i]);
    }
    __weatherwidget_init();
}

"Events organizer"
"Genshin impact 5.8 Version (Tuesday)"
const eventsMap = new Map();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"]
const oddmonths = [1, 3, 5, 8, 10];
const intervals = [30, 12, 31, 24, 60];

eventsMap.set("202507292300", "Genshin Impact Version 5.8 Launch");
eventsMap.set("202508011200", "Launch Cornell Consulting");
eventsMap.set("202508020730", "Honkai: Star Rail Version 3.5 Livestream");
eventsMap.set("202508122300", "Honkai: Star Rail Version 3.5 Launch");
eventsMap.set("202508181200", "Finish Backend First Project");
eventsMap.set("202508192300", "Genshin Impact 5.8 Phase 2 Launch");
eventsMap.set("202508298000", "Genshin Impact Version 6.0 Livestream");
eventsMap.set("202509010000", "Labor Day");
eventsMap.set("202509022300", "Honkai: Star Rail 3.5 Phase 2 Launch");
eventsMap.set("202509092300", "Genshin Impact Version 6.0 Launch");
eventsMap.set("202509120730", "Honkai: Star Rail Version 3.6 Livestream");
eventsMap.set("202509232300", "Honkai: Star Rail Version 3.6 Launch");
eventsMap.set("202509302300", "Genshin Impact 6.0 Phase 2 Launch");
eventsMap.set("202510108000", "Genshin Impact Version 6.1 Livestream");
eventsMap.set("202510130000", "Indigenous Peoples Day");
eventsMap.set("202510142300", "Honkai: Star Rail 3.6 Phase 2 Launch");
eventsMap.set("202510212300", "Genshin Impact Version 6.1 Launch");
eventsMap.set("202510240730", "Honkai: Star Rail Version 3.7 Livestream");
eventsMap.set("202510310000", "Halloween");
eventsMap.set("202511042200", "Honkai: Star Rail Version 3.7 Launch");
eventsMap.set("202511110000", "Veterans Day");
eventsMap.set("202511112200", "Genshin Impact 6.1 Phase 2 Launch");
eventsMap.set("202511217000", "Genshin Impact Version 6.2 Livestream");
eventsMap.set("202511252200", "Honkai: Star Rail 3.7 Phase 2 Launch");
eventsMap.set("202511270000", "Thanksgiving");
eventsMap.set("202512022200", "Genshin Impact Version 6.2 Launch");
eventsMap.set("202512050630", "Honkai: Star Rail Version 3.8 Livestream");
eventsMap.set("202512162200", "Honkai: Star Rail Version 3.8 Launch");
eventsMap.set("202512232200", "Genshin Impact 6.2 Phase 2 Launch");
eventsMap.set("202512240000", "Christmas Eve");
eventsMap.set("202512250000", "Christmas");
eventsMap.set("202512310000", "New Years Eve");

function determineDays(month) {
    if (oddmonths.indexOf(month) >= 0) {
        if (oddmonths.indexOf(month) == 0) {
            x = new Date()
            if (x.getFullYear() % 4 == 0) {
                return 29;
            }
            else {
                return 28;
            }
        }
        else {
            return 30;
        }
    }
    else {
        return 31;
    }
}

function recurse(array, month) {
    for (i = array.length; i > 0; i--) {
        if (array[i] < 0) {
            if (i == 2 && oddmonths.indexOf(month) >= 0) {
                array[i] += determineDays(month);
            }
            else {
                array[i] += intervals[i];
            }
            array[i - 1] -= 1;
        }
    }
}

function upcomingEvents() {
    rn = new Date()
    for ([t, e] of eventsMap) {
        yearDiff = parseInt(t.substring(0, 4)) - rn.getFullYear();
        monthDiff = parseInt(t.substring(4, 6)) - rn.getMonth() - 1;
        dayDiff = parseInt(t.substring(6, 8)) - rn.getDate();
        hourDiff = parseInt(t.substring(8, 10)) - rn.getHours();
        minDiff = parseInt(t.substring(10, 12)) - rn.getMinutes();
        timeDiff = [yearDiff, monthDiff, dayDiff, hourDiff, minDiff];
        good = false;
        for (x of timeDiff) {
            if (x > 0) {
                good = true;
                recurse(timeDiff, rn.getMonth());
            }
            else if (x < 0 && !good) {
                timeDiff = null;
                break;
            }
        }
        if (timeDiff != null && timeDiff[2] < 7 && timeDiff[0] == 0 && timeDiff[1] == 0) {
            if (document.getElementById(e) == null) {
                eve = document.createElement("li");
                x = document.createElement("span");
                eve.id = e;
                eve.textContent = e + " in ";
                x.textContent = timeDiff[2].toString() + " days, " + 
                    timeDiff[3].toString() + " hours, and " + timeDiff[4].toString() + " minutes!";
                x.style.color = "#5305f0"
                eve.appendChild(x);
                parentNode = document.getElementById("upcomingEvents");
                parentNode.insertBefore(eve, null);
            }
            else {
                document.getElementById(e).textContent = e + " in ";
                x = document.createElement("span");
                x.textContent = timeDiff[2].toString() + " days, " + 
                    timeDiff[3].toString() + " hours, and " + timeDiff[4].toString() + " minutes!";
                x.style.color = "#5305f0"
                document.getElementById(e).appendChild(x);
            }
        }
    }
}

function determineEvents(n) {
    let arrayMap = Array.from(eventsMap.entries());
    let arrayFiltered =  arrayMap.filter(([k, v]) => parseInt(k.substring(4, 6)) == n + 1);
    arrayFiltered = arrayFiltered.map(k => [parseInt(k[0].substring(6, 8)), k[1]]);
    return arrayFiltered;
}

function createCalendarItem(c, d, n, e) {
    if (d + n > 35) {
        c.style.gridTemplateRows = "6fr 3fr repeat(6, 12fr)";
        c.style.aspectRatio = "1.037";
        f = 42;
    }
    else if (d + n <= 28) {
        c.style.gridTemplateRows = "6fr 3fr repeat(4, 12fr)";
        c.style.aspectRatio = "1.474";
        f = 28;
    }
    else {
        f = 35;
    }
    for (let i = 0; i < d; i++) {
        margin = document.createElement("div");
        c.insertBefore(margin, null);
    }
    for (let i = 0; i < n; i++) {
        newDay = document.createElement("div");
        newDay.id = c.id + (i + 1).toString();
        newDayc = document.createElement("h4");
        newDayc.textContent = i + 1;
        if ((i + d + 1) % 7 == 0) {
            newDay.style.borderRight = "dashed #ffd5fb 3px";
        }
        if ((i + d) >= f - 7) {
            newDay.style.borderBottom = "dashed #ffd5fb 3px";
        }
        c.insertBefore(newDay, null);
        newDay.insertBefore(newDayc, null);
    }
    for (let i = d + n; i < f; i++) {
        margin = document.createElement("div");
        if ((i + 1) % 7 == 0) {
            margin.style.borderRight = "dashed #ffd5fb 3px";
        }
        if (i > f - 7) {
            margin.style.borderBottom = "dashed #ffd5fb 3px";
        }
        c.insertBefore(margin, null);
    }
    for ([t, v] of e) {
        newText = document.createElement("p");
        newText.textContent = v;
        c.querySelector("#" + c.id + t.toString()).insertBefore(newText, null);
    }
}

function createCalendars() {
    calendarItem = document.getElementsByClassName("calendar")[0];
    var newCalendars = [];
    for (i = 0; i < 12; i++) {
        newCalendars[i] = calendarItem.cloneNode(true);
    }
    dayStart = parseInt(calendarItem.classList[1]);
    monthNum = months.indexOf(calendarItem.id);
    numOfDays = determineDays(monthNum);
    rel = determineEvents(monthNum);
    createCalendarItem(calendarItem, dayStart, numOfDays, rel);
    newCalendars[monthNum] = calendarItem;
    createCalBefore(monthNum, newCalendars);
    createCalAfter(monthNum, newCalendars);
    return newCalendars;
}

function createCalBefore(currentMonth, allCals) {
    for (let i = currentMonth - 1; i >= 0; i--) {
        allCals[i].setAttribute("id", months[i]);
        newNumDays = determineDays(i);
        newDayStart = (parseInt(allCals[i + 1].classList[1]) + 70 - newNumDays) % 7;
        allCals[i].classList.remove(allCals[currentMonth].classList[1]);
        allCals[i].classList.add(newDayStart.toString());
        allCals[i].querySelector("#monthHeading").textContent = months[i] + " 2025";
        rel = determineEvents(i);
        createCalendarItem(allCals[i], newDayStart, newNumDays, rel);
    }
}

function createCalAfter(currentMonth, allCals) {
    for (let i = currentMonth + 1; i < 12; i++) {
        allCals[i].setAttribute("id", months[i]);
        newNumDays = determineDays(i);
        oldDays = determineDays(i - 1);
        newDayStart = (parseInt(allCals[i - 1].classList[1]) + oldDays) % 7;
        allCals[i].classList.remove(allCals[currentMonth].classList[1]);
        allCals[i].classList.add(newDayStart.toString());
        allCals[i].querySelector("#monthHeading").textContent = months[i] + " 2025";
        rel = determineEvents(i);
        createCalendarItem(allCals[i], newDayStart, newNumDays, rel);
    }
}

function changeMonth(n) {
    currentCal = document.getElementsByClassName("calendar")[0];
    if (months.indexOf(currentCal.id ) + n >= 0 && months.indexOf(currentCal.id) + n < 12) {
        document.getElementsByClassName("calendar")[0].replaceWith(newCalendars[months.indexOf(currentCal.id) + n]);
    }
}

const newCalendars = createCalendars();
document.addEventListener("DOMContentLoaded", upcomingEvents);

"Creating My Wish Histories"
const wishMapper = new Map();
wishMapper.set("GICharacterBanner", ["Mona 73", "Kamisato Ayaka 78", "Tartaglia 76", "Qiqi 74", "Zhongli 77", "Jean 76",
    "Ganyu 51", "Ganyu 1", "Venti 74", "Kaedehara Kazuha 74", "Qiqi 28", "Kaedehara Kazuha 79", "Klee 67", "Mona 79", 
    "Albedo 82", "Qiqi 78", "Wanderer 76", "Nahida 81", "Tighnari 75", "Nahida 75", "Nahida 1", "Kaedehara Kazuha 75", 
    "Alhaitham 80", "Lyney 75", "Keqing 81", "Neuvillette 45", "Arlecchino 83", "Furina 78", "Dehya 75", "Furina 79",
    "Tighnari 78", "Furina 78", "Xilonen 75", "Escoffier 21", "Diluc 76", "Kinich 9", "Skirk 78", "Yumemizuki Mizuki 83",
    "Mavuika 76", "Mona 43", "Emilie 5"]);
wishMapper.set("GIWeaponBanner", ["Elegy for the End 33", "Primordial Jade Winged-Spear 70", "The First Great Magic 65",
    "Crimson Moon's Semblance 28", "Cashflow Supervision 71", "Splendor of Tranquil Waters 65", "Azurelight 69"]);
wishMapper.set("GIStandardBanner", ["Mona 12", "Skyward Pride 9", "Jean 76", "Amos' Bow 77", "Skyward Spine 31",
    "Skyward Spine 27", "Diluc 76", "Tighnari 7", "Skyward Harp 80", "Tighnari 18", "Skyward Atlas 2", "Diluc 4", 
    "Mona 81", "Lost Prayer to the Sacred Winds 77", "Wolf's Gravestone 2", "Tighnari 78", "Primordial Jade Winged-Spear 76"]);
wishMapper.set("HSRCharacterBanner", ["Adventurine 42", "Firefly 82", "Clara 20", "Ruan Mei 34", "Gepard 1", "Black Swan 68",
    "Acheron 66", "Acheron 76", "Acheron 78", "Sunday 61", "Fugue 44", "The Herta 20", "Yanqing 26", "Robin 38", "Welt 81",
    "Huohuo 51", "Castorice 15", "Bronya 11", "Anaxa 76", "Phainon 77"])
wishMapper.set("HSRLightConeBanner", ["Whereabouts Should Dreams Rest 22", "Past Self in Mirror 19", "Along the Passing Shore 67",
    "Along the Passing Shore 1", "Into the Unreachable Veil 58", "Moment of Victory 71", "Make Farewells More Beautiful 69",
    "Thus Burns the Dawn 21"
])
wishMapper.set("HSRStandardBanner", ["But the Battle Isn't Over 1", "Yanqing 79", "Night on the Milky Way 37",
    "Night on the Milky Way 82", "Sleep Like the Dead 12"])
function generateWishes() {
    for ([b, h] of wishMapper) {
        parent = document.getElementById(b);
        if (b.includes("Weapon") || (b.includes("Light"))) {
            inc = 80/3;
        }
        else {
            inc = 30;
        }
        for (x of h) {
            p = document.createElement("p");
            p.textContent = x;
            p.classList = "wishType";
            pity = parseInt(x.match(/\d+/g)[0]);
            newRV = Math.trunc(pity/(inc * 3) * -93 + 255).toString(16).padStart(2, "0");
            p.style.color = "#" + newRV + "80ff";
            p.style.borderColor = "#" + newRV + "80ff";
            parent.insertBefore(p, null);
        }
    }
}

function firstStartBanners() {
    Array.from(document.getElementsByClassName("GIBanners")).forEach((x) => x.style.display = "none");
    document.getElementById("GIChar").style.display = "block";
    Array.from(document.getElementsByClassName("HSRBanners")).forEach((x) => x.style.display = "none");
    document.getElementById("HSRChar").style.display = "block";
}

function GIdisplayActive(banner, ne) {
    Array.from(document.getElementsByClassName("GIWishType")).forEach((x) => x.classList.remove("activeBanner"));
    document.getElementById(ne).classList.add("activeBanner");
    Array.from(document.getElementsByClassName("GIBanners")).forEach((x) => x.style.display = "none");
    document.getElementById(banner).style.display = "block";
}

function HSRdisplayActive(banner, ne) {
    Array.from(document.getElementsByClassName("HSRWishType")).forEach((x) => x.classList.remove("activeBanner"));
    document.getElementById(ne).classList.add("activeBanner");
    Array.from(document.getElementsByClassName("HSRBanners")).forEach((x) => x.style.display = "none");
    document.getElementById(banner).style.display = "block";
}

firstStartBanners();
generateWishes();

"Handling the Theater/Endgame"
function displayTheater(tf) {
    if (tf == 1) {
        document.getElementById("popupImagine_T").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    if (tf == -1) {
        document.getElementById("popupImagine_T").style.display = "none";
        document.body.style.overflow = "auto";
    }
}
