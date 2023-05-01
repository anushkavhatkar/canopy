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

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32" ]

let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32"]






/* ------------------------------------  API FETCH  ------------------------------------ */

const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$limit=${LIMIT}`;


console.log(`Fetching url - ${url}`);


fetch(url)
  .then((response) => response.json())
  .then((json) => {
    
    // console.log(json);

    

    json.forEach(function (tree) { 
        if (tree.spc_common == "pin oak") {
            pinOakArray.push(tree);
            tree.spc_common = "pin-oak";
        }

        if (tree.spc_common == "Callery pear") {
            calleryPearArray.push(tree);
            tree.spc_common = "callery-pear";
        }

        if (tree.spc_common == "red maple") {
            redMapleArray.push(tree);
            tree.spc_common = "red-maple";
        }

        if (tree.spc_common == "honeylocust") {
            honeylocustArray.push(tree);
        }

        if (tree.spc_common == "American linden") {
            americanLindenArray.push(tree);
            tree.spc_common = "american-linden";
        }

        if (tree.spc_common == "London planetree") {
            londonPlanetreeArray.push(tree);
            tree.spc_common = "london-planetree";
        }

        if (tree.spc_common == "ginkgo") {
            ginkgoArray.push(tree);
        }

        // if (tree.spc_common == "horse chestnut") {
        //     redHorsechestnutArray.push(tree);
        // }

        if (tree.spc_common == "river birch") {
            riverBirchArray.push(tree);
            tree.spc_common = "river-birch";
        }
        
        if (tree.spc_common == "Turkish hazelnut") {
            turkishHazelnutArray.push(tree);
            tree.spc_common = "turkish-hazelnut";
        }

        if (tree.spc_common == "hardy rubber tree") {
            hardyRubberTreeArray.push(tree);
            tree.spc_common = "hardy-rubber-tree";
        }

        if (tree.spc_common == "European beech") {
            europeanBeechArray.push(tree);
            tree.spc_common = "european-beech";
        }

        if (tree.spc_common == "Kentucky coffeetree") {
            kentuckyCoffeetreeArray.push(tree);
            tree.spc_common = "kentucky-coffeetree";
        }

        if (tree.spc_common == "sweetgum") {
            sweetgumArray.push(tree);
        }

        if (tree.spc_common == "tulip-poplar") {
            tulipTreeArray.push(tree);
        }

        if (tree.spc_common == "blackgum") {
            blackgumArray.push(tree);
        }

        if (tree.spc_common == "sawtooth oak") {
            sawtoothOakArray.push(tree);
            tree.spc_common = "sawtooth-oak";
        }

        if (tree.spc_common == "swamp white oak") {
            swampWhiteOakArray.push(tree);
            tree.spc_common = "swamp-white-oak";
        }
        
        if (tree.spc_common == "scarlet") {
            scarletOakArray.push(tree);
        }

        if (tree.spc_common == "shingle oak") {
            shingleOakArray.push(tree);
            tree.spc_common = "shingle-oak";
        }

        if (tree.spc_common == "bur oak") {
            burOakArray.push(tree);
            tree.spc_common = "bur-oak";
        }

        if (tree.spc_common == "willow oak") {
            willowOakArray.push(tree);
            tree.spc_common = "willow-oak";
        }

        if (tree.spc_common == "schumard's oak") {
            schumardOakArray.push(tree);
            tree.spc_common = "schumard-oak";
        }

        if (tree.spc_common == "black oak") {
            blackOakArray.push(tree);
            tree.spc_common = "black-oak";
        }
        
        if (tree.spc_common == "sophora") {
            sophoraArray.push(tree);
        }
        
        if (tree.spc_common == "bald cypress") {
            baldCypressArray.push(tree);
            tree.spc_common = "bald-cypress";
        }

        if (tree.spc_common == "littleleaf linden") {
            littleleafLindenArray.push(tree);
            tree.spc_common = "littleleaf-linden";
        }

        if (tree.spc_common == "silver linden") {
            silverLindenArray.push(tree);
            tree.spc_common = "silver-linden";
        }

        if (tree.spc_common == "american elm") {
            americanElmArray.push(tree);
            tree.spc_common = "american-elm";
        }

        if (tree.spc_common == "chinese elm") {
            chineseElmArray.push(tree);
            tree.spc_common = "chinese-elm";
        }

        if (tree.spc_common == "Japanese zelkova") {
            japaneseZelkovaArray.push(tree);
            tree.spc_common = "japanese-zelkova";
        }

        if (tree.spc_common == "red horse chestnut") {
            redHorsechestnutArray.push(tree);
            tree.spc_common = "red-horse-chestnut";
        }

        if (tree.spc_common == "european hornbeam") {
            europeanHornbeamArray.push(tree);
            tree.spc_common = "european-hornbeam";
        }

        if (tree.spc_common == "american hornbeam") {
            americanElmArray.push(tree);
            tree.spc_common = "american-hornbeam";
        }

        if (tree.spc_common == "japanese hornbeam") {
            japaneseHornbeamArray.push(tree);
            tree.spc_common = "japanese-hornbeam";
        }

        if (tree.spc_common == "Kentucky yellowwood") {
            kentuckyCoffeetreeArray.push(tree);
            tree.spc_common = "kentucky-yellowwood";
        }

        if (tree.spc_common == "golden raintree") {
            goldenRaintreeArray.push(tree);
            tree.spc_common = "golden-raintree";
        }

        if (tree.spc_common == "Amur maackia") {
            amurMaackiaArray.push(tree);
            tree.spc_common = "amur-maackia";
        }
        
        if (tree.spc_common == "Persian ironwood") {
            persianIronwoodArray.push(tree);
            tree.spc_common = "persian-ironwood";
        }

        if (tree.spc_common == "hedge maple") {
            hedgeMapleArray.push(tree);
            tree.spc_common = "hedge-maple";
        }

        if (tree.spc_common == "amur maple") {
            amurMapleArray.push(tree);
            tree.spc_common = "amur-maple";
        }

        if (tree.spc_common == "paperbark maple") {
            paperbarkMapleArray.push(tree);
            tree.spc_common = "paperbark-maple";
        }

        if (tree.spc_common == "tartar maple") {
            tartarMapleArray.push(tree);
            tree.spc_common = "tartar-maple";
        }

        if (tree.spc_common == "shantung maple") {
            shantungMapleArray.push(tree);
            tree.spc_common = "shantung-maple";
        }

        if (tree.spc_common == "serviceberry") {
            serviceberryArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            redbudArray.push(tree);
            tree.spc_common = "oklahoma-redbud";
        }

        if (tree.spc_common == "Chinese fringetree") {
            chineseFringetreeArray.push(tree);
            tree.spc_common = "chinese-fringetree";
        }

        if (tree.spc_common == "kousa dogwood") {
            kousaDogwoodArray.push(tree);
            tree.spc_common = "kousa-dogwood";
        }

        if (tree.spc_common == "cornelian cherry") {
            cornelianCherryArray.push(tree);
            tree.spc_common = "cornelian-cherry";
        }

        if (tree.spc_common == "cockspur hawthorn") {
            cockspurHawthornArray.push(tree);
            tree.spc_common = "cockspur-hawthorn";
        }

        if (tree.spc_common == "crab apple") {
            crabappleArray.push(tree);
            tree.spc_common = "crab-apple";
        }


        if (tree.spc_common == "purple-leaf plum") {
            purpleLeafPlumArray.push(tree);
            tree.spc_common = "purple-leaf-plum";
        }

        if (tree.spc_common == "Japanese tree lilac") {
            japaneseTreeLilacArray.push(tree);
            tree.spc_common = "japanese-tree-lilac";
        }

        if (tree.spc_common == "Chinese tree lilac") {
            chineseTreeLilacArray.push(tree);
            tree.spc_common = "chinese-tree-lilac";
        }

        if (tree.spc_common == "Oklahoma redbud") {
            chineseTreeLilacArray.push(tree);
            tree.spc_common = "oklahoma-redbud";
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



