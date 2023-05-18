// #region ROOT VARIABLES --------------------------------



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


// #region ALL TREE SPECIES ARRAYS ------------------------------------

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
let atlanticWhiteCedarArray = [];
let atlasCedarArray = [];
let himalayanCedarArray = [];
let chokecherryArray = [];
let corktreeArray = [];
let easternCottonwoodArray = [];
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


// #region TREE COLOR ARRAYS  ------------------------------------


let nonNativeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#CFF16F", 

"#B5DF3C", "#D8DC2C", "#C7E8DC", "#FFE600", "#FFF500", "#B4E9CF","#CEF6DC","#ECFFB5","#66F40F","#02DC59","#C3FF43","#C4EB71","#4FCB79","#4FCB97","#60CB4F","#8DCB4F","#9FE25B","#E3FD7D","#7DFDCF","#60B596","#1CBDA0","#3AB600","#00B649"
]

let nativeColorsArray = ["#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32",

"#2B8F41","#087B21","#3B7A49","#7B903C","#1A473C","#85947F","#76815E","#195640","#8C9F13","#729F13","#64980F","#7F920C","#48622E","#678847","#81B480","#98B054","#959025","#A9A655"
];


let treeColorsArray = [ "#2ADB31", "#B3ED39", "#D5F21F", "#ACEB44", "#02E34F", "#00CE78", "#0AFA5C", "#0CF090", "#DBFF00", "#80FF00", "#00FFA3", "#6AFBA4", "#5DD8B3", "#00CF08", "#C9E518", "#EBEE6D","#01AF5A", "#00FF19", "#20E0A6", "#20E084", "#6BEE90", "#B3ECB2", "#76DAA4", "#5CE05A", "#00FF75","#91FF8E", "#B0FF62", "#93FF26","#76EC00","#D8FAA0","#CDFF7A","#14B87D", "#00C766", "#2C4A43", "#005E2B", "#143514", "#428400", "#52762F", "#1D6249", "#415C1E", "#3D4A08", "#145033", "#293A18", "#70903C", "#4C7345", "#327B10", "#325F1E", "#004006", "#697A02", "#3F4420", "#707649", "#758C6A", "#394026", "#21590D", "#2B4D32", "#CFF16F", 


"#B5DF3C", "#D8DC2C", "#C7E8DC", "#FFE600", "#FFF500", "#B4E9CF","#CEF6DC","#ECFFB5","#66F40F","#02DC59","#C3FF43","#C4EB71","#4FCB79","#4FCB97","#60CB4F","#8DCB4F","#9FE25B","#E3FD7D","#7DFDCF","#60B596","#1CBDA0","#3AB600","#00B649","#2B8F41","#087B21","#3B7A49","#7B903C","#1A473C","#85947F","#76815E","#195640","#8C9F13","#729F13","#64980F","#7F920C","#48622E","#678847","#81B480","#98B054","#959025","#A9A655",

"#2B8F41","#087B21","#3B7A49","#7B903C","#1A473C","#85947F","#76815E","#195640","#8C9F13","#729F13","#64980F","#7F920C","#48622E","#678847","#81B480","#98B054","#959025","#A9A655"

]

// #endregion




// API FETCH  ------------------------------------ 

// #region URL CONSTRUCT

const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$limit=${LIMIT}`;


console.log(`Fetching url - ${url}`);
// #endregion

keyText.innerHTML = `Not a CS major, still figuring out how to pull this data in faster! Please wait (can take upto 30s)`;

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
            tree.bg = "#2B4D32";

            pinOakArray.push(tree);
        }

        if (tree.spc_common == "Callery pear") {
            tree.spc_common = "callery-pear";
            tree.spc_common_name = "Callery Pear";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#14B87D";
            calleryPearArray.push(tree);
        }

        if (tree.spc_common == "red maple") {
            tree.spc_common = "red-maple";
            tree.spc_common_name = "Red Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#2C4A43";
            redMapleArray.push(tree);
        }

        if (tree.spc_common == "Norway maple") {
            tree.spc_common = "norway-maple";
            tree.spc_common_name = "Norway Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00C766";
            norwayMapleArray.push(tree);
        }

        if (tree.spc_common == "honeylocust") {
            tree.spc_common_name = "Honeylocust";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#143514";
            honeylocustArray.push(tree);
        }

        if (tree.spc_common == "American linden") {
            tree.spc_common = "american-linden";
            tree.spc_common_name = "American Linden";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#697A02";
            americanLindenArray.push(tree);
        }

        if (tree.spc_common == "London planetree") {
            tree.spc_common = "london-planetree";
            tree.spc_common_name = "London Planetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#02E34F";
            londonPlanetreeArray.push(tree);
        }

        if (tree.spc_common == "ginkgo") {
            tree.spc_common_name = "Ginkgo";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#ACEB44";
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
            tree.bg = "#005E2B";
            riverBirchArray.push(tree);
        }
        
        if (tree.spc_common == "Turkish hazelnut") {
            tree.spc_common = "turkish-hazelnut";
            tree.spc_common_name = "Turkish Hazelnut";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#2ADB31";
            turkishHazelnutArray.push(tree);
        }

        if (tree.spc_common == "hardy rubber tree") {
            tree.spc_common = "hardy-rubber-tree";
            tree.spc_common_name = "Hardy Rubber Tree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B3ED39";
            hardyRubberTreeArray.push(tree);
        }

        if (tree.spc_common == "European beech") {
            tree.spc_common = "european-beech";
            tree.spc_common_name = "European Beech";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#D5F21F";
            europeanBeechArray.push(tree);
        }

        if (tree.spc_common == "Kentucky coffeetree") {
            tree.spc_common = "kentucky-coffeetree";
            tree.spc_common_name = "Kentucky Coffeetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#428400";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "sweetgum") {
            tree.spc_common_name = "Sweetgum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#52762F";
            sweetgumArray.push(tree);
        }

        if (tree.spc_common == "tulip-poplar") {
            tree.spc_common_name = "Tulip Poplar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#1D6249";
            tulipTreeArray.push(tree);
        }

        if (tree.spc_common == "blackgum") {
            tree.spc_common_name = "Blackgum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#415C1E";
            blackgumArray.push(tree);
        }

        if (tree.spc_common == "sawtooth oak") {
            tree.spc_common = "sawtooth-oak";
            tree.spc_common_name = "Sawtooth Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#3D4A08";
            sawtoothOakArray.push(tree);
        }

        if (tree.spc_common == "swamp white oak") {
            tree.spc_common = "swamp-white-oak";
            tree.spc_common_name = "Swamp White Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#325F1E";
            swampWhiteOakArray.push(tree);
        }
        
        if (tree.spc_common == "scarlet") {
            tree.spc_common_name = "Scarlet Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#70903C";
            scarletOakArray.push(tree);
        }

        if (tree.spc_common == "shingle oak") {
            tree.spc_common = "shingle-oak";
            tree.spc_common_name = "Shingle Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#4C7345";
            shingleOakArray.push(tree);
        }

        if (tree.spc_common == "bur oak") {
            tree.spc_common = "bur-oak";
            tree.spc_common_name = "Bur Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#327B10";
            burOakArray.push(tree);
        }

        if (tree.spc_common == "willow oak") {
            tree.spc_common = "willow-oak";
            tree.spc_common_name = "Willow Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#004006";
            willowOakArray.push(tree);
        }

        if (tree.spc_common == "schumard's oak") {
            tree.spc_common = "schumard-oak";
            tree.spc_common_name = "Schumard's Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#145033";
            schumardOakArray.push(tree);
        }

        if (tree.spc_common == "black oak") {
            tree.spc_common = "black-oak";
            tree.spc_common_name = "Black Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#21590D";
            blackOakArray.push(tree);
        }
        
        if (tree.spc_common == "sophora") {
            tree.spc_common_name = "Sophora Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00CE78";
            sophoraArray.push(tree);
        }
        
        if (tree.spc_common == "bald cypress") {
            tree.spc_common = "bald-cypress";
            tree.spc_common_name = "Bald Cypress";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#293A18";
            baldCypressArray.push(tree);
        }

        if (tree.spc_common == "littleleaf linden") {
            tree.spc_common = "littleleaf-linden";
            tree.spc_common_name = "Littleleaf Linden";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#3F4420";
            littleleafLindenArray.push(tree);
        }

        if (tree.spc_common == "silver linden") {
            tree.spc_common = "silver-linden";
            tree.spc_common_name = "Silver Oak";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#707649";
            silverLindenArray.push(tree);
        }

        

        if (tree.spc_common == "Japanese zelkova") {
            tree.spc_common = "japanese-zelkova";
            tree.spc_common_name = "Japanese Zelkova";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#0CF090";
            japaneseZelkovaArray.push(tree);
        }

        if (tree.spc_common == "red horse chestnut") {
            tree.spc_common = "red-horse-chestnut";
            tree.spc_common_name = "Red Horse Chestnut";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#DBFF00";
            redHorsechestnutArray.push(tree);

        }

        if (tree.spc_common == "european hornbeam") {
            tree.spc_common = "european-hornbeam";
            tree.spc_common_name = "European Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#80FF00";
            europeanHornbeamArray.push(tree);
        }

        if (tree.spc_common == "american hornbeam") {
            tree.spc_common = "american-hornbeam";
            tree.spc_common_name = "American Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#394026";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "japanese hornbeam") {
            tree.spc_common = "japanese-hornbeam";
            tree.spc_common_name = "Japanese Hornbeam";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00FFA3";
            japaneseHornbeamArray.push(tree);
        }

        if (tree.spc_common == "Kentucky yellowwood") {
            tree.spc_common = "kentucky-yellowwood";
            tree.spc_common_name = "Kentucky Yellowwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#428400";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "golden raintree") {
            tree.spc_common = "golden-raintree";
            tree.spc_common_name = "Golden Raintree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#5DD8B3";
            goldenRaintreeArray.push(tree);
        }

        if (tree.spc_common == "Amur maackia") {
            tree.spc_common = "amur-maackia";
            tree.spc_common_name = "Amur Maackia";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00CF08";
            amurMaackiaArray.push(tree);
        }
        
        if (tree.spc_common == "Persian ironwood") {
            tree.spc_common = "persian-ironwood";
            tree.spc_common_name = "Persian Ironwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#C9E518";
            persianIronwoodArray.push(tree);
        }

        if (tree.spc_common == "hedge maple") {
            tree.spc_common = "hedge-maple";
            tree.spc_common_name = "Hedge Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#EBEE6D";
            hedgeMapleArray.push(tree);
        }

        if (tree.spc_common == "amur maple") {
            tree.spc_common = "amur-maple";
            tree.spc_common_name = "Amur Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#01AF5A";
            amurMapleArray.push(tree);
        }

        if (tree.spc_common == "paperbark maple") {
            tree.spc_common = "paperbark-maple";
            tree.spc_common_name = "Paperbark Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00FF19";
            paperbarkMapleArray.push(tree);
        }

        if (tree.spc_common == "tartar maple") {
            tree.spc_common = "tartar-maple";
            tree.spc_common_name = "Tartar Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#20E0A6";
            tartarMapleArray.push(tree);
        }

        if (tree.spc_common == "shantung maple") {
            tree.spc_common = "shantung-maple";
            tree.spc_common_name = "Shantung Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#20E084";
            shantungMapleArray.push(tree);
        }

        if (tree.spc_common == "serviceberry") {
            tree.spc_common_name = "Serviceberry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#6BEE90";
            serviceberryArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B3ECB2";
            redbudArray.push(tree);
        }

        if (tree.spc_common == "Chinese fringetree") {
            tree.spc_common = "chinese-fringetree";
            tree.spc_common_name = "Chinese Fringetree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#76DAA4";
            chineseFringetreeArray.push(tree);
        }

        if (tree.spc_common == "kousa dogwood") {
            tree.spc_common = "kousa-dogwood";
            tree.spc_common_name = "Kousa Dogwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#5CE05A";
            kousaDogwoodArray.push(tree);
        }

        if (tree.spc_common == "cornelian cherry") {
            tree.spc_common = "cornelian-cherry";
            tree.spc_common_name = "Cornelian Cherry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00FF75";
            cornelianCherryArray.push(tree);
        }

        if (tree.spc_common == "cockspur hawthorn") {
            tree.spc_common = "cockspur-hawthorn";
            tree.spc_common_name = "Cockspur Hawthorn";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#91FF8E";
            cockspurHawthornArray.push(tree);
        }

        if (tree.spc_common == "crab apple") {
            tree.spc_common = "crab-apple";
            tree.spc_common_name = "Crab Apple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B0FF62";
            crabappleArray.push(tree);
        }


        if (tree.spc_common == "purple-leaf plum") {
            tree.spc_common = "purple-leaf-plum";
            tree.spc_common_name = "Purple Leaf Plum";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#93FF26";
            purpleLeafPlumArray.push(tree);
        }

        if (tree.spc_common == "Japanese tree lilac") {
            tree.spc_common = "japanese-tree-lilac";
            tree.spc_common_name = "Japanese Tree Lilac";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#D8FAA0";
            japaneseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Chinese tree lilac") {
            tree.spc_common = "chinese-tree-lilac";
            tree.spc_common_name = "Chinese Tree Lilac";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#CDFF7A";
            chineseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B3ECB2";
            chineseTreeLilacArray.push(tree);
        }


        if (tree.spc_common == "sycamore maple") {
            tree.spc_common = "sycamore-maple";
            tree.spc_common_name = "Sycamore Maple";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#CFF16F";
            sycamoreMapleArray.push(tree);
        }

        //  NEW 

        if (tree.spc_common == "European alder") {
            tree.spc_common = "european-alder";
            tree.spc_common_name = "European Alder";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B5DF3C";
            europeanAlderArray.push(tree);
        }

        if (tree.spc_common == "ash") { 
            tree.spc_common_name = "Ash";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#2B8F41";
            ashArray.push(tree);
        }

        if (tree.spc_common == "green ash") {
            tree.spc_common = "green-ash";
            tree.spc_common_name = "Green Ash";

            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#087B21";
            greenAshArray.push(tree);
        }

        if (tree.spc_common == "white ash") {
            tree.spc_common = "white-ash";
            tree.spc_common_name = "White Ash";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#3B7A49";
            whiteAshArray.push(tree);
        }

        if (tree.spc_common == "black locust") { 
            tree.spc_common = "black-locust";
            tree.spc_common_name = "Black Locust";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#D8DC2C";
            blackLocustArray.push(tree);
        }

        if (tree.spc_common == "catalpa") {
            tree.spc_common_name = "Catalpa";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#C7E8DC";
            catalpaArray.push(tree);
        }

        if (tree.spc_common == "Atlantic white cedar") { 
            tree.spc_common = "atlantic-white-cedar";
            tree.spc_common_name = "Atlantic White Cedar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#FFF500";
            atlanticWhiteCedarArray.push(tree);
        }

        if (tree.spc_common == "Atlas cedar") {
            tree.spc_common = "atlas-cedar";
            tree.spc_common_name = "Atlas Cedar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#FFE600";
            atlasCedarArray.push(tree);
        }

        if (tree.spc_common == "Himalayan cedar") {
            tree.spc_common = "himalayan-cedar";
            tree.spc_common_name = "Himalayan Cedar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#B4E9CF";
            himalayanCedarArray.push(tree);
        }

        if (tree.spc_common == "'Schubert' chokecherry") { 
            tree.spc_common = "chokecherry";
            tree.spc_common_name = "Schubert chokecherry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#7B903C";
            chokecherryArray.push(tree);
        }

        if (tree.spc_common == "Amur cork tree") { 
            tree.spc_common = "amur-cork-tree";
            tree.spc_common_name = "Amur Corktree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#CEF6DC";
            corktreeArray.push(tree);
        }

        if (tree.spc_common == "eastern cottonwood") { 
            tree.spc_common = "eastern-cottonwood";
            tree.spc_common_name = "Eastern Cottonwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#ECFFB5";
            easternCottonwoodArray.push(tree);
        }

        if (tree.spc_common == "dawn redwood") { 
            tree.spc_common = "dawn-redwood";
            tree.spc_common_name = "Dawn Redwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#66F40F";
            dawnRedwoodArray.push(tree);

        }

        if (tree.spc_common == "Douglas-fir") {
            tree.spc_common = "douglas-fir";
            tree.spc_common_name = "Douglas Fir";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#1A473C";
            douglasFirArray.push(tree);
        }

        if (tree.spc_common == "eastern redcedar") {
            tree.spc_common = "eastern-redcedar";
            tree.spc_common_name = "Eastern Redcedar";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#85947F";
            easternRedcedarArray.push(tree);

        }

        if (tree.spc_common == "american elm") {
            tree.spc_common = "American Elm";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#76815E";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "chinese elm") {
            tree.spc_common = "chinese-elm";
            tree.spc_common_name = "Chinese Elm";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#C3FF43";
            chineseElmArray.push(tree);
        }

        if (tree.spc_common == "siberian elm") {
            tree.spc_common = "siberian-elm";
            tree.spc_common_name = "Siberian Elm";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#02DC59";
            siberianElmArray.push(tree);
        }

        if (tree.spc_common == "empress tree") {
            tree.spc_common = "empress-tree";
            tree.spc_common_name = "Empress Tree";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#C4EB71";
            empressTreeArray.push(tree);

        }

        if (tree.spc_common == "eastern hemlock") {
            tree.spc_common = "eastern-hemlock";
            tree.spc_common_name = "Eastern Hemlock";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#4FCB79";
            easternHemlockArray.push(tree);
        }

        if (tree.spc_common == "pignut hickory") { 
            tree.spc_common = "pignut-hickory";
            tree.spc_common_name = "Pignut Hickory";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#195640";
            hickoryArray.push(tree);
        }

        if (tree.spc_common == "holly") {
            tree.spc_common_name = "Holly";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#8C9F13";
            hollyArray.push(tree);
        }

        if (tree.spc_common == "Japanese snowbell") {
            tree.spc_common = "japanese-snowbell";
            tree.spc_common_name = "Japanese Snowbell";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#4FCB97";
            japaneseSnowbellArray.push(tree);
        }

        if (tree.spc_common == "katsura tree") {
            tree.spc_common = "katsura-tree";
            tree.spc_common_name = "Katsura";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#60CB4F";
            katsuraTreeArray.push(tree);
        }

        if (tree.spc_common == "American larch") {
            tree.spc_common = "american-larch";
            tree.spc_common_name = "American Larch";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#729F13";
            americanLarchArray.push(tree);
        }

        if (tree.spc_common == "magnolia") {
            tree.spc_common_name = "Magnolia";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#64980F";
            magnoliaArray.push(tree);
        }

        if (tree.spc_common == "southern magnolia") { 
            tree.spc_common = "southern-magnolia";
            tree.spc_common_name = "Southern Magnolia";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#8DCB4F";
            southernMagnoliaArray.push(tree);
        }


        if (tree.spc_common == "cucumber magnolia") {
            tree.spc_common = "cucumber-magnolia";
            tree.spc_common_name = "Cucumber Magnolia";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#7F920C";
            cucumberMagnoliaArray.push(tree);
        }

        if (tree.spc_common == "mulberry") {
            tree.spc_common_name = "Mulberry";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#48622E";
            mulberryArray.push(tree);
        }

        if (tree.spc_common == "Osage-orange") { 
            tree.spc_common = "osage-orange";
            tree.spc_common_name = "Osage-orange";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#9FE25B";
            osageOrangeArray.push(tree);
        }

        if (tree.spc_common == "pagoda dogwood") { 
            tree.spc_common = "pagoda-dogwood";
            tree.spc_common_name = "Pagoda Dogwood";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#678847";
            pagodaDogwoodArray.push(tree);
        }

        if (tree.spc_common == "white pine") {
            tree.spc_common = "white-pine";
            tree.spc_common_name = "White Pine";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#81B480";
            whitePineArray.push(tree);
        }

        if (tree.spc_common == "red pine") {
            tree.spc_common = "red-pine";
            tree.spc_common_name = "Red Pine";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#98B054";
            redPineArray.push(tree);
        }

        if (tree.spc_common == "Scots pine") { 
            tree.spc_common = "scots-pine";
            tree.spc_common_name = "Scots Pine";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#E3FD7D";
            scotsPineArray.push(tree);
        }

        if (tree.spc_common == "black pine") { 
            tree.spc_common = "black-pine";
            tree.spc_common_name = "Black Pine";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#7DFDCF";
            blackPineArray.push(tree);
        }

        if (tree.spc_common == "two-winged silverbell") { 
            tree.spc_common = "silverbell";
            tree.spc_common_name = "Silverbell";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#60B596";
            silverbellArray.push(tree);
        }

        if (tree.spc_common == "spruce") { 
            tree.spc_common_name = "Spruce";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#959025";
            spruceArray.push(tree);
        }

        if (tree.spc_common == "Norway spruce") {
            tree.spc_common = "norway-spruce";
            tree.spc_common_name = "Norway Spruce";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#1CBDA0";
            norwaySpruceArray.push(tree);
        }

        if (tree.spc_common == "blue spruce") {
            tree.spc_common = "blue-spruce";
            tree.spc_common_name = "Blue Spruce";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#3AB600";
            blueSpruceArray.push(tree);
        }
 
        if (tree.spc_common == "tree of heaven") { 
            tree.spc_common = "tree-of-heaven";
            tree.spc_common_name = "Tree of Heaven";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#00B649";
            heavenArray.push(tree);
        }

        if (tree.spc_common == "black walnut") { 
            tree.spc_common = "black-walnut";
            tree.spc_common_name = "Black Walnut";
            tree.imageOne = internalImagePath + tree.spc_common + "-1" + ".jpeg";
            tree.imageTwo = internalImagePath + tree.spc_common + "-2" + ".jpeg";
            tree.bg = "#A9A655";
            blackWalnutArray.push(tree);
        }




    });


   

// #region ARRAY CONSTRUCTION - ALL, NATIVE, NON NATIVE ------------------------------------  
   

    allArray.push(pinOakArray, redMapleArray, honeylocustArray, americanLindenArray, londonPlanetreeArray, ginkgoArray, americanElmArray, sophoraArray, calleryPearArray, littleleafLindenArray, fastigiataOakArray, sweetgumArray, dawnRedwoodArray, baldcypressArray, coffeetreesArray, northernRedOakArray, swampWhiteOakArray, shingleOakArray, willowOakArray, crimeanLindenArray, silverLindenArray, riverBirchArray, hackberryArray, katsuraTreeArray, turkishHazelnutArray, hardyRubberTreeArray, europeanBeechArray, kentuckyCoffeetreeArray, tulipTreeArray, blackgumArray, sawtoothOakArray, whiteOakArray, scarletOakArray, burOakArray, englishOakArray, redOakArray, schumardOakArray, blackOakArray, baldCypressArray, chineseElmArray, japaneseZelkovaArray, redHorsechestnutArray, europeanHornbeamArray, americanHornbeamArray, japaneseHornbeamArray, kentuckyYellowwoodArray, goldenRaintreeArray, amurMaackiaArray, persianIronwoodArray, hedgeMapleArray,amurMapleArray, paperbarkMapleArray, tartarMapleArray, shantungMapleArray, serviceberryArray, redbudArray, chineseFringetreeArray, kousaDogwoodArray, cornelianCherryArray, cockspurHawthornArray, crabappleArray, purpleLeafPlumArray, japaneseTreeLilacArray, chineseTreeLilacArray, norwayMapleArray, sycamoreMapleArray,
        
    europeanAlderArray, ashArray, greenAshArray, whiteAshArray, blackLocustArray, catalpaArray, atlanticWhiteCedarArray, atlasCedarArray, himalayanCedarArray, chokecherryArray, corktreeArray, easternCottonwoodArray, dawnRedwoodArray, douglasFirArray, easternRedcedarArray, siberianElmArray, chineseElmArray, americanElmArray, empressTreeArray, easternHemlockArray, hickoryArray, hollyArray, japaneseSnowbellArray, katsuraTreeArray, americanLarchArray, magnoliaArray, southernMagnoliaArray, cucumberMagnoliaArray, mulberryArray, osageOrangeArray, pagodaDogwoodArray, whitePineArray, redPineArray, scotsPineArray, blackPineArray, silverbellArray, spruceArray, norwaySpruceArray, blueSpruceArray, heavenArray, blackWalnutArray);

    allNativeArray.push(redMapleArray, riverBirchArray, honeylocustArray, kentuckyCoffeetreeArray, sweetgumArray, tulipTreeArray, blackgumArray, sawtoothOakArray, swampWhiteOakArray, scarletOakArray, shingleOakArray, burOakArray, willowOakArray, americanElmArray, littleleafLindenArray, silverLindenArray, americanElmArray, americanHornbeamArray, blackOakArray, schumardOakArray, baldCypressArray, 
        
    ashArray, greenAshArray, whiteAshArray, chokecherryArray, douglasFirArray, easternRedcedarArray, americanElmArray, hickoryArray, hollyArray, americanLarchArray, magnoliaArray, cucumberMagnoliaArray, mulberryArray, pagodaDogwoodArray, whitePineArray,  redPineArray, spruceArray, blackWalnutArray
        
    );

    allNonNativeArray.push(turkishHazelnutArray, hardyRubberTreeArray, europeanBeechArray, turkishHazelnutArray, ginkgoArray, londonPlanetreeArray, sophoraArray, chineseElmArray, japaneseZelkovaArray, redHorsechestnutArray, europeanHornbeamArray, japaneseHornbeamArray, kentuckyYellowwoodArray, goldenRaintreeArray, amurMaackiaArray, persianIronwoodArray, hedgeMapleArray, amurMapleArray, paperbarkMapleArray, tartarMapleArray, shantungMapleArray, serviceberryArray, chineseFringetreeArray, kousaDogwoodArray, cornelianCherryArray, cockspurHawthornArray, crabappleArray, purpleLeafPlumArray, japaneseTreeLilacArray, chineseTreeLilacArray, norwayMapleArray, sycamoreMapleArray, 
    
    europeanAlderArray, blackLocustArray, catalpaArray, atlasCedarArray, atlanticWhiteCedarArray, himalayanCedarArray, corktreeArray, easternCottonwoodArray, dawnRedwoodArray, siberianElmArray, chineseElmArray, empressTreeArray, easternHemlockArray, japaneseSnowbellArray, katsuraTreeArray, southernMagnoliaArray, osageOrangeArray, scotsPineArray, blackPineArray, silverbellArray, norwaySpruceArray, blueSpruceArray, heavenArray
    
    );



     // #endregion


// #region MATH FUNCTIONS ------------------------------------  

//#region ------------CALCULATING INTERNAL ARRAY LENGTHS (TOTAL NO. OF TREES) ---------------------

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

// #region -----------SORT ARRAYS BY PERCENTAGE ---------------------


    
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


    
    // console.log(allArray); 
    // console.log(allNativeArray);





//#endregion


// Taken from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}


//#endregion 





// #region CREATING DOM/ BASE TINY DIV VISUALIZATIONS -------------------------------- 



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

    keyText.innerHTML = `Now Visualizing ${allTreesTotalNumber} New York City trees`;



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

//#endregion
    


    



// #region SUB FILTERS  ------------------------------------------

        //#region VIEW ALL DOM -----------------------

percentageFilterBtn.addEventListener("click", function() {

    percentageFilterBtn.classList.add('underline');

    nativeFilterBtn.classList.remove('underline');
    nonNativeFilterBtn.classList.remove('underline');

    treesDOM = "";
    keyText.innerHTML = `Now Visualizing ${allTreesTotalNumber} New York City trees`;

    createTheDivs(allArray);
    

    mainContainer.innerHTML = treesDOM;

    revealInfoBlocks();
    

});
//#endregion

        //#region  NATIVE DOM -----------------------

    nativeFilterBtn.addEventListener("click", function() {
        nativeTreesDOM = "";
        keyText.innerHTML = `Now Visualizing ${nativeTreesTotalNumber} New York City trees`;
        // mainContainer.innerHTML = " ";

        nativeFilterBtn.classList.add('underline');

        nonNativeFilterBtn.classList.remove('underline');
        percentageFilterBtn.classList.remove('underline');
        
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


        // #region  NON NATIVE DOM -----------------------

    nonNativeFilterBtn.addEventListener("click", function() {
        nonNativeTreesDOM = "";
        keyText.innerHTML = `Now Visualizing ${nonNativeTreesTotalNumber} New York City trees`;

        nonNativeFilterBtn.classList.add('underline');

        nativeFilterBtn.classList.remove('underline');
        percentageFilterBtn.classList.remove('underline');
        
        
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


percentageFilterBtn.addEventListener("mouseover", function() {
    percentageFilterBtn.classList.add('underline');

    nativeFilterBtn.classList.remove('underline');
    nonNativeFilterBtn.classList.remove('underline');
})

nativeFilterBtn.addEventListener("mouseover", function() {
    nativeFilterBtn.classList.add('underline');

    percentageFilterBtn.classList.remove('underline');
    nonNativeFilterBtn.classList.remove('underline');
})

nonNativeFilterBtn.addEventListener("mouseover", function() {
    nonNativeFilterBtn.classList.add('underline');

    percentageFilterBtn.classList.remove('underline');
    nativeFilterBtn.classList.remove('underline');
})

    
// #endregion 



//#region 

let greyBoxesArray = [];
for (let g=0; g<1000; g++) {
    let greyBox = document.createElement('div');
    greyBox.style.backgroundColor = "#888888";
    greyBox.classList.add("tiny-box");
    greyBoxesArray.push(greyBox);
}

let reducedForestArray = [];

let forestArray = [];



//#endregion




// #region MAIN FILTERS  --------------------------------------

forestBtn.addEventListener("click", function () {

    mainContainer.innerHTML = "";

    mainContainer.style.gridTemplateColumns = "1 fr 1.35fr";

    forestDOM = "";

    keyFlex.innerHTML = 
    `
    
    <div id="key-text">Now Contextualizing ${allTreesTotalNumber} New York City trees</div>
        
        <div class="body-text sub-filters-flex" id="subfilters-two">

            <div id="percentage-view" class="sub-filter">Percentage View </div>
            <div id="canopy-view" class="sub-filter"> Canopy View</div> 


        </div>

        <div id="key">
            By Percentage
        </div>
    

    
    
    `;





    forestDOM += `<div id="city-flex-grid">`;


    function createForestKey (arr1, arr2) {



        forestDOM += `<div id="forest-key">`;

        forestDOM += `<p class="body-text">Native</p>`;
        
        for (let i=0; i<arr1.length; i++) { 
            // forestDOM += `<div class="tiny-box" style="background-color:${arr1[i][i].spc_common}"></div>`;
            forestDOM += `<div class="tiny-box" style="background-color:black"></div>`;
            // console.log(arr1[i][i].spc_common);
            // console.log(arr2[i][i].spc_common);
            // console.log(arr1);
        }

        forestDOM += `<br><p class="body-text">Non-Native</p>`;

        for (let j=0; j<arr2.length; j++) { 
            forestDOM += `<div class="tiny-box" style="background-color:black"></div>`;
        }






        forestDOM += `</div>`;

    }

    createForestKey(allNativeArray, allNonNativeArray);
    







    
    


    mainContainer.appendChild(greyBoxesArray);

    forestDOM += `<div id="forest-dom" class="tree-container">`

    



    forestDOM += `</div>`;






    
    forestDOM += `</div>`;


    mainContainer.innerHTML = forestDOM;



});


    
//#region A TREE FUNCTION 


aTreeBtn.addEventListener("click", function() {

    keyFlex.innerHTML = "";

    keyFlex.innerHTML = 
    `
    
            
        <div id="key-text"></div>
        
        <div class="body-text sub-filters-flex">
            <div id="percentage-filter" class="sub-filter">view all </div>
            <div id="native-filter" class="sub-filter">native </div> 
            <div id="non-native-filter" class="sub-filter">non-native </div>
            <!-- <div id="compare-filter" class="sub-filter">compare </div> -->
        </div>


        

        <div>
            1 square = 100 trees
        </div>
    `;

    keyText.innerHTML = `Now Visualizing ${allTreesTotalNumber} New York City trees`;

    treesDOM = "";
    

    createTheDivs(allArray);
    

    mainContainer.innerHTML = treesDOM;

    revealInfoBlocks();
    




});


//#endregion 





// #endregion




 
// #region ABOUT PAGE ------------------------------------------

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



  });  // THEN RESPONSE FIN 
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