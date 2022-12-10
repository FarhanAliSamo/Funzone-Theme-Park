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
        name: "FZ Log Ride",
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


const ridePage = () =>  {
    thrillRides.map((thrillRides ,id) => {
        dynamicContainer.innerHTML += `
        <div class="ride-box  row">
        <div class="image col- col-sm-5"><img src="${thrillRides.image}" alt=""></div>
        <div class="ride-details ps-md-5 col- col-sm-7">
                <h1>${thrillRides.name}</h1>
                 <i><img src="./Images/BackGrounds/attraction star png.png" alt=""></i>
                <div class="flex">
                    <p>Thrill Level:</p>
                    <i class="icon__signal-strength signal-${thrillRides.thrillLevel}">
                        <span class="bar-1"></span>
                        <span class="bar-2"></span>
                        <span class="bar-3"></span>
                        <span class="bar-4"></span>
                    </i>
                </div>
                <div class="flex">
                    <p>Attraction Type:</p>
                    <P>${thrillRides.attractionType}</P>
                </div>
                <div class="flex">
                    <p>Minimum Height:</p>
                    <P>${thrillRides.mininmumHeight}</P>
                </div>
                <a href="./ridefamily-dynamic.html#${id +1}">
                <button class="button-64 m-3 m-sm-0" role="button"><span class="text">More Details</span></button></div>
                </a>    
        </div>
        </div>
        `
    });
};
ridePage()