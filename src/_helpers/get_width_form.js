// remove in future

function getWidthForm(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    if(vw < 450) return "100%";
    return "400px";
}


export {getWidthForm as default}