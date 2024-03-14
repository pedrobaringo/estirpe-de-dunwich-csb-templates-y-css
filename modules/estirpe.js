import {EDWhite} from './die.js';
import {EDd6} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["e"] = EDWhite;
    CONFIG.Dice.terms["d"] = EDd6;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"EDDice",name:"Dados Estirpe de Dunwich"},"preferred");
    dice3d.addDicePreset({
      type:"de",
      labels:[
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice1.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice2.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice3.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice4.webp',
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice5.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice6.webp'
      ],
      bumpMaps:[
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice1_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice2_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice3_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice4_Bump.webp',
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice5_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice6_Bump.webp'
      ],
	  colorset:"whiteED",
      system: "EDDice"
    });
    dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice1.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice2.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice3.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice4.webp',
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice5.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice6.webp'
      ],
      bumpMaps:[
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice1_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice2_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice3_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice4_Bump.webp',
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice5_Bump.webp', 
        'modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice6_Bump.webp'
      ],
	  colorset:"whiteED",
      system: "EDDice"
    });
dice3d.addColorset({
    name: 'whiteED',
    description: 'White',
    category: 'Dados Estirpe de Dunwich',
    foreground: '#FFFFFF',
    background: '#FFFFFF',
    outline: 'white',
    texture: 'none',
    material: 'plastic'
});
});
