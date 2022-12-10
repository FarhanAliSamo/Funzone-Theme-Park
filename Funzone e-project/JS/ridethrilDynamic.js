let dynamicContainer = document.getElementById("dynamicContainer")


const thrillRides = [
    {
        id: 1,
        name: "Xcelerator Ride ",
        thrillLevel: 5,
        attractionType: "Thrill",
        mininmumHeight: ' 52"'  ,
        image : "./Images/Thrill-Rides/Thrill Rides/xcelerator-banner.jpg",
        heading: "XCELERATOR THE RIDE",
        paragraph: "Rocket 0-82 mph in 2.3 seconds as you fly 205 feet into the air before immediately hurtling 90 degrees straight down on Xcelerator The Ride® roller coaster at Knott's Berry Farm. Slick back your hair and grab your leather jacket; happy days are here again! This high-octane coaster fires up its engines on the Boardwalk with chrome-plated, flame-emblazoned '57 Chevys and speed <br><br>From the minute you enter the station, you're transported back to the time of greasers, beatniks, and cubes. Step up to the platform and fasten yourself into one of the yellow and orange flame-emblazoned, candy-apple red or purple fin-tailed hot rods. You are now in the passenger seat and the driver is racing for pink slips. Hold on tight and make sure your knuckles are white because this baby burns rubber across 2,202 feet of cool coral track.",
        duration:"10 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 2,
        name: "Coast Rider",
        thrillLevel: 5,
        attractionType: "Thrill",
        mininmumHeight: ' 54"'  ,
        image : "./Images/Thrill-Rides/Thrill Rides/coast-rider-banner.jpg",
        heading :"COAST RIDER",
        paragraph :"he 52-foot ascent to the top of Coast Rider will have everyone clinging to the handrails for the ultimate family coaster experience. The adventure aboard the ride gives guests the feeling of riding the California coast, but once they reach the crest, it is a harrowing journey down the 1,339 feet of track filled with hairpin turns, twists, and spins.",
        duration:"20 Min",
        location:"Oasis Plaza"
    },
   {
    id: 3,
    name: "Ghost Rider",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 48"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/ghostrider-banner.jpg",
    heading :"GHOSTRIDER" ,
    paragraph :"GhostRider is the longest, tallest, and fastest wooden roller coaster on the West Coast! Looming 118 feet over historic Ghost Town, GhostRider is the largest attraction at Knott’s Berry Farm and one of the longest and tallest wooden roller coasters in the world.<br>Brave riders enter a mysterious mine and board gold, silver or copper mining car before being sent galloping along over 4,500 feet of twisting timber. The massive roller coaster includes 14 hills providing tons of air time throughout the nearly three minute journey. For the ultimate thrill, take a ride at night when every twist and turn is hidden in darkness.",
    duration:"10 Min",
    location:"DC UNIVERSE"    
},
   {
    id: 4,
    name: "HangTime",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 48"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/hangtime-banner.jpg",
    heading :"HANGTIME" ,
    paragraph :"HangTime, the first dive coaster in California, is now open at Knott's Berry Farm!  HangTime towers 150 feet over the Boardwalk area showcasing a beyond vertical drop that is the steepest in California, gravity-defying inversions, and mid-air suspensions",
    duration:"5 Min", 
    location:"Oasis Plaza"    
},
   {
    id: 5,
    name: "Montezoomas Revenge",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 48"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/kbf-banner-montezoomas-revenge.jpg",
    heading :"MONTEZOOMA'S REVENGE" ,
    paragraph :"Montezooma’s Revenge will close as major renovations will be taking place to this historic coaster. This flywheel-launched shuttle coaster was the first of its kind and will be upgraded with exciting changes while keeping the ride’s unique charm that our guests have loved for generations. Stay tuned for more information later this year.",
    duration:"17 Min",
    location:"DC UNIVERSE"    
},
    {
     id:6 ,
     name: "WipeOut",
     thrillLevel: 4,
     attractionType: "Thrill",
     mininmumHeight: ' 48"'  ,
     image : "/Images/Thrill-Rides/Thrill Rides/kbf-rides-2021-wipeout-v2-banner.jpg",
     heading :"WIPEOUT" ,
     paragraph :"This circular spinning ride starts off flat and gradually lifts off the ground.",
     duration:"20 Min",
        location:"Oasis Plaza"
    },
   {
    id:7 ,
    name: "La Revoluction",
    thrillLevel: 4,
    attractionType: "Thrill",
    mininmumHeight: ' 48"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/la-revolucion-banner.jpg",
    heading :"LA REVOLUCION" ,
    paragraph :"La Revolución swings riders an astounding 64 feet in the air (over 6 stories high!) to 120 degrees in both directions, while the passenger vehicle spins continuously at up to 9 RPMs. With its inward-facing inverted seating, the combination of the swinging arm and rotating gondola creates the ultimate ride sensation!",
    duration:"8 Min",
    location:"DC UNIVERSE"    
},
   {
    id:8 ,
    name: "Lagunga Strom Tower",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 42"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/laguna-storm-watch-tower-banner.jpg",
    heading :"LAGUNA STORM WATCH TOWER" ,
    paragraph :"Pray the weather clears on the Typhoon, Tornado and Cyclone tube slides atop the 43-ft.-high Laguna Storm Watch Tower. Ride alone or with a friend on your inflatable raft to help you steer through the stormy waters ahead.",
    duration:"10 Min",
    location:"Oasis Plaza"    
},
   {
    id:9 ,
    name: "Silver Bullet",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 54"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/silver-bullet-banner.jpg",
    heading :"SILVER BULLET" ,
    paragraph :"Silver Bullet at Knott’s Berry Farm flips upside down and all around during a thrilling two minute roller coaster ride. Guests’ feet dangle below the ground as soon as the coaster train pulls out of the station. The inverted roller coaster then sends brave riders climbing up to a height of 146 feet before soaring back down with an initial drop of 109 feet into a track full of inversions.<br>iders will spiral, corkscrew, fly into a cobra roll, and experience overbanked curves as they find themselves upside down six times including the giant vertical loop of 105 feet. Silver Bullet’s 3,125 feet of track snakes in and around itself, high above a reflecting lake, providing incredible views of Knott’s throughout the ride.",
    duration:"2 Min",
    location:"Oasis Plaza"    
},
   {
    id:10 ,
    name: "Sol Spin ",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 54"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/sol-spin-banner.jpg",
    heading :"SOL SPIN" ,
    paragraph :"The new thrill ride Sol Spin is now open! Sol Spin sends brave guests on a thrilling adventure over 6 stories high as they rotate in all directions on one of six spinning arms. Each arm rotates 360 degrees independent of one another providing a different experience every ride.",
    duration:"6 Min",
    location:"DC UNIVERSE"    
},
   {
    id:11 ,
    name: "Supreme Scream ",
    thrillLevel: 5,
    attractionType: "Thrill",
    mininmumHeight: ' 52"'  ,
    image : "./Images/Thrill-Rides/Thrill Rides/supreme-scream-banner.jpg",
    heading :"SUPREME SCREAM" ,
    paragraph :"Supreme Scream transports brave, open-air riders straight UP, to a record-breaking 252 feet in midair, before power-blasting them straight DOWN – in three seconds flat – at gravity-defying speeds topping 50 mph and after experiencing three seconds of total weightlessness! Thrill enthusiasts will bounce halfway back up the ride’s structure before returning to the launch pad.",
    duration:"3 Min",
    location:"Oasis Plaza"    
},
]

const rootEl = document.getElementById("root")
const test = () =>{
    const id = location.hash[1]-1
    rootEl.innerHTML+=`
    <div class="image" data-aos="zoom-in-down" data-aos-duration="1500">
        <img src="${thrillRides[id].image}" id="image" alt="">
    </div>

    <div class="ride-details m-0 row">
        
        <div class="detail text-center col- col-md-8" data-aos="fade-up"
        data-aos-duration="1500">
            <h1 class="text-center">${thrillRides[id].heading}</h1>
            <hr>
            <p>${thrillRides[id].paragraph}</p>
            
            <div data-aos="fade-up"
            data-aos-duration="1500">
            <h1>The Ride Features</h1>
            <hr>
            <ul>
                <li>A massive, imposing, floating and twisting I-box track frame in a unique two-tone design.</li>
                <li>One-of-a-kind onboard magnetic technology featuring smooth head-over-heels free-fly flips, giving guests the feeling of weightlessness as they soar outside the confines of a traditional track.</li>
                <li>4D wing vehicles that seat up to eight per vehicle with a total of five vehicles</li>
                <li>Face-off seats that allow riders to face each other as they tumble head-over-heels.</li>
                <li>A 120-foot-tall, 90-degree hill that is ascended by an elevator-style, chain link lift.</li>
                <li>Two beyond 90-degree “raven” drops giving the sensation of free-falling.</li>
            </ul></div>
        </div>

        <div class="ride-info  col- col-md-4 px-sm-5 p-md-3" data-aos="fade-up"
           data-aos-duration="1500">
            <h1 class="text-center">Ride Info</h1>
            <div class="box">
                <p><i class="fa-solid fa-gauge"></i> Thrill Level</p>
                <h4>Maximum</h4>
            </div>
            <div class="box">
                <p><i class="fa-solid fa-person"></i> Minimum Height</p>
                <h4>${thrillRides[id].mininmumHeight}</h4>
            </div>
            <div class="box">
                <p><i class="fa-solid fa-location-dot"></i> Location In Park</p>
                <h4>${thrillRides[id].location}</h4>
            </div>
            <div class="box">
                <p><i class="fa-solid fa-wand-magic-sparkles"></i> Special Features</p>
                <h4>Goes upside down</h4>
            </div>
            <div class="box">
                <p><i class="fa-solid fa-clock"></i> Ride Duration</p>
                <h4>${thrillRides[id].duration}</h4>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.314134948184!2d67.14963621526658!3d24.88726428404127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1667301381505!5m2!1sen!2s"
                width="100%" height="200px" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>



    `

}
test()