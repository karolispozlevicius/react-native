const gautiItemus = () =>
fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
.then(response => response.json())
gautiItemus()
.then (response => {
	const itemsVieta =document.qerySelector('#items')

	console.log(rensponse.items)
	response.items.forEach(item => {
		const ItemHtml =document.createElement('div')
		ItemHtml.innerHtml =item.name
		console.log(item)

		itemsVieta.append(ItemHtml)
        })
	  })