let dynamicContainer = document.getElementById("dynamicContainer")


const thrillRides = [
    {
        id: 1,
        name: "WaveSwinger",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' 48"'  ,
        image : "./Images/Thrill-Rides/family rides/waveswinger-banner.jpg",
        heading: "WAVESWINGER",
        paragraph: "A memorable ride that you and your family can enjoy together, our Wave Swinger is a classic swing ride that delivers a mellow -- yet incredibly exhilarating -- experience, as you glide through the air in swings suspended 40 feet above the ground<br>Under a high canopy of intricate, elaborate murals resembling those on a carousel of ages past, you’ll rotate 360 degrees in a circular, wavelike motion. Arcing upwards and accelerating downwards, you’ll certainly feel each and every element of this time-honored amusement park experience all the way down to your free-floating toes.<br>Enjoy breathtaking views of the park and wave to those below, but make sure to still hold on tight, because you’ll be zipping right along! At night, the Wave Swinger delivers an entirely new experience when its tower and canopy are illuminated with thousands of shimmering lights. You’ll feel like you’re swinging on a star!",
        duration:"10 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 2,
        name: "Beach House",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' None'  ,
        image : "./Images/Thrill-Rides/family rides/beach-house-banner.jpg",
        heading: "BEACH HOUSE",
        paragraph: "Cowabunga! Exclusively for tomorrow’s surfers, the Beach House offers three stories of hands-on water fun including interactive water guns, nozzles, faucets and other surprises. And beware! Every five minutes the water bucket unloads 500 gallons of water on anyone below!",
        duration:"5 Min",
        location:"Oasis Plaza"
    },
    {
        id: 3,
        name: "Funzone Railroad",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' 46"'  ,
        image : "./Images/Thrill-Rides/family rides/calico-railroad-banner.jpg",
        heading: "FUNZONE RAILROAD",
        paragraph: "The Calico Railroad has been in operation at Knott’s since January 12, 1952 and is an authentic Denver and Rio Grande Narrow Gauge train used in the early 1900s. It boasts the highest crime rate in all of Orange County, as notorious Ghost Town bandits still hold-up every departure from the Calico Square depot.<br>Height Requirement: 46 inches or accompanied by a supervising companion",
        duration:"6 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 4,
        name: "Dragon Swing",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' 48"'  ,
        image : "./Images/Thrill-Rides/family rides/dragon-swing-banner.jpg",
        heading: "DRAGON SWING",
        paragraph: "Come aboard this swinging boat for a most memorable voyage.<br>Height Requirement: 48 inches or 42 inches and accompanied by a supervising companion",
        duration:"10 Min",
        location:"Oasis Plaza"
    },
    {
        id: 5,
        name: "Hat Dance",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' 42"'  ,
        image : "./Images/Thrill-Rides/family rides/hat-dance-banner.jpg",
        heading: "HAT DANCE",
        paragraph: "Spin your own colorful sombrero to your heart's content.<br>Height Requirement: 42 inches or 36 inches and accompanied by a supervising companion",
        duration:"20 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 6,
        name: "FZ Log Ride<",
        thrillLevel: 5,
        attractionType: "Family",
        mininmumHeight: ' 46"'  ,
        image : "./Images/Thrill-Rides/family rides/kbf-log-ride-banner.jpg",
        heading: "FZLOG RIDE",
        paragraph: "Since its opening in 1969, the Log Ride has always been one of the most elaborate log flume rides in the US, taking guests through an 85-foot-high by 330-foot-long mountain range themed to a nineteenth-century lumber camp.<br>In 2013, the Log Ride reopened after an extensive revitalization, included the restoration of classic scenes, upgrades to ride figures, and new special effects to thrill guests and preserve this classic attraction for a new generation of fans.",
        duration:"5 Min",
        location:"Oasis Plaza"
    },
    {
        id: 7,
        name: "SurfSide Gliders",
        thrillLevel: 3,
        attractionType: "Family",
        mininmumHeight: ' 44"'  ,
        image : "./Images/Thrill-Rides/family rides/surfside-gliders3-banner.jpg",
        heading: "SURFSIDE GLIDERS",
        paragraph: "Taking the ride into their own hands, guests pilot their own Surfside Gliders. From a height of 28 feet, these two-man aircrafts zip through the air providing a bird’s eye view of the Boardwalk area as they glide over the newly expanded Boardwalk.",
        duration:"8 Min",
        location:"DC UNIVERSE"
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