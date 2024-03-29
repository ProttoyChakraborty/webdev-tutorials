const translate= async (text:string)=>{
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
} catch (error:any) {
	console.error(error);
    return error.message
}
}


const handleClick=(e:Event)=>{
    e.preventDefault()
    let input_element= document.getElementById("input") as HTMLInputElement
    let text = input_element.value
    const outputbox= document.getElementById("output")!
    translate(text).then((tr_text)=>{
        outputbox.innerText=tr_text
    }).catch((err)=>{
        console.log(err)
    })
}

//type-composition

type choice="High"|"Low"|"Medium" //enums
type NullSafeString=String|null

var ts:NullSafeString=null
ts="mystring"

//Arrays/Collections
const addNumbers=(x:number|number[],y:number|number[])=>{
    if(typeof x==="number" && typeof y==="number"){
        return x+y
    }
    else if (x instanceof Array && y instanceof Array){
        let l1=x.length
        let l2=y.length
        let res:number[]
        if (l1>l2){
            res=x
        }else{
            res=y
        }
    
    }
}