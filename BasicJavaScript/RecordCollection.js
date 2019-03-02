// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (collection[id]) {
        switch (prop) {
            case "album":
            case "artist":
                if (value != "") {
                    collection[id][prop] = value;
                    console.log(prop + " is set to " + collection[id][prop]);
                    console.log(collection[id]);
                } else {
                    delete collection[id][prop];
                    console.log(prop + " is deleted from album.");
                    console.log(collection[id]);
                }
                break;

            case "tracks":
                if (value != "") {
                    if (collection[id].hasOwnProperty(prop)) {
                        console.log("Album " + id + " has tracks and should be updated.");
                        collection[id][prop].push(value);
                        console.log(collection[id]);
                    } else {
                        console.log("Album " + id + " doesn't have tracks and it needs to be created.");
                        collection[id][prop] = [];
                        collection[id][prop].push(value);
                        console.log(collection[id]);
                    }
                } else {
                    console.log("Album " + id + " has tracks but they should be deleted.");
                    delete collection[id][prop];
                    console.log(collection[id]);
                }


                break;
            default:
                console.log("Unknow property!");
                break;
        }
    } else {
        console.log("Album not in collection!");
    }
    return collection;
}

// Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");

/* 
updateRecords(2468, "artist", "ABBA");
updateRecords(2468, "artist", "");
updateRecords(2468, "album", "ABBA");
updateRecords(2468, "album", "");
updateRecords(5439, "tracks", "");
updateRecords(5439, "tracks", "Track #1");
updateRecords(5439, "album", "ABBA");
updateRecords(5439, "tracks", "ABBA");
updateRecords(1245, "artist", "Riptide");
updateRecords(1245, "album", "Riptide");
updateRecords(1245, "tracks", "Riptide");
updateRecords(2548, "artist", "Riptide");
updateRecords(2548, "album", "Riptide");
updateRecords(2548, "tracks", "Riptide");
updateRecords(1, "artist", "Garbage");
 */

updateRecords(5439, "artist", "ABBA");                  // Artist shoudl be ABBA
updateRecords(5439, "tracks", "Take a Chance on Me");   // Tracks should have "Take a Chance on Me"
updateRecords(2548, "artist", "");                      // Artist should not be set
updateRecords(1245, "tracks", "Addicted to Love");      // Tracks should have "Addicted to Love" as the last element.
updateRecords(2468, "tracks", "Free");                  // Tracks should have "1999" as the first element.
updateRecords(2548, "tracks", "");                      // Tracks should not be set
updateRecords(1245, "album", "Riptide");                // Album should be "Riptide"