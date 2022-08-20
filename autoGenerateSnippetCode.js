var kurdishWord=["slaw","bashy","chaky","naxir","bali","chon","basha","kaka",'shir',"nagbat"]
var rand=Math.floor(Math.random() * 10);
var realReturnString=''
for(var i=1;i<5;i++){
    var realdummy=''
    for(var j=0;j<i;j++){
        var myText=kurdishWord[Math.floor(Math.random() * kurdishWord.length)]
        realdummy=realdummy+myText+' '
        
    }
    var returnString='"Simple Kurdish Dummy '+i+' Words":{"prefix":"kdt'+i+'","body": ["'+realdummy+'"],"description": "Generate '+i+' Words"},'
    realReturnString=realReturnString+returnString

  }

console.log(realReturnString)