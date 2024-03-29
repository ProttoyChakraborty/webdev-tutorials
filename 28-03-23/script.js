const translate= async (text)=>{
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'a1f351ff76msh9b3ae3408686122p14e9e8jsn6224e8595efa',
		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
	},
	body: new URLSearchParams({
		from: 'auto',
		to: 'fr',
		text:text
	})
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


const handleClick=(e)=>{
    e.preventDefault()
    let text= document.getElementById("input").value
    const outputbox= document.getElementById("output")
    translate(text).then((tr_text)=>{
        outputbox.innerText=tr_text
    }).catch((err)=>{
        console.log(err)
    })
}
