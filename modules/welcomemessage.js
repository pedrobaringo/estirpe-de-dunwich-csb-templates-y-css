Hooks.once("init", function() {
    console.log("Incializando módulo Estirpe de Dunwich")

    game.settings.register("estirpe-de-dunwich-csb-templates-y-css", "firstTimeStart", {
        name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})

Hooks.once("ready", function() {
	let forzarbienvenida=game.settings.get("estirpe-de-dunwich-csb-templates-y-css", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("estirpe-de-dunwich-csb-templates-y-css").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("estirpe-de-dunwich-csb-templates-y-css", "welcomeMessage") || forzarmensaje==true) {
			console.log('lalala');
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Bienvenido al módulo de Estirpe de Dunwich</h1><p>Importa los compendios para poder empezar a usar el módulo</p><button id='+buttonId2+' >Importa los compendios</button><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>';
			ChatMessage.create({
        		speaker: {alias:"Yog-Sothoth"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("estirpe-de-dunwich-csb-templates-y-css.templatesobjetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates_Objetos")) {
							folderident=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("estirpe-de-dunwich-csb-templates-y-css.templatesactores");
							let folderident2=''
							if (game.folders.getName("Templates_Actores")) {
								folderident2=game.folders.getName("Templates_Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates_Actores", keepId: true});
						}, 500);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
						game.user.setFlag("estirpe-de-dunwich-csb-templates-y-css", "welcomeMessage", true);
						game.user.setFlag("estirpe-de-dunwich-csb-templates-y-css", "lastVersion", game.modules.get("estirpe-de-dunwich-csb-templates-y-css").version);
					});
				}
				}, 100);
			});
			game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? iniciativa:iniciativa+0.01");
			game.settings.set("estirpe-de-dunwich-csb-templates-y-css", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("estirpe-de-dunwich-csb-templates-y-css", "lastVersion")) {
			let buttonId=Date.now();
			let buttonId2=Date.now()+2;
			let msg='<h1>Bienvenido al módulo de Estirpe de Dunwich</h1><p>Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonId2+' >Importa los compendios</button><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>';
			ChatMessage.create({
					speaker: {alias:"Yog-Sothoth"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css')
					});
				}
				const button2 = document.getElementById(buttonId2);
				if (button2) {
					button2.addEventListener("click",function () {
						let collection = game.packs.get("estirpe-de-dunwich-csb-templates-y-css.templatesobjetos");
						console.log(collection);
						console.log(button2);
						let folderident=''
						if (game.folders.getName("Templates_Objetos")) {
							folderident=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collection.importAll({folderId: folderident, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collection2 = game.packs.get("estirpe-de-dunwich-csb-templates-y-css.templatesactores");
							let folderident2=''
							if (game.folders.getName("Templates_Actores")) {
								folderident2=game.folders.getName("Templates_Actores").id;
							}
							let docs2 =  collection2.importAll({folderId: folderident2, folderName: "Templates_Actores", keepId: true});
						}, 500);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
						game.user.setFlag("estirpe-de-dunwich-csb-templates-y-css", "lastVersion", game.modules.get("estirpe-de-dunwich-csb-templates-y-css").version);
					});
				}
				}, 500);
			});
      game.settings.set("custom-system-builder", "initFormula", "isnpc==1 ? iniciativa:iniciativa+0.01");
		}
	} else if (!game.user.getFlag("estirpe-de-dunwich-csb-templates-y-css", "welcomeMessage") || forzarmensaje==true) {
		let buttonId=Date.now();
		let msg = '<h1>Bienvenido al módulo de Estirpe de Dunwich</h1><p>Recuerda: Puedes añadir dados de bonificación, o restar dados de penalización, si pulsas la tecla Mayus al hacer click en la Capacidad.</p><button id='+buttonId+' >Ve al Tutorial</button>'
		ChatMessage.create({
        		speaker: {alias:"Yog-Sothoth"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/estirpe-de-dunwich-csb-templates-y-css');
				});
			}
			}, 100);
		});
		game.user.setFlag("estirpe-de-dunwich-csb-templates-y-css", "welcomeMessage", true);
		game.settings.set("estirpe-de-dunwich-csb-templates-y-css", "firstTimeStart", false);
	}
})