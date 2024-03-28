const translate = async (text) => {
	const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
	const obj = {
		from: 'auto',
		to:  getSelectedText('languages'),
		text: text
	
	  }
	  
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': 'a1f351ff76msh9b3ae3408686122p14e9e8jsn6224e8595efa',
			'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
		},
		body: new URLSearchParams(obj)
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result.trans);
		return result.trans
	} catch (error) {
		console.error(error);
		return error.message
	}
}


const handleClick = (e) => {
	e.preventDefault()
	let text = document.getElementById("input").value
	const outputbox = document.getElementById("output")
	translate(text).then((tr_text) => {
		outputbox.innerText = tr_text
	}).catch((err) => {
		console.log(err)
	})
}



window.addEventListener("load", async function () {
	const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1f6bec0a33mshb1003b052927b1bp1f032fjsnf7dfd1514522',
			'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
        var listOfLanuages = parseArrayOfJSONObjects(result);
		var formObj = document.getElementById('languages');
		listOfLanuages.forEach(language=>{
            formObj.innerHTML += `<option value="${language.code}">${language.verbiage}</option>`;
		});
		
	} catch (error) {
		console.error(error);
	}
});

function parseArrayOfJSONObjects(jsonArray) {
	const arrayOfLanguages = new Array();
    try {
        jsonArray.forEach((obj)  => {
			const languageToAdd = {
				verbiage: obj.language,
				code:  obj.code			
			  }
			arrayOfLanguages.push(languageToAdd);
        });

        // Return the parsed array
        return arrayOfLanguages;
    } catch (error) {
        console.error('Error parsing JSON array:', error.message);
        return null;
    }
}


function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;
    var selectedLanguage =elt.options[elt.selectedIndex].value;
	console.log(selectedLanguage);
    return selectedLanguage;
}

