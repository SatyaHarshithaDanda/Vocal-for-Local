/* .js files add interaction to your website */
//Move these variables to the top
var factList = [
  "According to UN, over the past 30 years, the number of Indian artisans has decreased by 30%.", 
  "National Skill Development Corporation had estimated that approximately 7.3 million people depend on handicraft and allied activities for livelihood.",  
  "Handloom makes up nearly 15% of cloth production in the country and 95% of the hand woven fabrics worldwide come from India."
];


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

var displayPledge = document.getElementById("pledgeReturned");
var pledgeBtn = document.getElementById("pledgeBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (pledgeBtn) {
  pledgeBtn.addEventListener("click", generatePledge);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the pledge.
Be sure to update function names.
*/

function generatePledge() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var handicraft = document.getElementById("handicraft").value;
  var handloom = document.getElementById("handloom").value;

  displayPledge.innerHTML = "Salutations, my name is " + name + " and I live in " + location + ". I am calling to ask you to support localites and their livelihood. As a responsible citizen, I will do my best to restore Cultural Heritage of India and shop for a cause. I here by help the craftsmen of " + handicraft + " and handloom weavers of " + handloom + ". I appreciate art, encourage sustainable employment and use eco-friendly products as far as possible. Jai Hindh!";
}

var factString = document.getElementById("handloomFact")
var readMore = document.getElementById("readMore")
if (readMore) {
  readMore.addEventListener("click", produceFact);
}
function produceFact(){
  factString.innerHTML = "India has a long tradition of excellence in making high quality handloom products with extraordinary skills and craftsmanship, which are unparalleled in the world. The intricate workmanship of the handlooms provides this segment a unique identity of its own. The handloom production meets the twin objectives of green production and employment creation especially in the rural India. The “India Handloom” brand would be evolved based on high quality defect free, socially and environmentally compliant product for catering to the needs of the high-end consumers looking for niche handmade products. India is home to more than 136 unique weaves, mostly in the form of sarees. Traditionally woven in cotton and silk, sarees are the backbone of Indian Handloom sector that is rapidly being replaced by machines and synthetic fibres.The current generation of skilled weavers could be the last ones engaged in the handloom sector with the younger generation having moved on to newer industries.The techniques of cultivating organic cotton, preparatory processes for weaving, the intricacy of weaving styles, use of natural dyes in dyeing fabric and printing techniques are all inspired by culture and region. This art form needs to be preserved so that the traditional knowledge is not lost. Traditionally, these sustainable methods have created their own ecosystems for empowerment of local communities, especially women.Global Consumption of synthetic fibre clothing is a huge concern today, impacting not only the environment but also people's health.A land of variety in every sense—India has so much to offer, it might just take you by surprise. From the array of delicacies to the interesting customs, traditions and festivals we celebrate, every state has its own cultural identity. And an essential part of that is the attire of the people. "
}