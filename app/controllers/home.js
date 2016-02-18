/**
 * Instantiate the local variables for this controller
 */
var _args = arguments[0] || {}, // Any passed in arguments will fall into this property
    jobs = null,  // Array placeholder for all jobs
    indexes = [];  // Array placeholder for the ListView Index (used by iOS only);



function goGet() {
    Ti.API.info("Clicked Start Talking button");
}

function goMake() {
    Ti.API.info("Clicked Learn Now button");
}

/** 
 * Function to inialize the View, gathers data from the flat file and sets up the ListView
 */
function init(){
    
    /**
     * Access the FileSystem Object to read in the information from a flat file (lib/userData/data.js)
     * DOCS: http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Filesystem
     */
    var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "userData/data.json"); 
    
    /**
     * Populate the users variable from the file this call returns an array
     */
    jobs = JSON.parse(file.read().text).jobs;
    
    /**
     * Sorts the `users` array by the lastName property of the user (leverages UnderscoreJS _.sortBy function)
     */
/*
    jobs = _.sortBy(jobs, function(job){
        return job.id;
    });
*/



/**
 *  Convert an array of data from a JSON file into a format that can be added to the ListView
 * 
 *  @param {Object} Raw data elements from the JSON file.
 */


//var preprocessForListView = function(rawData) {

    /**
     * Using the rawData collection, we map data properties of the users in this array to an array that maps an array to properly
     * display the data in the ListView based on the templates defined in home.xml (leverages the _.map Function of UnderscoreJS)
     */
//    return _.map(rawData, function(item) {

        
        /**
         * Create the new job object which is added to the Array that is returned by the _.map function. 
         */
//        return {
//            template:  "jobtemplate",
//            properties: {
//                job: item
//            },
//            jobTitle: {text: item.jobTitle},
//            category: {text: item.category},
//            offerPhoto: {image: item.offerPhoto},
//            status: {text: item.status} 
//        };
//    }); 
//};


/**
 * This function handles the click events for the rows in the ListView.
 * We want to capture the job property associated with the row, and pass
 * it into the profile View
 * 
 * @param {Object} Event data passed to the function
 */
function onItemClick(e){
    
    /**
     * Get the Item that was clicked
     */
    var item = $.listView.items[e.itemIndex];
    
    /**
     * Open the profile view, and pass in the user data for this contact
     */
    Alloy.Globals.Navigator.open("profile", item.properties.job);
}


}  // end of init()
