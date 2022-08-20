var kurdishWord=["slaw","bashy","chaky","naxir","bali","chon","basha","kaka",'shir',"nagbat"]
var rand=Math.floor(Math.random() * 10);
const rndInt = Math.floor(Math.random() * 7) + 3
var realReturnString=''
//json return
for(var i=1;i<5;i++){
  var realdummy=''
  var myparagraph=''

  //number of paragraphs
  for(var j=0;j<i;j++){
    var RealParagraph=''

    //lines of paragraph
    var singleParagraph=''
    for(var k=0;k<Math.floor(Math.random() * 7) + 3;k++){

      //words in one line
      var singleLineWords='"'
      for(var w=0;w<Math.floor(Math.random() * 15) + 6;w++){
        var singleWord=kurdishWord[Math.floor(Math.random() * kurdishWord.length)]
        singleLineWords=singleLineWords+singleWord+' '
      }
      singleLineWords=singleLineWords+'",'
      RealParagraph=RealParagraph+singleLineWords

    }

    myparagraph=myparagraph+RealParagraph+'" ",'
  }
  var returnString='"Simple Kurdish Dummy '+i+' Paragraph":{"prefix":"kdp'+i+'","body": ['+myparagraph+'],"description": "Generate '+i+' Paragraph"},'
  realReturnString=realReturnString+returnString
}

console.log(realReturnString)
