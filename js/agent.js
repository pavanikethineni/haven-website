const agents = {

  sarah: {
    name: "Sarah Mitchell",
    role: "Haven Premier",
    phone: "(212) 555-0123",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    homes: "287",
    experience: "15",
    listings: "12",
    bio: "With over 15 years of experience in luxury real estate, Sarah has closed over $500 million in transactions. She specializes in high-end properties in Manhattan and the Hamptons."
  },

  daniel: {
    name: "Daniel Brooks",
    role: "Haven West Coast",
    phone: "(310) 555-9876",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    homes: "198",
    experience: "10",
    listings: "8",
    bio: "Daniel focuses on modern homes and investment properties in Los Angeles. Known for negotiation skills and market insight."
  }

};

const params = new URLSearchParams(window.location.search);
const agentKey = params.get("agent");

if (agents[agentKey]) {

  const agent = agents[agentKey];

  document.getElementById("agentName").innerText = agent.name;
  document.getElementById("agentRole").innerText = agent.role;
  document.getElementById("agentPhone").innerText = agent.phone;
  document.getElementById("agentImage").src = agent.image;

  document.getElementById("homesSold").innerText = agent.homes;
  document.getElementById("experience").innerText = agent.experience;
  document.getElementById("activeListings").innerText = agent.listings;

  document.getElementById("aboutName").innerText = agent.name;
  document.getElementById("agentBio").innerText = agent.bio;

}
