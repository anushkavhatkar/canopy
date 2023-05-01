const APP_TOKEN = 'YEAf7HhwEpQfNrdeSPEwxXv58';

const DATASET_IDENTIFIER = 'uvpi-gqnh';

let mainContainer = document.querySelector('#container');

const LIMIT = 580000; 

let treesDOM = " ";





/* ------------------------------------ ALL TREE SPECIES ARRAYS ------------------------------------ */

let allArray = [];
let allNativeArray = [];
let allNonNativeArray = []; 

let pinOakArray = [];
let redMapleArray = [];
let honeylocustArray = [];
let americanLindenArray = [];
let londonPlanetreeArray = [];
let ginkgoArray = [];
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
let schumardOakArray = [];
let blackOakArray = [];
let baldCypressArray = [];
let chineseElmArray = [];
let japaneseZelkovaArray =[];
let redHorsechestnutArray = [];
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
let oklahomaRedbudArray = [];




/* ------------------------------------  TREE COLOR ARRAYS  ------------------------------------ */


let nonNativeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766" ]

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649"]

let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649" ]






/* ------------------------------------  API FETCH  ------------------------------------ */

const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$limit=${LIMIT}`;


console.log(`Fetching url - ${url}`);


fetch(url)
  .then((response) => response.json())
  .then((json) => {
    
    console.log(json);

    

    json.forEach(function (tree) { 
        if (tree.spc_common == "pin oak") {
            pinOakArray.push(tree);
        }

        if (tree.spc_common == "red maple") {
            redMapleArray.push(tree);
        }

        if (tree.spc_common == "honeylocust") {
            
        }

        if (tree.spc_common == "American linden") {
    
            ;
        }

        if (tree.spc_common == "London planetree") {
            
        }

        if (tree.spc_common == "ginkgo") {
            
        }


    });


    treesDOM += `<div class="tree-box">`;

    
    
    for (i = 0; i < Math.floor(pinOakArray.length/100); i++) {
    treesDOM += `<div class="box"></div>`
    };



    treesDOM += `</div>`


    mainContainer.innerHTML = treesDOM;

    allArray.push(pinOakArray, redMapleArray);
    
    console.log(pinOakArray.length);
    console.log(pinOakArray);
    console.log(redMapleArray.length);
    console.log(redMapleArray);

    console.log(allArray.length);
    console.log(allArray);

    console.log(treesDOM);
    
  });



