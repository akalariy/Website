const tripData = {
  yosemite: {
    title: 'Yosemite Social Escape',
    park: 'Yosemite National Park',
    location: 'California',
    image: '/Images/Yosemite.avif',
    duration: '4 Days • 3 Nights',
    price: '$599',
    style: 'Nature, hiking, waterfalls, photography, social bonding',
    pickupCities: ['San Francisco', 'Oakland', 'San Jose', 'Sacramento', 'Fresno'],
    overview:
      'A round-trip social adventure to Yosemite with pickup options from major California cities, base camp arrival, group bonding, scenic viewpoints, hikes, and shared experiences.',
    days: [
      {
        title: 'Day 1: City Pickups & Yosemite Base Camp Arrival',
        points: [
          'Morning pickups from San Francisco, Oakland, San Jose, Sacramento, and Fresno.',
          'Scenic group ride toward Yosemite National Park.',
          'Arrive near base camp and settle in.',
          'Welcome meetup with group introductions.',
          'Evening dinner and campfire social.',
        ],
      },
      {
        title: 'Day 2: Yosemite Valley Highlights',
        points: [
          'Breakfast with the group.',
          'Visit Tunnel View for iconic Yosemite photos.',
          'Explore Yosemite Valley, El Capitan, and Yosemite Falls.',
          'Group lunch and scenic photo stops.',
          'Evening social activities at base camp.',
        ],
      },
      {
        title: 'Day 3: Hiking, Views & Group Experience',
        points: [
          'Morning hike or scenic walk based on group comfort.',
          'Visit Mirror Lake or Mist Trail area depending on season.',
          'Relaxed picnic-style lunch.',
          'Sunset viewpoint experience.',
          'Final campfire gathering and group bonding.',
        ],
      },
      {
        title: 'Day 4: Final Photos & Return Trip',
        points: [
          'Breakfast and final group photos.',
          'Pack up and depart from Yosemite.',
          'Bus returns travelers to original pickup cities.',
        ],
      },
    ],
  },

  yellowstone: {
    title: 'Yellowstone Adventure',
    park: 'Yellowstone National Park',
    location: 'Wyoming, Montana & Idaho',
    image: '/Images/Yellowstone.avif',
    duration: '6 Days • 5 Nights',
    price: '$999',
    style: 'Geysers, wildlife, scenic drives, road trip, social adventure',
    pickupCities: ['Salt Lake City', 'Boise', 'Idaho Falls', 'Billings'],
    overview:
      'A longer round-trip adventure designed for travelers from nearby regional cities, featuring Yellowstone’s geysers, wildlife, scenic drives, and group travel energy.',
    days: [
      {
        title: 'Day 1: Regional Pickups & Travel Toward Yellowstone',
        points: [
          'Pickups from Salt Lake City, Boise, Idaho Falls, and Billings depending on route.',
          'Group travel toward the Yellowstone region.',
          'Rest stops, introductions, and road-trip bonding.',
          'Overnight stay near the park route.',
        ],
      },
      {
        title: 'Day 2: Base Camp Arrival & Welcome Meetup',
        points: [
          'Continue travel toward Yellowstone base area.',
          'Arrive, check in, and settle at base camp.',
          'Welcome dinner and trip orientation.',
          'Evening group meetup.',
        ],
      },
      {
        title: 'Day 3: Old Faithful & Geothermal Wonders',
        points: [
          'Visit Old Faithful geyser.',
          'Explore Upper Geyser Basin.',
          'Stop near Grand Prismatic Spring viewpoint.',
          'Group lunch and scenic photo stops.',
          'Evening hangout with the group.',
        ],
      },
      {
        title: 'Day 4: Wildlife & Canyon Views',
        points: [
          'Early morning wildlife drive.',
          'Visit Hayden Valley or Lamar Valley depending on route.',
          'Explore Grand Canyon of the Yellowstone.',
          'Stop at waterfalls and viewpoints.',
          'Group dinner and social evening.',
        ],
      },
      {
        title: 'Day 5: Yellowstone Lake & Final Adventure Day',
        points: [
          'Visit Yellowstone Lake area.',
          'Short scenic trails and viewpoints.',
          'Relaxed group time and photography stops.',
          'Final campfire-style social or group dinner.',
        ],
      },
      {
        title: 'Day 6: Return Trip',
        points: [
          'Breakfast and checkout.',
          'Depart Yellowstone region.',
          'Bus returns travelers to their original pickup cities.',
        ],
      },
    ],
  },

  glacier: {
    title: 'Glacier Friendship Trip',
    park: 'Glacier National Park',
    location: 'Montana',
    image: '/Images/Glacier.avif',
    duration: '6 Days • 5 Nights',
    price: '$949',
    style: 'Mountains, lakes, scenic drives, hiking, group bonding',
    pickupCities: ['Spokane', 'Missoula', 'Kalispell', 'Calgary'],
    overview:
      'A peaceful round-trip adventure to Glacier National Park with regional pickups, alpine lakes, mountain scenery, base camp bonding, and unforgettable group moments.',
    days: [
      {
        title: 'Day 1: Regional Pickups & Travel',
        points: [
          'Pickups from Spokane, Missoula, Kalispell, and Calgary depending on route.',
          'Group travel toward Glacier National Park.',
          'Introductions and travel bonding during the ride.',
          'Overnight near the route or Glacier area.',
        ],
      },
      {
        title: 'Day 2: Base Camp Arrival & Lake McDonald',
        points: [
          'Arrive near Glacier National Park.',
          'Settle into base camp or lodging.',
          'Visit Lake McDonald for scenic views.',
          'Welcome dinner and group meetup.',
        ],
      },
      {
        title: 'Day 3: Going-to-the-Sun Road Experience',
        points: [
          'Drive Going-to-the-Sun Road if open.',
          'Stop at Logan Pass area.',
          'Short scenic hikes depending on weather.',
          'Mountain viewpoints and group photos.',
          'Evening social time.',
        ],
      },
      {
        title: 'Day 4: Lakes, Trails & Nature Time',
        points: [
          'Explore lakeside trails and viewpoints.',
          'Picnic-style group lunch.',
          'Optional easy hike or relaxed scenic walk.',
          'Campfire-style group gathering.',
        ],
      },
      {
        title: 'Day 5: Final Glacier Adventure Day',
        points: [
          'Flexible exploration day based on weather and group interest.',
          'Photography stops and scenic viewpoints.',
          'Final group dinner.',
          'Friendship exchange and community bonding.',
        ],
      },
      {
        title: 'Day 6: Return Trip',
        points: [
          'Breakfast and checkout.',
          'Depart Glacier region.',
          'Bus returns travelers to their original pickup cities.',
        ],
      },
    ],
  },

  zion: {
    title: 'Zion Weekend Escape',
    park: 'Zion National Park',
    location: 'Utah',
    image: '/Images/Zion.jpeg',
    duration: '5 Days • 4 Nights',
    price: '$699',
    style: 'Canyons, hiking, desert views, social weekend adventure',
    pickupCities: ['Phoenix', 'Las Vegas', 'St. George', 'Salt Lake City'],
    overview:
      'A social round-trip Zion adventure designed to include travelers from Phoenix, Las Vegas, St. George, and Salt Lake City with enough time for travel, hikes, campfire bonding, and return.',
    days: [
      {
        title: 'Day 1: Phoenix & Regional Pickups',
        points: [
          'Early pickup from Phoenix for long-distance travelers.',
          'Additional pickups from Las Vegas, St. George, and Salt Lake City depending on route.',
          'Travel toward Zion region with rest stops.',
          'Arrive near base camp and settle in.',
          'Welcome dinner and group introductions.',
        ],
      },
      {
        title: 'Day 2: Zion Canyon Introduction',
        points: [
          'Breakfast with the group.',
          'Enter Zion Canyon early.',
          'Explore Riverside Walk or Emerald Pools.',
          'Group lunch in Springdale or picnic style.',
          'Sunset viewpoint and evening social.',
        ],
      },
      {
        title: 'Day 3: Signature Zion Hiking Day',
        points: [
          'Optional Angels Landing viewpoint area depending on permits and safety.',
          'Alternative group-friendly hikes available.',
          'Scenic canyon photography stops.',
          'Group dinner and campfire-style gathering.',
        ],
      },
      {
        title: 'Day 4: Narrows / Scenic Adventure Day',
        points: [
          'Explore The Narrows area depending on weather and conditions.',
          'Relaxed scenic drive and group activities.',
          'Final social night with group reflections and photos.',
        ],
      },
      {
        title: 'Day 5: Return Trip',
        points: [
          'Breakfast and checkout.',
          'Depart Zion region.',
          'Drop-offs at St. George, Las Vegas, Salt Lake City, and Phoenix depending on route.',
        ],
      },
    ],
  },

  'grand-canyon': {
    title: 'Grand Canyon Group Journey',
    park: 'Grand Canyon National Park',
    location: 'Arizona',
    image: '/Images/GrandCanyon.avif',
    duration: '4 Days • 3 Nights',
    price: '$599',
    style: 'Sunrise views, canyon walks, photography, social bonding',
    pickupCities: ['Phoenix', 'Tucson', 'Flagstaff', 'Las Vegas'],
    overview:
      'A round-trip Grand Canyon social adventure with pickup options from major Arizona and Nevada cities, designed for sunrise views, canyon walks, group photos, and meaningful travel connections.',
    days: [
      {
        title: 'Day 1: City Pickups & Canyon Arrival',
        points: [
          'Pickups from Phoenix, Tucson, Flagstaff, and Las Vegas depending on route.',
          'Travel toward Grand Canyon South Rim.',
          'Arrive near base camp or lodging.',
          'Welcome meetup and group dinner.',
          'Optional sunset viewpoint if timing allows.',
        ],
      },
      {
        title: 'Day 2: Sunrise, South Rim & Viewpoints',
        points: [
          'Early sunrise viewpoint experience.',
          'Explore South Rim viewpoints.',
          'Walk sections of the Rim Trail.',
          'Group lunch and photography breaks.',
          'Evening social gathering.',
        ],
      },
      {
        title: 'Day 3: Hiking, Scenic Stops & Group Time',
        points: [
          'Optional beginner-friendly canyon hike or scenic walk.',
          'Visit Desert View area if route allows.',
          'Group photo session.',
          'Final dinner and campfire-style bonding.',
        ],
      },
      {
        title: 'Day 4: Final Views & Return',
        points: [
          'Breakfast and checkout.',
          'Final viewpoint stop.',
          'Depart Grand Canyon area.',
          'Bus returns travelers to original pickup cities.',
        ],
      },
    ],
  },
};

export default function TripDetails({ trip, onBack }) {
  const data = tripData[trip];

  if (!data) {
    return (
      <section className="pt-28 px-6 min-h-screen">
        <button onClick={onBack} className="px-5 py-3 bg-blue-700 text-white rounded-lg">
          Back
        </button>
        <p className="mt-6">Trip not found.</p>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 px-5 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition"
        >
          ← Back to Destinations
        </button>

        <img
          src={data.image}
          alt={data.park}
          className="w-full h-[420px] object-cover rounded-3xl shadow-xl mb-10"
        />

        <p className="text-blue-700 font-bold mb-3">{data.location}</p>

        <h1 className="text-4xl md:text-6xl font-black mb-5">
          {data.title}
        </h1>

        <p className="text-xl text-slate-600 mb-10">
          {data.overview}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-slate-50 rounded-2xl shadow">
            <h3 className="font-black text-xl mb-2">Duration</h3>
            <p>{data.duration}</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl shadow">
            <h3 className="font-black text-xl mb-2">Price</h3>
            <p>{data.price}</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl shadow">
            <h3 className="font-black text-xl mb-2">Trip Style</h3>
            <p>{data.style}</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Pickup Cities
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {data.pickupCities.map((city) => (
            <div key={city} className="p-4 bg-slate-50 rounded-xl text-center font-bold">
              {city}
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-8">
          Detailed Round-Trip Itinerary
        </h2>

        <div className="space-y-8">
          {data.days.map((day) => (
            <div key={day.title} className="p-7 bg-slate-50 rounded-2xl shadow">
              <h3 className="text-2xl font-black mb-4">{day.title}</h3>

              <ul className="list-disc list-inside text-slate-700 space-y-2">
                {day.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-black mt-14 mb-6">
          What Makes This Trip Special
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl">✓ Round-trip group travel</div>
          <div className="p-4 bg-slate-50 rounded-xl">✓ Pickup from nearby cities</div>
          <div className="p-4 bg-slate-50 rounded-xl">✓ Base camp social experience</div>
          <div className="p-4 bg-slate-50 rounded-xl">✓ Planned hikes and scenic tours</div>
          <div className="p-4 bg-slate-50 rounded-xl">✓ Campfire-style group bonding</div>
          <div className="p-4 bg-slate-50 rounded-xl">✓ Explore together and make new friends</div>
        </div>
      </div>
    </section>
  );
}