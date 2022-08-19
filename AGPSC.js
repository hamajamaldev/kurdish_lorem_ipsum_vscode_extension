var kurdishAlphabet=["ئ" ,"ا" ,"ب" ,"پ", "ت" ,"ج", "چ", "ح", "خ", "د" ,"ر", "ڕ", "ز", "ژ", "س" ,"ش" ,"ێ" ,"ی", "ۆ" ,"وو", "و", "ە", "ه", "ن", "م" ,"ڵ" ,"ل", "گ" ,"ک" ,"ق" ,"ڤ" ,"ف", "غ" ,"ع"]
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
        var singleWord=''
        for(var v=0;v<=Math.floor(Math.random() * 10);v++){
          singleWord=singleWord+kurdishAlphabet[Math.floor(Math.random() * kurdishAlphabet.length)]
        }
        singleWord=singleWord+" "
        singleLineWords=singleLineWords+singleWord+'",'
      }

      RealParagraph=singleParagraph+singleLineWords+'"",'

    }
  }
  var returnString='"Simple Kurdish Dummy '+i+' Paragraph":{"prefix":"kdt'+i+'","body": ['+RealParagraph+'],"description": "Generate '+i+' Paragraph"},'
  realReturnString=realReturnString+returnString
}
console.log(realReturnString)
// Log to console