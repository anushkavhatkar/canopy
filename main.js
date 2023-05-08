const APP_TOKEN = 'YEAf7HhwEpQfNrdeSPEwxXv58';

const DATASET_IDENTIFIER = 'uvpi-gqnh';

let mainContainer = document.querySelector('#container');

const LIMIT = 580000; 

let treesDOM = " ";

let nativeTreesDOM = " "; 

let nonNativeTreesDOM = " ";

let nativeFilterBtn = document.querySelector('#native-filter');

let nonNativeFilterBtn = document.querySelector('#non-native-filter');

let percentageFilterBtn = document.querySelector('#percentage-filter');

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
let sycamoreMapleArray = [];

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
            pinOakArray.push(tree);
        }

        if (tree.spc_common == "Callery pear") {
            tree.spc_common = "callery-pear";
            tree.spc_common_name = "Callery Pear";
            calleryPearArray.push(tree);
        }

        if (tree.spc_common == "red maple") {
            tree.spc_common = "red-maple";
            tree.spc_common_name = "Red Maple";
            redMapleArray.push(tree);
        }

        if (tree.spc_common == "Norway maple") {
            tree.spc_common = "norway-maple";
            tree.spc_common_name = "Norway Maple";
            norwayMapleArray.push(tree);
        }

        if (tree.spc_common == "honeylocust") {
            tree.spc_common_name = "Honeylocust";
            honeylocustArray.push(tree);
        }

        if (tree.spc_common == "American linden") {
            tree.spc_common = "american-linden";
            tree.spc_common_name = "American Linden";
            americanLindenArray.push(tree);
        }

        if (tree.spc_common == "London planetree") {
            tree.spc_common = "london-planetree";
            tree.spc_common_name = "London Planetree";
            londonPlanetreeArray.push(tree);
        }

        if (tree.spc_common == "ginkgo") {
            tree.spc_common_name = "Ginkgo";
            ginkgoArray.push(tree);
        }

        // if (tree.spc_common == "horse chestnut") {
        //     redHorsechestnutArray.push(tree);
        // }

        if (tree.spc_common == "river birch") {
            tree.spc_common = "river-birch";
            tree.spc_common_name = "River Birch";
            riverBirchArray.push(tree);
        }
        
        if (tree.spc_common == "Turkish hazelnut") {
            tree.spc_common = "turkish-hazelnut";
            tree.spc_common_name = "Turkish Hazelnut";
            turkishHazelnutArray.push(tree);
        }

        if (tree.spc_common == "hardy rubber tree") {
            tree.spc_common = "hardy-rubber-tree";
            tree.spc_common_name = "Hardy Rubber Tree";
            hardyRubberTreeArray.push(tree);
        }

        if (tree.spc_common == "European beech") {
            tree.spc_common = "european-beech";
            tree.spc_common_name = "European Beech";
            europeanBeechArray.push(tree);
        }

        if (tree.spc_common == "Kentucky coffeetree") {
            tree.spc_common = "kentucky-coffeetree";
            tree.spc_common_name = "Kentucky Coffeetree";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "sweetgum") {
            tree.spc_common_name = "Sweetgum";
            sweetgumArray.push(tree);
        }

        if (tree.spc_common == "tulip-poplar") {
            tree.spc_common_name = "Tulip Poplar";
            tulipTreeArray.push(tree);
        }

        if (tree.spc_common == "blackgum") {
            tree.spc_common_name = "Blackgum";
            blackgumArray.push(tree);
        }

        if (tree.spc_common == "sawtooth oak") {
            tree.spc_common = "sawtooth-oak";
            tree.spc_common_name = "Sawtooth Oak";
            sawtoothOakArray.push(tree);
        }

        if (tree.spc_common == "swamp white oak") {
            tree.spc_common = "swamp-white-oak";
            tree.spc_common_name = "Swamp White Oak";
            swampWhiteOakArray.push(tree);
        }
        
        if (tree.spc_common == "scarlet") {
            tree.spc_common_name = "Scarlet Oak";
            scarletOakArray.push(tree);
        }

        if (tree.spc_common == "shingle oak") {
            tree.spc_common = "shingle-oak";
            tree.spc_common_name = "Shingle Oak";
            shingleOakArray.push(tree);
        }

        if (tree.spc_common == "bur oak") {
            tree.spc_common = "bur-oak";
            tree.spc_common_name = "Bur Oak";
            burOakArray.push(tree);
        }

        if (tree.spc_common == "willow oak") {
            tree.spc_common = "willow-oak";
            tree.spc_common_name = "Willow Oak";
            willowOakArray.push(tree);
        }

        if (tree.spc_common == "schumard's oak") {
            tree.spc_common = "schumard-oak";
            tree.spc_common_name = "Schumard's Oak";
            schumardOakArray.push(tree);
        }

        if (tree.spc_common == "black oak") {
            tree.spc_common = "black-oak";
            tree.spc_common_name = "Black Oak";
            blackOakArray.push(tree);
        }
        
        if (tree.spc_common == "sophora") {
            tree.spc_common_name = "Sophora Oak";
            sophoraArray.push(tree);
        }
        
        if (tree.spc_common == "bald cypress") {
            tree.spc_common = "bald-cypress";
            tree.spc_common_name = "Bald Cypress";
            baldCypressArray.push(tree);
        }

        if (tree.spc_common == "littleleaf linden") {
            tree.spc_common = "littleleaf-linden";
            tree.spc_common_name = "Littleleaf Linden";
            littleleafLindenArray.push(tree);
        }

        if (tree.spc_common == "silver linden") {
            tree.spc_common = "silver-linden";
            tree.spc_common_name = "Silver Oak";
            silverLindenArray.push(tree);
        }

        if (tree.spc_common == "american elm") {
            tree.spc_common = "American Elm";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "chinese elm") {
            tree.spc_common = "chinese-elm";
            tree.spc_common_name = "Chinese Elm";
            chineseElmArray.push(tree);
        }

        if (tree.spc_common == "Japanese zelkova") {
            tree.spc_common = "japanese-zelkova";
            tree.spc_common_name = "Japanese Zelkova";
            japaneseZelkovaArray.push(tree);
        }

        if (tree.spc_common == "red horse chestnut") {
            tree.spc_common = "red-horse-chestnut";
            tree.spc_common_name = "Red Horse Chestnut";
            redHorsechestnutArray.push(tree);

        }

        if (tree.spc_common == "european hornbeam") {
            tree.spc_common = "european-hornbeam";
            tree.spc_common_name = "European Hornbeam";
        }

        if (tree.spc_common == "american hornbeam") {
            tree.spc_common = "american-hornbeam";
            tree.spc_common_name = "American Hornbeam";
            americanElmArray.push(tree);
        }

        if (tree.spc_common == "japanese hornbeam") {
            tree.spc_common = "japanese-hornbeam";
            tree.spc_common_name = "Japanese Hornbeam";
            japaneseHornbeamArray.push(tree);
        }

        if (tree.spc_common == "Kentucky yellowwood") {
            tree.spc_common = "kentucky-yellowwood";
            tree.spc_common_name = "Kentucky Yellowwood";
            kentuckyCoffeetreeArray.push(tree);
        }

        if (tree.spc_common == "golden raintree") {
            tree.spc_common = "golden-raintree";
            tree.spc_common_name = "Golden Raintree";
            goldenRaintreeArray.push(tree);
        }

        if (tree.spc_common == "Amur maackia") {
            tree.spc_common = "amur-maackia";
            tree.spc_common_name = "Amur Maackia";
            amurMaackiaArray.push(tree);
        }
        
        if (tree.spc_common == "Persian ironwood") {
            tree.spc_common = "persian-ironwood";
            tree.spc_common_name = "Persian Ironwood";
            persianIronwoodArray.push(tree);
        }

        if (tree.spc_common == "hedge maple") {
            tree.spc_common = "hedge-maple";
            tree.spc_common_name = "Hedge Maple";
            hedgeMapleArray.push(tree);
        }

        if (tree.spc_common == "amur maple") {
            tree.spc_common = "amur-maple";
            tree.spc_common_name = "Amur Maple";
            amurMapleArray.push(tree);
        }

        if (tree.spc_common == "paperbark maple") {
            tree.spc_common = "paperbark-maple";
            tree.spc_common_name = "Paperbark Maple";
            paperbarkMapleArray.push(tree);
        }

        if (tree.spc_common == "tartar maple") {
            tree.spc_common = "tartar-maple";
            tree.spc_common_name = "Tartar Maple";
            tartarMapleArray.push(tree);
        }

        if (tree.spc_common == "shantung maple") {
            tree.spc_common = "shantung-maple";
            tree.spc_common_name = "Shantung Maple";
            shantungMapleArray.push(tree);
        }

        if (tree.spc_common == "serviceberry") {
            tree.spc_common_name = "Serviceberry";
            serviceberryArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            redbudArray.push(tree);
        }

        if (tree.spc_common == "Chinese fringetree") {
            tree.spc_common = "chinese-fringetree";
            tree.spc_common_name = "Chinese Fringetree";
            chineseFringetreeArray.push(tree);
        }

        if (tree.spc_common == "kousa dogwood") {
            tree.spc_common = "kousa-dogwood";
            tree.spc_common_name = "Kousa Dogwood";
            kousaDogwoodArray.push(tree);
        }

        if (tree.spc_common == "cornelian cherry") {
            tree.spc_common = "cornelian-cherry";
            tree.spc_common_name = "Cornelian Cherry";
            cornelianCherryArray.push(tree);
        }

        if (tree.spc_common == "cockspur hawthorn") {
            tree.spc_common = "cockspur-hawthorn";
            tree.spc_common_name = "Cockspur Hawthorn";
            cockspurHawthornArray.push(tree);
        }

        if (tree.spc_common == "crab apple") {
            tree.spc_common = "crab-apple";
            tree.spc_common_name = "Crab Apple";
            crabappleArray.push(tree);
        }


        if (tree.spc_common == "purple-leaf plum") {
            tree.spc_common = "purple-leaf-plum";
            tree.spc_common_name = "Purple Leaf Plum";
            purpleLeafPlumArray.push(tree);
        }

        if (tree.spc_common == "Japanese tree lilac") {
            tree.spc_common = "japanese-tree-lilac";
            tree.spc_common_name = "Japanese Tree Lilac";
            japaneseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Chinese tree lilac") {
            tree.spc_common = "chinese-tree-lilac";
            tree.spc_common_name = "Chinese Tree Lilac";
            chineseTreeLilacArray.push(tree);
        }

        if (tree.spc_common == "Oklahoma redbud") {
            tree.spc_common = "oklahoma-redbud";
            tree.spc_common_name = "Oklahoma Redbud";
            chineseTreeLilacArray.push(tree);
        }


        if (tree.spc_common == "sycamore maple") {
            tree.spc_common = "sycamore-maple";
            tree.spc_common_name = "Sycamore Maple";
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

    
    console.log(allArray); 
    console.log(allNativeArray);


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

/* ------------------------------------ CREATING TINY DIV VISUALIZATIONS -------------------------------- */

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function revealInfoBlocks () {

    let treeVisualisations = document.getElementsByClassName('viz-container');
    
    for (let i=0; i <treeVisualisations.length; i++) {
        let infoContainers = document.getElementsByClassName('info-block');
    
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

function createTheDivs(arr) { 
        for (let i=0; i < arr[i].length; i++) {
            treesDOM += `<div class="viz-container">`;
            treesDOM += `<p class="body-text">${arr[i][i].spc_common_name}</p>`;

            // INFO 
            treesDOM += `<div class="info-block">`
            treesDOM += `<div class="info-flex">`;
            treesDOM += `<div class="info-img"></div>`;
            treesDOM += `<div class="info-img"></div>`;

            treesDOM += `<div class="info-container body-text" data-height="auto">`
            treesDOM += `<p id="content">
                        <span>Common Name</span>
                        <br>${arr[i][i].spc_common_name}</p>

                        <p>
                        <br><span>Scientific Name</span>
                        <br>${arr[i][i].spc_latin}</p>

                        <p>
                        <br><span>Percentage</span>
                        <br> ${roundToTwo((arr[i].length/LIMIT)*100)}%</p>

                        <p>
                        <br><span>Total Number of Trees</span>
                        <br>${arr[i].length}</p>`



            treesDOM += `</div>` // info container end
            treesDOM += `</div>` // info flex end
            treesDOM += `</div>` // info block end
            //INFO END

            treesDOM += `<div class="tree-container">`;

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

    


    percentageFilterBtn.addEventListener("click", function() {

        treesDOM = "";
        createTheDivs(allArray);
        revealInfoBlocks();

        mainContainer.innerHTML = treesDOM;

        

    });



// #region --------------------- FILTERING THROUGH DATA INTERACTION + VISUALISATION ---------------------


    nativeFilterBtn.addEventListener("click", function() {
        nativeTreesDOM = "";
        // mainContainer.innerHTML = " ";
        
        function createNativeDivs(arr) { 
            for (let k=0; k < arr[k].length; k++) {

                nativeTreesDOM += `<div class="viz-container reveal active">`;
                nativeTreesDOM += `<p class="body-text">${arr[k][k].spc_common_name} </p>`;
    
                nativeTreesDOM += `<div class="tree-container">`;
    
                for (let l=0; l <Math.floor(arr[k].length/100); l++) {
                    nativeTreesDOM += `<div class="tiny-box ${arr[k][k].spc_common}"></div>`
                };
    
                nativeTreesDOM += `</div>`
                nativeTreesDOM += `</div>`
            }
        };
    
        createNativeDivs(allNativeArray);
    
    
    });

    nonNativeFilterBtn.addEventListener("click", function() {
        nonNativeTreesDOM = "";
        
        
        function createNonNativeDivs(arr) { 
            for (let k=0; k < arr[k].length; k++) {

                nonNativeTreesDOM += `<div class="viz-container reveal active">`;
                nonNativeTreesDOM += `<p class="body-text">${arr[k][k].spc_common_name} </p>`;
    
                nonNativeTreesDOM += `<div class="tree-container">`;
    
                for (let l=0; l <Math.floor(arr[k].length/100); l++) {
                    nonNativeTreesDOM += `<div class="tiny-box ${arr[k][k].spc_common}"></div>`
                };
    
                nonNativeTreesDOM += `</div>`
                nonNativeTreesDOM += `</div>`
            }
        };
    
        createNonNativeDivs(allNonNativeArray);
    
    
    });
// #endregion 

// #region --------------------- FILTER TAB HOVER AND CLICK PROPERTIES ---------------------

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



// THEN RESPONSE FIN
  }); // 



