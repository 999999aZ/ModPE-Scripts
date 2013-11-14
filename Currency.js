//Currency by 999999aZ
//© 2013 - 999999aZ
//All rights reserved
//Please read the README.txt file for copyright information

var coins = 0;
var CurrentItem = getCarriedItem();

function newLevel(){
    ModPE.readData (Level.getWorldDir() + "coins");
}

function leaveGame(){
    ModPE.saveData (Level.getWorldDir() + "coins", cash);
    cash = ModPE.readData (Level.getWorldDir() + "coins");
}

function procCmd(c){
	var cmd = c.split(" ");
	var command = cmd[0];
    switch(command) {
        case 'lottery':{
            var randomlottery = Math.random();
          	if(randomlottery<=0.2){ //If Random Lottery Number Is Below 0.2 You Get 1000 Coins
          		coins+=1000;
          		clientMessage("Jackpot!"); }
                else if(randomlottery>=0.3){ //If Random Lottery Number Is Above 0.3 You Lose 50 Coins
          		coins-=50;
          		clientMessage("You Lost!");
                break; }
                }
                case 'minecraftmillions':{
                    var randommillions = Math.random();
                    coins+=1000000;
                    clientMessage("Jackpot!"); }
                else if(randommillions>=0.2){ 
                    coins-=70;
                    clientMessage("You Lost!");
                    break; }
          		} 
                case 'help':{
          			clientMessage("Showing Help Page 1 of 3: /help <page> \n /lottery \n /minecraftmillions \n /coins \n /");
                    break; } 
                case 'help 2':{
                    clientMessage("Showing Help Page 2 of 3: /help <page>  \n /shoparmour \n /shoptools \n /shopblocks");
                    break; } 
                case 'help 3':{
                    clientMessage("Showing Help Page 3 of 3: /help <page> \n /save \n /sellhand");
                    break; }
                case 'shoparmour':{
                	print("Showing Armour Page Of Shop: /leatherarmour \n /ironarmour \n /goldarmour \n /diamondarmour");
                	break; } 
                case 'shoptools':{
                	print("Showing Tools Page Of Shop: /woodentools \n /stonetools \n /irontools \n /goldtools \n /diamondtools");
                	break; } 
                case 'shopblocks':{
                	print("Showing Blocks Page Of Shop: /woodenblocks \n /expensiveblocks \n /oreblocks");
                	break; } 
                case 'coins': {
                	print("You Have " + coins + " Coins ");
                	break; } 
                case 'leatherarmour':{ //Armour Section
                	if(coins>=100){
                		coins-=100;
                		addItemInventory(298,1);
                		addItemInventory(299,1);
                		addItemInventory(300,1);
                		addItemInventory(301,1);
                		print("You Have Successfully Bought The Leather Armour Set!"); }
                	else if(coins<=100){
                		print("You Need 100 Coins For The Leather Armour Set!");
                	break; }
                } 
                case 'ironarmour':{
                	if(coins>=400){
                		coins-=400;
                		addItemInventory(306,1);
                		addItemInventory(307,1);
                		addItemInventory(308,1);
                		addItemInventory(309,1);
                		print("You Have Successfully Bought The Iron Armour Set!"); }
                	else if(coins<=400){
                		print("You Need 400 Coins For The Iron Armour Set!");
                	break; }
                } 
                case 'goldarmour':{
                	if(coins>=300){
                		coins-=300;
                		addItemInventory(314,1);
                		addItemInventory(315,1);
                		addItemInventory(316,1);
                		addItemInventory(317,1);
                		print("You Have Successfully Bought The Gold Armour Set!"); }
                	else if(coins<=300){
                		print("You Need 300 Coins For The Gold Armour Set!");
                	break; }
                } 
                case 'diamondarmour':{
                	if(coins>=700){
                		coins-=700;
                		addItemInventory(310,1);
                		addItemInventory(311,1);
                		addItemInventory(312,1);
                		addItemInventory(313,1);
                		print("You Have Successfully Bought The Diamond Armour Set!"); }
                	else if(coins<=700){
                		print("You Need 700 Coins For The Diamond Armour Set!");
                	break; }
                } 
                case 'woodentools':{ //Tools Section
                	if(coins>=100){
                		coins-=100;
                		addItemInventory(268,1);
                		addItemInventory(269,1);
                		addItemInventory(270,1);
                		addItemInventory(271,1);
                		addItemInventory(290,1);
                		print("You Have Successfully Bought The Wooden Tools Set!"); }
                	else if(coins<=100){
                		print("You Need 100 Coins For The Wooden Tools Set!");
                	break; }
                } 
                case 'stonetools':{ 
                	if(coins>=200){
                		coins-=200;
                		addItemInventory(272,1);
                		addItemInventory(273,1);
                		addItemInventory(274,1);
                		addItemInventory(275,1);
                		addItemInventory(291,1);
                		print("You Have Successfully Bought The Stone Tools Set!"); }
                	else if(coins<=200){
                		print("You Need 200 Coins For The Stone Tools Set!");
                	break; }
                } 
                case 'irontools': { 
                	if(coins>=400){
                		coins-=400;
                		addItemInventory(256,1);
                		addItemInventory(257,1);
                		addItemInventory(258,1);
                		addItemInventory(267,1);
                		addItemInventory(292,1);
                		print("You Have Successfully Bought The Iron Tools Set!"); }
                	else if(coins<=400){
                		print("You Need 400 Coins For The Iron Tools Set!");
                	break; }
                } 
                case 'goldtools':{ 
                	if(coins>=300){
                		coins-=300;
                		addItemInventory(283,1);
                		addItemInventory(286,1);
                		addItemInventory(284,1);
                		addItemInventory(285,1);
                		addItemInventory(294,1);
                		print("You Have Successfully Bought The Gold Tools Set!"); }
                	else if(coins<=300){
                		print("You Need 300 Coins For The Gold Tools Set!");
                	break; }
                } 
                case 'diamondtools':{ 
                	if(coins>=700){
                		coins-=700;
                		addItemInventory(276,1);
                		addItemInventory(277,1);
                		addItemInventory(278,1);
                		addItemInventory(279,1);
                		addItemInventory(293,1);
                		print("You Have Successfully Bought The Diamond Tools Set!"); }
                	else if(coins<=700){
                		print("You Need 700 Coins For The Diamond Tools Set!");
                	break; }
                } 
                case 'woodenblocks':{ //Blocks Section
                	if(coins>=200) {
                	    coins-=200;
                		addItemInventory(5,64);
                		addItemInventory(17,64);
                		addItemInventory(64,64);
                		addItemInventory(126,64);
                		print("You Have Successfully Bought The Wooden Blocks Set!"); }
                	else if(coins<=200){
                		print("You Need 200 Coins For The Wooden Blocks Set!");
                	break; }
                } 
                case 'expensiveblocks':{
                	if(coins>=1000){
                		coins-=1000;
                		addItemInventory(57,64);
                		addItemInventory(41,64);
                		addItemInventory(42,64);
                		print("You Have Successfully Bought The Expensive Blocks Set!"); }
                	else if(coins<=1000){
                		print("You Need 1000 Coins For The Expensive Blocks Set!");
                	break; }
                } 
                case 'oreblocks':{ 
                	if(coins>=700){
                		coins-=700;
                		addItemInventory(14,64);
                		addItemInventory(15,64);
                		addItemInventory(16,64);
                		addItemInventory(21,64);
                		addItemInventory(56,64);
                		print("You Have Successfully Bought The Ore Blocks Set!"); }
                	else if(coins<=700){
                		print("You Need 700 Coins For The Ore Blocks Set!");
                	break; }
                } 
                case 'sellhand':{ //Sells The Item/Block You Are Holding, Currently Only Sells Diamond, Gold Ingot, Iron Ingot, Coal, Bed, Cake, Furnace, Bucket, TNT, Obsidian, Torch, Wheat
                	{ if(CurrentItem == 264);
                		print("Gained 100 Coins From Selling A Diamond!");
                		addItemInventory(264,-1);
                		coins+=100; }
                	{ else if(CurrentItem == 266);
                		print("Gained 75 Coins From Selling A Gold Ingot!");
                		addItemInventory(266,-1);
                		coins+=75; }
                	{ else if(CurrentItem == 265);
                		print("Gained 80 Coins From Selling An Iron Ingot!");
                		addItemInventory(265,-1);
                		coins+=80; }
                	{ else if(CurrentItem == 263);
                		print("Gained 40 Coins From Selling Coal");
                		addItemInventory(263,-1);
                		coins+=40; }
                	{ else if(CurrentItem == 355);
                		print("Gained 70 Coins From Selling A Bed!");
                		addItemInventory(355,-1);
                		coins+=40; }
                	{ else if(CurrentItem == 354);
                		print("Gained 80 Coins From Selling Cake!");
                		addItemInventory(354,-1);
                		coins+=60; }
                	{ else if(CurrentItem == 61);
                		print("Gained 50 Coins From Selling A Furnace!");
                		addItemInventory(61,-1);
                		coins+=50; }
                	{ else if(CurrentItem == 325);
                		print("Gained 90 Coins From Selling A Bucket!");
                		addItemInventory(325,-1);
                		coins+=50; }
                	{ else if(CurrentItem == 46);
                		print("Gained 70 Coins From Selling TNT!");
                		addItemInventory(46,-1);
                		coins+=70; }
                	{ else if(CurrentItem == 49);
                		print("Gained 50 Coins From Selling Obsidian!");
                		addItemInventory(49,-1);
                		coins+=50; }
                	{ else if(CurrentItem == 50);
                		print("Gained 60 Coins From Selling A Torch!");
                		addItemInventory(50,-1);
                		coins+=60; }
                	{ else if(CurrentItem == 296);
                		print("Gained 50 Coins From Selling Wheat!");
                		addItemInventory(296,-1);
                		coins+=50; }
                	break; } 
                case 'easteregg':{ 
                	coins+=10000;
                	print("You Have Found The Easter Egg!");
                    addItemInventory(296,1);
                    addItemInventory(50,1);
                    addItemInventory(49,1);
                    addItemInventory(46,1);
                    addItemInventory(325,1);
                    addItemInventory(61,1);
                    addItemInventory(354,1);
                    addItemInventory(355,1);
                    addItemInventory(263,1);
                    addItemInventory(265,1);
                    addItemInventory(266,1);
                    addItemInventory(264,1);
                    break; }
                case 'save':{
                    ModPE.saveData (Level.getWorldDir() + "coins", cash);
                    cash = ModPE.readData (Level.getWorldDir() + "coins");
                    print("Successfully Saved!");
                    break; }
                	}
                	}