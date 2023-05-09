// #region -------------------------------- ROOT VARIABLES --------------------------------



const APP_TOKEN = 'YEAf7HhwEpQfNrdeSPEwxXv58';

const DATASET_IDENTIFIER = 'uvpi-gqnh';

let mainContainer = document.querySelector('#container');

const LIMIT = 580000; 

let treesDOM = " ";

let nativeTreesDOM = " "; 

let nonNativeTreesDOM = " ";

let forestDOM = "";

let nativeFilterBtn = document.querySelector('#native-filter');

let nonNativeFilterBtn = document.querySelector('#non-native-filter');

let percentageFilterBtn = document.querySelector('#percentage-filter');

let aTreeBtn = document.querySelector('#tree_btn');

let forestBtn = document.querySelector("#forest_btn");

let keyText = document.querySelector('#key-text');

let keyFlex = document.querySelector(".key-flex");

let internalImagePath = "../canopy/assets/";

let aboutBtn = document.querySelector('#about');

let aboutDOM = "";

console.log(aboutBtn);

// #endregion


// #region --------------------------------- ALL TREE SPECIES ARRAYS ------------------------------------

let allArray = [];
let allNativeArray = [];
let allNonNativeArray = []; 

let pinOakArray = [];
let redMapleArray = [];
let norwayMapleArray = [];
let honeylocustArray = [];
let americanLindenArray = [];
let londonPlanetreeArray = [];
let ginkgoArray = [];

let sophoraArray = [];
let calleryPearArray = [];
let littleleafLindenArray = [];
let fastigiataOakArray = []; 
let sweetgumArray = [];

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
let sycamoreMapleArray = [];

//
let europeanAlderArray = [];
let ashArray = [];
let greenAshArray = [];
let whiteAshArray = [];
let blackLocustArray = [];
let catalpaArray = [];
let atlanticWhiteCedar = [];
let atlasCedarArray = [];
let himalayanCedarArray = [];
let chokecherryArray = [];
let corktreeArray = [];
let easternCottonwood = [];
let dawnRedwoodArray = [];
let douglasFirArray = [];
let easternRedcedarArray = [];
let siberianElmArray = [];
let chineseElmArray = [];
let americanElmArray = [];
let empressTreeArray = [];
let easternHemlockArray = [];
let hickoryArray = [];
let hollyArray = [];
let japaneseSnowbellArray = [];
let katsuraTreeArray = [];
let americanLarchArray = [];
let magnoliaArray = [];
let southernMagnoliaArray = [];
let cucumberMagnoliaArray = [];
let mulberryArray = [];
let osageOrangeArray = [];
let pagodaDogwoodArray = [];
let whitePineArray = [];
let redPineArray = [];
let scotsPineArray = [];
let blackPineArray = [];
let silverbellArray = [];
let spruceArray = [];
let norwaySpruceArray = [];
let blueSpruceArray = [];
let heavenArray = [];
let blackWalnutArray = [];

// #endregion


// #region --------------------------------  TREE COLOR ARRAYS  ------------------------------------


let nonNativeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#CFF16F"]

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32" ]

let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32", "#CFF16F"]

// #endregion




/* ------------------------------------  API FETCH  ------------------------------------ */

// #region URL CONSTRUCT

const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$limit=${LIMIT}`;


console.log(`Fetching url - ${url}`);
// #endregion
keyText.innerHTML = `Visualizing . . .  New York City trees by`;

// #region COLLAPSE ALL

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    
    // console.log(json);

    

    json.forEach(function (tree) { 

        delete tree.tree_id;
        delete tree.block_id;
        delete tree.created_at;
        delete tree.tree_dbh;
        delete tree.stump_diam;
        delete tree.curb_loc;
        delete tree.status;
        delete tree.health;
        delete tree.steward;
        delete tree.guards;
        delete tree.sidewalk;
        delete tree.user_type;
        delete tree.problems;
        delete tree.created_at;
        delete tree.root_stone;
        delete tree.root_grate;
        delete tree.root_other;
        delete tree.trunk_wire;
        delete tree.trnk_light;
        delete tree.trnk_other;
        delete tree.brch_light;
        delete tree.brch_shoe;
        delete tree.brch_other;
        delete tree.address;
        delete tree.postcode;
        delete tree.cb_num;
        delete tree.borocode;
        delete tree.cncldist;
        delete tree.st_assem;
        delete tree.st_senate;
        delete tree.nta;
        delete tree.boro_ct;
        delete tree.created_at;
        delete tree.state;
        delete tree.latitude;
        delete tree.longitude;
        delete tree.x_sp;
        delete tree.y_sp;
        delete tree.council_district;
        delete tree.census_tract;
        delete tree.bin;
        delete tree.bbl;
        delete tree.zipcode;
        delete tree.nta_name;

        if (tree.spc_common == "pin oak") {
            tree.spc_common = "pin-oak";
            tree.spc_common_name = "Pin Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            
            
            pinOakArray.push(tree);
        }

        if (tree.spc_common == "Callery pear") {
            tree.spc_common = "callery-pear";
            tree.spc_common_name = "Callery Pear";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            calleryPearArray.push(tree);
        }

        if (tree.spc_common == "red maple") {
            tree.spc_common = "red-maple";
            tree.spc_common_name = "Red Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            redMapleArray.push(tree);
        }

        if (tree.spc_common == "Norway maple") {
            tree.spc_common = "norway-maple";
            tree.spc_common_name = "Norway Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            norwayMapleArray.push(tree);
        }

        if (tree.spc_common == "honeylocust") {
            tree.spc_common_name = "Honeylocust";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            honeylocustArray.push(tree);
        }

        if (tree.spc_common == "American linden") {
            tree.spc_common = "american-linden";
            tree.spc_common_name = "American Linden";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            americanLindenArray.push(tree);
        }

        if (tree.spc_common == "London planetree") {
            tree.spc_common = "london-planetree";
            tree.spc_common_name = "London Planetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            londonPlanetreeArray.push(tree);
        }

        if (tree.spc_common == "ginkgo") {
            tree.spc_common_name = "Ginkgo";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            ginkgoArray.push(tree);
        }

        // if (tree.spc_common == "horse chestnut") {
        //     redHorsechestnutArray.push(tree);
        // }

        if (tree.spc_common == "river birch") {
            tree.spc_common = "river-birch";
            tree.spc_common_name = "River Birch";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            riverBirchArray.push(tree);
        }
        
        if (tree.spc_common == "Turkish hazelnut") {
            tree.spc_common = "turkish-hazelnut";
            tree.spc_common_name = "Turkish Hazelnut";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            turkishHazelnutArray.push(tree);
        }

        if (tree.spc_common == "hardy rubber tree") {
            tree.spc_common = "hardy-rubber-tree";
            tree.spc_common_name = "Hardy Rubber Tree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            hardyRubberTreeArray.push(tree);
        }

        if (tree.spc_common == "European beech") {
            tree.spc_common = "european-beech";
            tree.spc_common_name = "European Beech";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            europeanBeechArray.push(tree);
        }

        if (tree.spc_common == "Kentucky coffeetree") {
            tree.spc_common = "kentucky-coffeetree";
            tree.spc_common_name = "Kentucky Coffeetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "sweetgum") {
            tree.spc_common_name = "Sweetgum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            sweetgumArray.push(tree);
        }

        if (tree.spc_common == "tulip-poplar") {
            tree.spc_common_name = "Tulip Poplar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tulipTreeArray.push(tree);
        }

        if (tree.spc_common == "blackgum") {
            tree.spc_common_name = "Blackgum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            blackgumArray.push(tree);
        }

        if (tree.spc_common == "sawtooth oak") {
            tree.spc_common = "sawtooth-oak";
            tree.spc_common_name = "Sawtooth Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            sawtoothOakArray.push(tree);
        }

        if (tree.spc_common == "swamp white oak") {
            tree.spc_common = "swamp-white-oak";
            tree.spc_common_name = "Swamp White Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            swampWhiteOakArray.push(tree);
        }
        
        if (tree.spc_common == "scarlet") {
            tree.spc_common_name = "Scarlet Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            scarletOakArray.push(tree);
        }

        if (tree.spc_common == "shingle oak") {
            tree.spc_common = "shingle-oak";
            tree.spc_common_name = "Shingle Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            shingleOakArray.push(tree);
        }

        if (tree.spc_common == "bur oak") {
            tree.spc_common = "bur-oak";
            tree.spc_common_name = "Bur Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            burOakArray.push(tree);
        }

        if (tree.spc_common == "willow oak") {
            tree.spc_common = "willow-oak";
            tree.spc_common_name = "Willow Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            willowOakArray.push(tree);
        }

        if (tree.spc_common == "schumard's oak") {
            tree.spc_common = "schumard-oak";
            tree.spc_common_name = "Schumard's Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            schumardOakArray.push(tree);
        }

        if (tree.spc_common == "black oak") {
            tree.spc_common = "black-oak";
            tree.spc_common_name = "Black Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            blackOakArray.push(tree);
        }
        
        if (tree.spc_common == "sophora") {
            tree.spc_common_name = "Sophora Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            sophoraArray.push(tree);
        }
        
        if (tree.spc_common == "bald cypress") {
            tree.spc_common = "bald-cypress";
            tree.spc_common_name = "Bald Cypress";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            baldCypressArray.push(tree);
        }

        if (tree.spc_common == "littleleaf linden") {
            tree.spc_common = "littleleaf-linden";
            tree.spc_common_name = "Littleleaf Linden";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            littleleafLindenArray.push(tree);
        }

        if (tree.spc_common == "silver linden") {
            tree.spc_common = "silver-linden";
            tree.spc_common_name = "Silver Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            silverLindenArray.push(tree);
        }

        if (tree.spc_common == "american elm") {
            tree.spc_common = "American Elm";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "chinese elm") {
            tree.spc_common = "chinese-elm";
            tree.spc_common_name = "Chinese Elm";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            chineseElmArray.push(tree);
        }

        if (tree.spc_common == "Japanese zelkova") {
            tree.spc_common = "japanese-zelkova";
            tree.spc_common_name = "Japanese Zelkova";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            japaneseZelkovaArray.push(tree);
        }

        if (tree.spc_common == "red horse chestnut") {
            tree.spc_common = "red-horse-chestnut";
            tree.spc_common_name = "Red Horse Chestnut";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            redHorsechestnutArray.push(tree);

        }

        if (tree.spc_common == "european hornbeam") {
            tree.spc_common = "european-hornbeam";
            tree.spc_common_name = "European Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            europeanHornbeamArray.push(tree);
        }

        if (tree.spc_common == "american hornbeam") {
            tree.spc_common = "american-hornbeam";
            tree.spc_common_name = "American Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "japanese hornbeam") {
            tree.spc_common = "japanese-hornbeam";
            tree.spc_common_name = "Japanese Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            japaneseHornbeamArray.push(tree);
        }

        if (tree.spc_common == "Kentucky yellowwood") {
            tree.spc_common = "kentucky-yellowwood";
            tree.spc_common_name = "Kentucky Yellowwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "golden raintree") {
            tree.spc_common = "golden-raintree";
            tree.spc_common_name = "Golden Raintree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            goldenRaintreeArray.push(tree);
        }

        if (tree.spc_common == "Amur maackia") {
            tree.spc_common = "amur-maackia";
            tree.spc_common_name = "Amur Maackia";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            amurMaackiaArray.push(tree);
        }
        
        if (tree.spc_common == "Persian ironwood") {
            tree.spc_common = "persian-ironwood";
            tree.spc_common_name = "Persian Ironwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            persianIronwoodArray.push(tree);
        }

        if (tree.spc_common == "hedge maple") {
            tree.spc_common = "hedge-maple";
            tree.spc_common_name = "Hedge Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            hedgeMapleArray.push(tree);
        }

        if (tree.spc_common == "amur maple") {
            tree.spc_common = "amur-maple";
            tree.spc_common_name = "Amur Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            amurMapleArray.push(tree);
        }

        if (tree.spc_common == "paperbark maple") {
            tree.spc_common = "paperbark-maple";
            tree.spc_common_name = "Paperbark Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            paperbarkMapleArray.push(tree);
        }

        if (tree.spc_common == "tartar maple") {
            tree.spc_common = "tartar-maple";
            tree.spc_common_name = "Tartar Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tartarMapleArray.push(tree);
        }

        if (tree.spc_common == "shantung maple") {
            tree.spc_common = "shantung-maple";
            tree.spc_common_name = "Shantung Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            shantungMapleArray.push(tree);
        }

        if (tree.spc_common == "serviceberry") {
            tree.spc_common_name = "Serviceberry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            serviceberryArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            redbudArray.push(tree);
        }

        if (tree.spc_common == "Chinese fringetree") {
            tree.spc_common = "chinese-fringetree";
            tree.spc_common_name = "Chinese Fringetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            chineseFringetreeArray.push(tree);
        }

        if (tree.spc_common == "kousa dogwood") {
            tree.spc_common = "kousa-dogwood";
            tree.spc_common_name = "Kousa Dogwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            kousaDogwoodArray.push(tree);
        }

        if (tree.spc_common == "cornelian cherry") {
            tree.spc_common = "cornelian-cherry";
            tree.spc_common_name = "Cornelian Cherry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            cornelianCherryArray.push(tree);
        }

        if (tree.spc_common == "cockspur hawthorn") {
            tree.spc_common = "cockspur-hawthorn";
            tree.spc_common_name = "Cockspur Hawthorn";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            cockspurHawthornArray.push(tree);
        }

        if (tree.spc_common == "crab apple") {
            tree.spc_common = "crab-apple";
            tree.spc_common_name = "Crab Apple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            crabappleArray.push(tree);
        }


        if (tree.spc_common == "purple-leaf plum") {
            tree.spc_common = "purple-leaf-plum";
            tree.spc_common_name = "Purple Leaf Plum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            purpleLeafPlumArray.push(tree);
        }

        if (tree.spc_common == "Japanese tree lilac") {
            tree.spc_common = "japanese-tree-lilac";
            tree.spc_common_name = "Japanese Tree Lilac";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            japaneseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Chinese tree lilac") {
            tree.spc_common = "chinese-tree-lilac";
            tree.spc_common_name = "Chinese Tree Lilac";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            chineseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            chineseTreeLilacArray.push(tree);
        }


        if (tree.spc_common == "sycamore maple") {
            tree.spc_common = "sycamore-maple";
            tree.spc_common_name = "Sycamore Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            sycamoreMapleArray.push(tree);
        }

    });


   

    // #region --------------------- ARRAY CONSTRUCTION - ALL, NATIVE, NON NATIVE --------------------- 
   

    allArray.push(pinOakArray, redMapleArray, honeylocustArray, americanLindenArray, londonPlanetreeArray, ginkgoArray, americanElmArray, sophoraArray, calleryPearArray, littleleafLindenArray, fastigiataOakArray, sweetgumArray, dawnRedwoodArray, baldcypressArray, coffeetreesArray, northernRedOakArray, swampWhiteOakArray, shingleOakArray, willowOakArray, crimeanLindenArray, silverLindenArray, riverBirchArray, hackberryArray, katsuraTreeArray, turkishHazelnutArray, hardyRubberTreeArray, europeanBeechArray, kentuckyCoffeetreeArray, tulipTreeArray, blackgumArray, sawtoothOakArray, whiteOakArray, scarletOakArray, burOakArray, englishOakArray, redOakArray, schumardOakArray, blackOakArray, baldCypressArray, chineseElmArray, japaneseZelkovaArray, redHorsechestnutArray, europeanHornbeamArray, americanHornbeamArray, japaneseHornbeamArray, kentuckyYellowwoodArray, goldenRaintreeArray, amurMaackiaArray, persianIronwoodArray, hedgeMapleArray,amurMapleArray, paperbarkMapleArray, tartarMapleArray, shantungMapleArray, serviceberryArray, redbudArray, chineseFringetreeArray, kousaDogwoodArray, cornelianCherryArray, cockspurHawthornArray, crabappleArray, purpleLeafPlumArray, japaneseTreeLilacArray, chineseTreeLilacArray, norwayMapleArray, sycamoreMapleArray);

    allNativeArray.push(redMapleArray, riverBirchArray, honeylocustArray, kentuckyCoffeetreeArray, sweetgumArray, tulipTreeArray, blackgumArray, sawtoothOakArray, swampWhiteOakArray, scarletOakArray, shingleOakArray, burOakArray, willowOakArray, americanElmArray, littleleafLindenArray, silverLindenArray, americanElmArray, americanHornbeamArray, blackOakArray, schumardOakArray, baldCypressArray);

    allNonNativeArray.push(turkishHazelnutArray, hardyRubberTreeArray, europeanBeechArray, turkishHazelnutArray, ginkgoArray, londonPlanetreeArray, sophoraArray, chineseElmArray, japaneseZelkovaArray, redHorsechestnutArray, europeanHornbeamArray, japaneseHornbeamArray, kentuckyYellowwoodArray, goldenRaintreeArray, amurMaackiaArray, persianIronwoodArray, hedgeMapleArray, amurMapleArray, paperbarkMapleArray, tartarMapleArray, shantungMapleArray, serviceberryArray, chineseFringetreeArray, kousaDogwoodArray, cornelianCherryArray, cockspurHawthornArray, crabappleArray, purpleLeafPlumArray, japaneseTreeLilacArray, chineseTreeLilacArray, norwayMapleArray, sycamoreMapleArray);

     // #endregion


// #region --------------------- SORT ARRAYS BY PERCENTAGE ---------------------

/* ------------------------------------ SORTING ARRAYS BY PERCENTAGE ------------------------------------ */
    
    let sorter = (a, b) => {
        if(a.length > b.length) {
           return -1;
        } else {
           return 1;
        }
    }
    
    allArray.sort(sorter);
    allNativeArray.sort(sorter);
    allNonNativeArray.sort(sorter);
// #endregion

    
    // console.log(allArray); 
    // console.log(allNativeArray);

//#region ---------------------CALCULATING INTERNAL ARRAY LENGTHS (TOTAL NO. OF TREES) ---------------------

let allNativeTreesNumber = 0;
let allNonNativeTreesNumber = 0;

function calcTotalNumbers(arr) {
    let totalLength = 0;

    for (let i = 0; i < arr.length; i++) {
        totalLength += arr[i].length;
      }

    return totalLength;

}

const nativeTreesTotalNumber = calcTotalNumbers(allNativeArray);
console.log(nativeTreesTotalNumber);

const nonNativeTreesTotalNumber = calcTotalNumbers(allNonNativeArray);
console.log(nonNativeTreesTotalNumber);

const allTreesTotalNumber = calcTotalNumbers(allArray);
console.log(allTreesTotalNumber);


//#endregion

/* ------------------------------------ CREATING BASE TINY DIV VISUALIZATIONS -------------------------------- */

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function revealInfoBlocks () {

    let treeVisualisations = document.getElementsByClassName('viz-container');
    let infoContainers = document.getElementsByClassName('info-block');
    
    
    for (let i=0; i <treeVisualisations.length; i++) {
        
        treeVisualisations[i].addEventListener("click", () => {
    
            treeVisualisations[i].classList.toggle('info-block-active');


    
            if (treeVisualisations[i].classList.contains('info-block-active')) {
                infoContainers[i].style.height = infoContainers[i].scrollHeight + "px"; 
            } else {
                infoContainers[i].style.height = 0;
            }
    
    
    
        })
        
    }
    };

    keyText.innerHTML = `Visualizing ${allTreesTotalNumber} New York City trees by`;



function createTheDivs(arr) { 
        for (let i=0; i < arr[i].length; i++) {
            treesDOM += `<div class="viz-container">`;
            treesDOM += `<p class="body-text">${arr[i][i].spc_common_name}</p>`;

            // INFO 
            treesDOM += `<div class="info-block">`
            treesDOM += `<div class="info-flex">`;
            treesDOM += `<div class="info-img" style="background-image: url('${arr[i][i].imageOne}'); background-size: cover;"></div>`;
            treesDOM += `<div class="info-img" style="background-image: url('${arr[i][i].imageTwo}'); background-size: cover;"></div>`;


            treesDOM += `<div class="info-container body-text">`
            treesDOM += `<p id="content">
                        <span>Common Name</span>
                        <br>${arr[i][i].spc_common_name}</p>

                        <p>
                        <br><span>Scientific Name</span>
                        <br>${arr[i][i].spc_latin}</p>

                        <p>
                        <br><span>Percentage</span>
                        <br> ${roundToTwo((arr[i].length/allTreesTotalNumber)*100)}%</p>

                        <p>
                        <br><span>Total Number of Trees</span>
                        <br>${arr[i].length}</p>`



            treesDOM += `</div>` // info container end
            treesDOM += `</div>` // info flex end
            treesDOM += `</div>` // info block end
            //INFO END

            treesDOM += `<div class="tree-container">`;

            // LOOP THAT CREATES SMALL DIVS

            for (let j=0; j < Math.floor(arr[i].length/100); j++) {
                treesDOM += `<div class="tiny-box ${arr[i][i].spc_common}"></div>`
            };

            treesDOM += `</div>`
            treesDOM += `</div>`

            mainContainer.innerHTML = treesDOM;

                    

} // forloop end


revealInfoBlocks();








} // createTheDivs end

// ******* 

createTheDivs(allArray);


    


    



// #region ------------------------------------------ SUB FILTERS  ------------------------------------------

//#region ----------------------- VIEW ALL DOM -----------------------

percentageFilterBtn.addEventListener("click", function() {

    treesDOM = "";
    keyText.innerHTML = `Visualizing ${allTreesTotalNumber} New York City trees by`;

    createTheDivs(allArray);
    

    mainContainer.innerHTML = treesDOM;

    revealInfoBlocks();
    

});
//#endregion

    //#region ----------------------- NATIVE DOM -----------------------

    nativeFilterBtn.addEventListener("click", function() {
        nativeTreesDOM = "";
        keyText.innerHTML = `Visualizing ${nativeTreesTotalNumber} New York City trees by`;
        // mainContainer.innerHTML = " ";
        
        function createNativeDivs(arr) { 
            for (let k=0; k < arr[k].length; k++) {

                nativeTreesDOM += `<div class="viz-container">`;
                nativeTreesDOM += `<p class="body-text">${arr[k][k].spc_common_name} </p>`;

                // INFO 
                nativeTreesDOM += `<div class="info-block">`
                nativeTreesDOM += `<div class="info-flex">`;
                nativeTreesDOM += `<div class="info-img" style="background-image: url('${arr[k][k].imageOne}'); background-size: cover;"></div>`;
                nativeTreesDOM += `<div class="info-img" style="background-image: url('${arr[k][k].imageTwo}'); background-size: cover;"></div>`;

                nativeTreesDOM += `<div class="info-container body-text" data-height="auto">`
                nativeTreesDOM += `<p id="content">
                        <span>Common Name</span>
                        <br>${arr[k][k].spc_common_name}</p>

                        <p>
                        <br><span>Scientific Name</span>
                        <br>${arr[k][k].spc_latin}</p>

                        <p>
                        <br><span>Percentage</span>
                        <br> ${roundToTwo((arr[k].length/allTreesTotalNumber)*100)}%</p>

                        <p>
                        <br><span>Total Number of Trees</span>
                        <br>${arr[k].length}</p>`



                nativeTreesDOM += `</div>` // info container end
                nativeTreesDOM += `</div>` // info flex end
                nativeTreesDOM += `</div>` // info block end
                //INFO END
    
                nativeTreesDOM += `<div class="tree-container">`;
    
                for (let l=0; l <Math.floor(arr[k].length/100); l++) {
                    nativeTreesDOM += `<div class="tiny-box ${arr[k][k].spc_common}"></div>`
                };
    
                nativeTreesDOM += `</div>`
                nativeTreesDOM += `</div>`

                mainContainer.innerHTML = nativeTreesDOM;
            }

            revealInfoBlocks();

            

        };
    
        createNativeDivs(allNativeArray);
        
    
        mainContainer.innerHTML = nativeTreesDOM;

        revealInfoBlocks();
    
    });
    //#endregion


    // #region ----------------------- NON NATIVE DOM -----------------------

    nonNativeFilterBtn.addEventListener("click", function() {
        nonNativeTreesDOM = "";
        keyText.innerHTML = `Visualizing ${nonNativeTreesTotalNumber} New York City trees by`;
        
        
        function createNonNativeDivs(arr) { 
            for (let k=0; k < arr[k].length; k++) {

                nonNativeTreesDOM += `<div class="viz-container reveal active">`;
                nonNativeTreesDOM += `<p class="body-text">${arr[k][k].spc_common_name} </p>`;

                // INFO 
                nonNativeTreesDOM += `<div class="info-block">`
                nonNativeTreesDOM += `<div class="info-flex">`;
                nonNativeTreesDOM += `<div class="info-img" style="background-image: url('${arr[k][k].imageOne}'); background-size: cover;"></div>`;
                nonNativeTreesDOM += `<div class="info-img" style="background-image: url('${arr[k][k].imageTwo}'); background-size: cover;"></div>`;

                nonNativeTreesDOM += `<div class="info-container body-text" data-height="auto">`
                nonNativeTreesDOM += `<p id="content">
                        <span>Common Name</span>
                        <br>${arr[k][k].spc_common_name}</p>

                        <p>
                        <br><span>Scientific Name</span>
                        <br>${arr[k][k].spc_latin}</p>

                        <p>
                        <br><span>Percentage</span>
                        <br> ${roundToTwo((arr[k].length/allTreesTotalNumber)*100)}%</p>

                        <p>
                        <br><span>Total Number of Trees</span>
                        <br>${arr[k].length}</p>`



                nonNativeTreesDOM += `</div>` // info container end
                nonNativeTreesDOM += `</div>` // info flex end
                nonNativeTreesDOM += `</div>` // info block end
                //INFO END


    
                nonNativeTreesDOM += `<div class="tree-container">`;
    
                for (let l=0; l <Math.floor(arr[k].length/100); l++) {
                    nonNativeTreesDOM += `<div class="tiny-box ${arr[k][k].spc_common}"></div>`
                };
    
                nonNativeTreesDOM += `</div>`
                nonNativeTreesDOM += `</div>`

                mainContainer.innerHTML = nonNativeTreesDOM;
            }

            revealInfoBlocks();
            

        };
    
        createNonNativeDivs(allNonNativeArray);
    
        mainContainer.innerHTML = nonNativeTreesDOM;

        revealInfoBlocks();
        
        
    
    });
    // #endregion

//#region ----------------------- A TREE FUNCTION -----------------------


aTreeBtn.addEventListener("click", function() {

    keyFlex.innerHTML = "";

    keyFlex.innerHTML = 
    `
    <div>
            
        <div id="key-text"></div>
        
        <div class="body-text sub-filters-flex">
            <div id="percentage-filter" class="sub-filter">view all </div>
            <div id="native-filter" class="sub-filter">native </div> 
            <div id="non-native-filter" class="sub-filter">non-native </div>
            <!-- <div id="compare-filter" class="sub-filter">compare </div> -->
        </div>


        </div>

        <div>
            1 square = 100 trees
        </div>
    `;

    keyText.innerHTML = `Visualizing ${allTreesTotalNumber} New York City trees by`;

    treesDOM = "";
    

    createTheDivs(allArray);
    

    mainContainer.innerHTML = treesDOM;

    revealInfoBlocks();
    




});


//#endregion 



    
// #endregion 





// #region ------------------------------------------ MAIN FILTERS  --------------------------------------

forestBtn.addEventListener("click", function () {
    forestDOM = "";

    keyFlex.innerHTML = 
    `<div>
            Visualizing all ${allTreesTotalNumber} New York City trees
    </div>

    <div>
        1 square = 100 trees
    </div>`;


    mainContainer.innerHTML = forestDOM;



});






// #endregion

 
// #region ------------------------------------------ ABOUT PAGE ------------------------------------------

aboutBtn.addEventListener("click", function() {

    aboutDOM = "";


    mainContainer.innerHTML = "";
    

    function createAboutDOM() { 
        keyFlex.innerHTML = "";

        aboutDOM += `<div id="aboutContainer">`

        aboutDOM += `<div id="leftSidebar">`
        aboutDOM += `</div>`

        aboutDOM += `<div id ="rightSidebar">`

        aboutDOM += 
        `<p class="body-text">
        

        Indigenous ecologies play an important role in an urban landscape. Nativity of plants, animals and peoples are vital for these ecologies to thrive.

        <br><br>The most recent street tree census conducted in 2016 by the New York City Department of Parks & Recreation (NYCDPR) counted 666,134 street trees citywide, a 12.5% increase from the count in 2005. However, the ratio of native to non-native plants across the city (streets, parks, pedestals, etc.) is concerning. For example, the flora of Central Park is only 46% native and 54% non-native
        
        
        <br><br>Without native plants and the insects that co-evolve with them, birds cannot survive, which impacts the food web, leading to severe consequences for its ecology. The modern obsession for perfectly manicured green spaces is increasing and, in that process, harming most species living in that landscape. For example, the vast lawns in the city created a green monoculture carpet which no longer supports functioning ecosystems
        
        <br><br> An excellent example that demonstrates the difference between native and non-native biodiversity are the research findings of entomologist Doug Tallamy, which revealed that native oak trees support over 500 species of caterpillars whereas ginkgos (which occupy 9.4% of Manhattans street tree canopy) only house 5 species. This difference is critical when put into context: it takes over 6000 caterpillars to raise a single brood of chickadees, a North American titmouse.

        <br><br>Canopy is a website visualizing the data from NYC Open Data's 2015 Street Tree Census - Tree Data API dataset. With this visualization, my aim is highlight the alarming, asymmetric ratio of native and non-native tree species in New York City. 

        <br><br>Jarring, digitized colors have been used to reference the perfectly manicured, evergreen non-native species that have taken over New York City. In contrast, I attempted to use natural, earthier colors for the native species - colors probably resembling their average mass tone. Visual inspiration for this website comes from satellite views of croplands and plantations. 

        <br><br> All images have been taken from PlantNet, an open source archive of botanical references.

        </p>`

        aboutDOM += `</div>`




        aboutDOM += `</div>`
        mainContainer.innerHTML = aboutDOM;

    }
    
    createAboutDOM();

    mainContainer.innerHTML = aboutDOM;

    
    

});





// #endregion


// ****** THEN RESPONSE FIN *******
  }); 
// #endregion




















//#region TRIALS


//#region choppy but working accordion
// for (let i = 0; i < treeVisualisations.length; i++) {

//     treeVisualisations[i].addEventListener("click", function () {
//       let infoContainers = document.getElementsByClassName('info-block');
//       console.log(infoContainers);

//       if (infoContainers[i].style.display !== "none") {
//         infoContainers[i].style.display = "none";
//      
//       } else {
//         infoContainers[i].style.display = "block";
//      
//       }
//     });
//   } 
// #endregion end


// #region --------------------- VISUALIZATION CREATION TRIALS ---------------------
    

    // allArray.forEach(function createDivs() {
    //     treesDOM += `<div class="tree-container">`;

    //     for (i=0; i<Math.floor(allArray[i].length/100); i++) { 
    //         treesDOM += `<div class="tree-${[i]}"></div>`
    //     };

    //     treesDOM += `</div>`

    // })

    // function createDivs (arr) {
    //     treesDOM += `<div class="tree-container">`;
    //     for (i=0; i< Math.floor(arr[i].length/100); i++) {
    //         treesDOM += `<div class="tree-${[i]}"></div>`
    //     };
    //     treesDOM += `</div>`
    // }
    
    // treesDOM += `<div class="tree-container">`;
    // for (i = 0; i < Math.floor(pinOakArray.length/100); i++) {
    // treesDOM += `<div class="box"></div>`
    // };

    // createDivs(allArray);


    // treesDOM += `</div>`

    // #endregion

    // #region SMOOTH SCROLL FUNCTION

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }


// window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal();

// #endregion

    // nativeFilterBtn.addEventListener("mouseover", function() {
    //     nativeFilterBtn.style.backgroundColor = randomColor(nativeColorsArray);
    // })
    
    // nativeFilterBtn.addEventListener("click", function() {
    //     nativeFilterBtn.style.backgroundColor = randomColor(nativeColorsArray);
    // })

    // nativeFilterBtn.addEventListener("mouseleave", function() {
    //     nativeFilterBtn.style.backgroundColor = "var(--light-white)";
    // })

    // nonNativeFilterBtn.addEventListener("click", function() {
    //     nonNativeFilterBtn.style.backgroundColor = randomColor(nonNativeColorsArray);
    // })
    
    
    // nonNativeFilterBtn.addEventListener("mouseleave", function() {
    //     nonNativeFilterBtn.style.backgroundColor = "var(--light-white)";
    // })

    //#endregion