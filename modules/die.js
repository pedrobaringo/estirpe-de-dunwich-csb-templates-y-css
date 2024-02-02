export class EDWhite extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

/** @override */
    static DENOMINATION = "e";
     /** @override */
    getResultLabel(result) {
        return {
			"1": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice1_inCHAT.webp" />',
            "2": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice2_inCHAT.webp" />',
            "3": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice3_inCHAT.webp" />',
            "4": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice4_inCHAT.webp" />',
			"5": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice5_inCHAT.webp" />',			
            "6": '<img src="modules/estirpe-de-dunwich-csb-templates-y-css/packs/assets/Dice6_inCHAT.webp" />'
        }[result.result];
    }
}