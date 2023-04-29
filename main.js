const APP_TOKEN = 'YEAf7HhwEpQfNrdeSPEwxXv58';

const DATASET_IDENTIFIER = 'uvpi-gqnh';

const mainContainer = document.querySelector('#container');

const LIMIT = 580000; 

let treesDOM = "<div>";

/* ALL TREE SPECIES ARRAY LIST */


let pinOakArray = [];
let redMapleArray = [];
let honeylocustArray = [];
let americanLindenArray = [];
let londonPlanetreeArray = [];
let ginkgosArray = [];
let americanElmArray = [];
let sophoraArray = [];
let calleryPearArray = [];
let littleleafLindenArray = [];
let fastigiataOakArray = []; 
let sweetgumArray = [];
let dawnRedwoodArray = [];
let baldcypressArray = [];
let coffeetreesArray = [];
let northernRedOakArray = [];
let swampWhiteOakArray = [];
let shingleOakArray = []; 
let willowOakArray = [];
let crimeanLindenArray = [];
let silverLindenArray = [];
let riverBirchArray = [];
let hackberryArray = [];
let katsuraTreeArray = [];
let turkishHazelnutArray = [];
let hardyRubberTreeArray = [];
let europeanBeechArray = [];
let kentuckyCoffeetreeArray = [];
let tulipTreeArray = [];
let blackgumArray = [];
let sawtoothOakArray = [];
let whiteOakArray = [];
let scarletOakArray = [];
let burOakArray = [];
let englishOakArray = [];
let redOakArray = [];
let shumardOakArray = [];
let blackOakArray = [];
let baldCypressArray = [];
let chineseElmArray = [];
let japaneseZelkovaArray =[];
let redHorsechestnut = [];
let europeanHornbeamArray = [];
let americanHornbeamArray = [];
let japaneseHornbeamArray = [];
let kentuckyYellowwoodArray = [];
let goldenRaintreeArray = [];
let amurMaackiaArray = [];
let persianIronwoodArray = [];
let hedgeMapleArray = [];
let amurMapleArray = [];
let paperbarkMapleArray = [];
let tartarMapleArray = [];
let shantungMapleArray = [];
let serviceberryArray = [];
let redbudArray = [];
let chineseFringetreeArray = [];
let kousaDogwoodArray = [];
let cornelianCherryArray = [];
let cockspurHawthornArray = [];
let crabappleArray = [];
let purpleLeafPlumArray = [];
let japaneseTreeLilacArray = [];
let chineseTreeLilacArray = [];



// let yellowBuckeyeArray = [];
// let kwanzanCherryArray = [];
// let snowGooseCherryArray = [];
// let canadaRedCherryArray = [];
// let yoshinoCherryArray = [];
// let okameCherryArray = [];
// let sargentCherryArray = [];
// let persianParrotiaArray = [];
// let koreanStewartiaArray = [];
// let elmHybridsArray = [];
// let nuttallOakArray = [];
// let chinkapinOakArray = [];
// let chestnutOakArray = [];
// let daimioOakArray = [];
// let italianOakArray = [];

/*                                      */


let nonNativeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766" ]

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649"]

let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649" ]


// const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`;


// const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%20%60tree_id%60%2C%20%60spc_latin%60%2C%20%60spc_common%60%0AWHERE%0A%20%20(%60tree_id%60%20%3D%3D%20%60tree_id%60)%0A%20%20AND%20((%60spc_latin%60%20%3D%3D%20%60spc_latin%60)%20AND%20(%60spc_common%60%20%3D%3D%20%60spc_common%60))`;

const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$limit=${LIMIT}`;

// const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}`;

console.log(`Fetching url - ${url}`);

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    
    console.log(json);

    treesDOM += `<div>`

    json.forEach(function (tree) { 
        if (tree.spc_common == "pin oak") {
            treesDOM += `<div class="pin-oak"> (${tree.tree_id}), (${tree.spc_common}), (${tree.spc_latin})
            </div>`;
        }

        


    });

    treesDOM += `</div>`
    treesDOM += `</div>`
    mainContainer.innerHTML = treesDOM;

  });
