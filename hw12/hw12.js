async function getRandomChinese(length){
    
   
    const result = [];
    let i = 1;
    while (i <= length){ 
        const promise = new Promise((resolve) =>{
            setTimeout(() => {
                const date = Date.now();
                const code = ('' + date).slice(-5);
                const symbol = String.fromCharCode(code);
                resolve(symbol);
            }, 50);
        })

        await promise.then((symbol) =>{
            result.push(symbol);
        })
        i++;


    }
    
    console.log(result.join(''));         
}
getRandomChinese(5)