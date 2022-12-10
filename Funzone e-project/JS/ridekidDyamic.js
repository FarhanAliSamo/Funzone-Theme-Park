let dynamicContainer = document.getElementById("dynamicContainer")


const thrillRides = [
    {
        id: 1,
        name: "Ballon Race",
        thrillLevel: 1,
        attractionType: "Kids",
        mininmumHeight: ' 36"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/balloon-race-banner.jpg",
        heading: "BALLOON RACE",
        paragraph: "ly high above the High Sierra Mountains of Camp Snoopy® in your very own miniature version of a “hot air balloon”.<br>Snoopy invites you to step aboard one of his high flying balloons to compete for the title of Best Balloon Racer in Camp Snoopy®! Help Snoopy face off against his old pal Charlie Brown, Lucy, Sally, and the whole Peanuts gang on who can race their hot air balloon around Camp Snoopy® the fastest and claim the honor of being called The Best Balloon Racer in camp.<br>Make your way to a colorful PEANUTS® themed balloon of your choice and hop aboard. Watch as you lift and fly above the beautiful High Sierra’s that surrounds Camp Snoopy®. Wave high to your friends below as you see your friends enjoy other camp activities such as The Grand Sierra Railroad, Woodstock’s Air Mail, and the thrilling Sierra Sidewinder.",
        duration:"5 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 2,
        name: "Beach House Slide",
        thrillLevel: 3,
        attractionType: "Kids",
        mininmumHeight: ' 42"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/beach-house-slides-banner.jpg",
        heading: "BEACH HOUSE SLIDES",
        paragraph: "Exclusively for tomorrow’s surfers, the Beach House offers three stories of hands-on water fun including interactive water guns, nozzles, faucets, and other surprises. And beware! Every five minutes the water bucket unloads 500 gallons of water on anyone below!",
        duration:"10 Min",
        location:"Oasis Plaza"
    },
    {
        id: 3,
        name: "Camp Bus",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 36"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/camp-bus-banner.jpg",
        heading: "CAMP BUS",
        paragraph: "Load up your gear and hitch a ride! America’s favorite beagle and the whole PEANUTS™ gang are boarding the Camp Bus for a great adventure at Camp Snoopy. No need to bring a ticket; simply take a seat alongside friends and family and prepare for a crazy road trip. On the Camp Bus, driven by Snoopy himself, there’s no telling where you’ll go or how you’ll get there! After the parking brake is released, you’ll be traveling way up, way down and all around.<br>Hang on tight as you peek out to see the park from a Woodstock-eye view. Can you see Charlie Brown’s Kite Flyer, Pig Pen’s Mud Buggies, and Rocky Mountain Trucking Company from that high? Feel the wind in your hair and the smile on your face as Snoopy takes you on this fun trip. Here’s an idea for parents from Snoopy: Ask your children, if they could take a ride on the Camp Bus to anywhere, where would it be?",
        duration:"3 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 4,
        name: "Flyign Ace",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 32"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/flying-ace-banner.jpg",
        heading: "FLYING ACE",
        paragraph: "Charlie Brown’s trusty best friend Snoopy isn’t your everyday canine. Oh no, not by a longshot. In his dreams, America’s favorite beagle turns into the mighty World War I Flying Ace, soaring the open skies and saving the world from the evil Red Baron in his nighttime battles. But, as any good pilot knows, the Flying Ace can’t save the world alone. He needs your help!<br>Grab the whole family to come aboard Snoopy’s Sopwith Camel aircraft and join in his mission for justice. Strap on your aviators, take the controls and join Snoopy for a high-flying, memorable adventure on our Flying Ace ride.<br>You’ll swoop -down to the ground and then, just as quick, soar to new heights. Here’s a fun idea for parents from the World War I Flying Ace Snoopy: Talk with your children about where they would go if they could fly an airplane to anywhere",
        duration:"20 Min",
        location:"Oasis Plaza"
    },
    {
        id: 5,
        name: "Huff And Puff",
        thrillLevel: 1,
        attractionType: "Kids",
        mininmumHeight: ' None'  ,
        image : "./Images/Thrill-Rides/Kids Rides/huff-and-puff-banner.jpg",
        heading: "HUFF AND PUFF",
        paragraph: "Climb aboard your very own miniature mining cart as you pump and push your way through the High Sierra Mountains. This one of a kind ride system sends little campers chugging along the track at the speed of their own strength. How fast can you pump and push yourself all the way around Camp Snoopy? Race your fellow beagle scouts to earn your own Huff and Puff merit badge.<br>As you “huff and puff” around Camp Snoopy, take in the sights of your fellow campers enjoying other camp activities such as the Linus Launcher, Charlie Brown’s Kite Flyers, and the Rocky Mountain Trucking Company.<br>Originally opened in 1983, Huff and Puff is a Knott’s Berry Farm Camp Snoopy classic that is sure to delight any little camper.",
        duration:"2 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 6,
        name: "Linus Launcher",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 42"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/linus-launcher-banner.jpg",
        heading: "LINUS LAUNCHER",
        paragraph: "Have you ever watched birds and wished you could fly like them? Here’s your chance! On Knott’s Berry Farm’s Linus Launcher, you can experience the sensation of free flight, taking everyone in the family to new heights of fun and excitement!<br>This unique ride recreates the classic PEANUTS™ moment when that crazy Snoopy grabs Linus’ beloved blanket and propels the little buddy on a wild ride.<br>On Linus Launcher, you’ll lie face-down and side-by-side with your own buddy on one of Linus’ “blankets” -- all while your feet are dangling off the back end. As the ride starts, hold on tight because you’ll quickly pick up speed and rise high above the ground.<br>You’ll soar among the birds – around and around, up and down – and get a Woodstock’s-eye view of Balloon Race, Flying Ace, and Sierra Sidewinder. Once you fly like a bird on Linus Launcher once, you’ll want to do it again and again!",
        duration:"7 Min",
        location:"Oasis Plaza"
    },
    {
        id: 7,
        name: "Pig Pen Buggies",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 36"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/pig-pens-mud-buggies-banner.jpg",
        heading: "PIG PEN'S MUD BUGGIES",
        paragraph: "Pig Pen of the PEANUTS™ gang sure loves a mess. Everywhere he goes, he drags along with him a huge cloud of dirt and dust. But he doesn’t mind. In fact, he thinks being grubby is great, so much so that now he wants other kiddos to see how fun a big mess can be on Pig Pen’s Mud Buggies.<br>Pint-sized adventurers will climb aboard their very own colorful all-terrain vehicle for a thrilling trek up, down and around the rough and rocky mountains. The ATVs will spin, bounce, and bump along, while Pig Pen enjoys watching the muddy fun from his center perch.<br>Don’t worry, Mom. Your little driver won’t get drenched in mud on this adventure, but sure will be covered in smiles! Here’s a fun idea for parents from Pig Pen: Ask your child, if you could go anywhere on one of Pig Pen’s Mud Buggies, where would it be?",
        duration:"6 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 8,
        name: "Rapid River Run",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 42"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/rapid-river-run-banner.jpg",
        heading: "RAPID RIVER RUN",
        paragraph: "Young campers will need to get ready to paddle down the river as they brave the rapids in this rolling excursion that takes passengers to a height of 21 feet and back again<br>Calling all campers! Lucy is looking for a crew to help her helm her brand new tugboat through the beautiful rivers surrounding Camp Snoopy®! Grab an ore and paddle down the river with Lucy as your guide through the winding rivers around camp.<br>Be careful and on the lookout for any rapids that may lie ahead as they might spin your tugboat through the strong river current. Campers need not worry though, with Lucy at the helm your voyage will return safely to shore.",
        duration:"8 Min",
        location:"Oasis Plaza"
    },
    {
        id: 9,
        name: "Rocky Mountain Trucking",
        thrillLevel: 1,
        attractionType: "Kids",
        mininmumHeight: ' 36"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/rocky-mountain-trucking-company-banner.jpg",
        heading: "ROCKY MOUNTAIN TRUCKING COMPANY",
        paragraph: "Who needs a driver’s license when you have the Peanuts Rocky Mountain Trucking Company? Take your little ones and climb into the front seat of an 18-wheeler. In this attraction, kids are in charge. They can get behind the wheel and drive a truck through the twists and turns of the High Sierra Mountains of Camp Snoopy®. But your kids aren’t driving any old truck.<br>These mini 18-wheeler trucks come in bright Peanuts-themed colors.  And when the trucks come around the corner, you’ll have to wonder which one you’ll get. Are you more of a bright blue truck like Linus’ blanker, or the yellow zig-zags of Charlie Brown’s signature t-shirt?",
        duration:"3 Min",
        location:"DC UNIVERSE"
    },
    {
        id: 10,
        name: "Woodstock's Airmail",
        thrillLevel: 2,
        attractionType: "Kids",
        mininmumHeight: ' 42"'  ,
        image : "./Images/Thrill-Rides/Kids Rides/woodstocks-airmail-banner.jpg",
        heading: "WOODSTOCK'S AIRMAIL",
        paragraph: "Calling all adventure seekers in training! Come along and hop aboard this special delivery of Woodstock's Airmail.<br>Woodstock needs your help to deliver mail around Camp Snoopy®. Can you spot Charlie Brown, Sally, or Snoopy as you bounce around camp to make some special deliveries?<br>Test out your thrill-power on Woodstock’s Airmail before you head on over to the big kid rides. This ride is a great beginner for little park goers. Located in Camp Snoopy®, it has all of the ups, downs and thrills of Supreme Scream, but on a much smaller scale; not as high, not as fast and totally suitable for little kids.<br>Kickstart your ride with a big liftoff; as Woodstock’s Airmail lifts you into the sky, you’ll see awesome views of Camp Snoopy® like Flying Ace and the thrilling Sierra Sidewinder right before bringing you safely back to earth.",
        duration:"20 Min",
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