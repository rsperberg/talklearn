var _args = arguments[0] || {};

function onItemClick() {
    Ti.API.info("Clicked item in global tab");
}

var preset = [
{
    "id": "103",
    "displayName": "Bethany Blake",
    "category": "Interviewing",
    "email": "Bethany.Blake@talklearn.com",
    "phone": "+1 (850) 555-1212",
    "jobTitle": "Conduct Interviews",
    "description": "Ask people what businesses need to know!" ,
    "city": "Washington",
    "state": "DC",
    "offerPhoto": "http://api.randomuser.me/portraits/women/5.jpg",
    "catPhoto": "/images/interviews.png",
    "earn": "$50/hour",
    "pay": "",
    "earnpay": "  Earn $50/hour  ",
    "status": "Open Opportunity",
    "line2": "Status: Open Opportunity   Washington, DC",
    "tags": "professional ",
    "stars": "/images/5-blue-stars.png",
    "reviews": "12 reviews",
    "template": "jobtemplateblue"
},
  {
    "id": "101",
    "displayName": "Rob Dobson",
    "category": "Culture",
    "email": "rob.dobson@talklearn.com",
    "phone": "+1 (850) 571-2723",
    "jobTitle": "Guide people in your own language",
    "description": "Get paid to explore the capital of the world!",
    "city": "New York",
    "state": "NY",
    "offerPhoto": "http://api.randomuser.me/portraits/men/0.jpg",
    "catPhoto": "/images/guide-talk.png",
    "earn": "$30/hour",
    "pay": "",
    "earnpay": "  Earn $30/hour  ",
    "status": "Open Opportunity",
    "line2": "Status: Open Opportunity   New York, NY",
    "tags": "guide",
    "stars": "/images/5-gold-stars.png",
    "reviews": "15 reviews",
    "template": "jobtemplategold"
  },
  {
    "id": "102",
    "displayName": "Sharon Wright",
    "category": "Tech & Web",
    "email": "Sharon.Wright@talklearn.com",
    "phone": "+1 (850) 571-2724",
    "jobTitle": "Editor, proofreader, writer, artist",
    "description": "I have 5+ years experience in various types of writing and editing, including both the technical and medical fields. I am also currently employed as a full-time editor for a full-service pharmaceutical and healthcare communications agency",
    "city": "Stamford",
    "state": "CT",
    "offerPhoto": "http://api.randomuser.me/portraits/women/3.jpg",
    "catPhoto": "/images/colorkeyboard.png",
    "earn": "",
    "pay": "$45/hour",
    "earnpay": "  Pay $45/hour  ",
    "status": "Open Opportunity",
    "line2": "Status: Open Opportunity   Paris, France",
    "tags": "editor  proofreader  writing  technical  medical",
    "stars": "/images/5-blue-stars.png",
    "reviews": "14 reviews",
    "template": "jobtemplateblue"
  },
  
];

var readyitems = _.map(preset, function (job) {
    return {
        id: {text: job.id},
        displayName: {text: job.displayName},
        category: {text: job.category},
        jobTitle: {text: job.jobTitle},
        description: {text: job.description},
        city: {text: job.city},
        state: {text: job.state},
        offerPhoto: {image: job.offerPhoto},
        catPhoto: {image: job.catPhoto},
        earn: {text: job.earn},
        pay: {text: job.pay},
        status: {text: job.status},
        line2: {text: job.line2},
        earnpay: {text: job.earnpay},
        stars: {image: job.stars},
        reviews: {text:job.reviews}
    }
})

$.listView.sections[0].setItems(readyitems);


