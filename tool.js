function load_script(xyUrl, callback){
  var head = document.getElementsByTagName("head")[0],
      script = document.createElement("script");
  
  script.type = "text/javascript";    
  script.src = xyUrl;
  
  script.onload = script.onreadystatechange = function(){
      if((!this.readyState || this.readyState==="loaded" || this.readyState==="complete")){
        callback&&callback();
        script.onload = script.onreadystatechange = null;
        if(head && script.parentNode){
          head.removeChild(script);
        }
      }
  }
  
  head.insertBefore(script, head.firstChild);
}
