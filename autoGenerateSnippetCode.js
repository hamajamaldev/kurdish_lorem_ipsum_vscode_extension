var kurdishAlphabet=["ئ" ,"ا" ,"ب" ,"پ", "ت" ,"ج", "چ", "ح", "خ", "د" ,"ر", "ڕ", "ز", "ژ", "س" ,"ش" ,"ێ" ,"ی", "ۆ" ,"وو", "و", "ە", "ه", "ن", "م" ,"ڵ" ,"ل", "گ" ,"ک" ,"ق" ,"ڤ" ,"ف", "غ" ,"ع"]
var rand=Math.floor(Math.random() * 10);
var realReturnString=''
for(var i=1;i<5;i++){
  var realdummy=''
  for(var j=0;j<i;j++){
    var singleWord=''
      for(var k=0;k<=Math.floor(Math.random() * 10);k++){
        singleWord=singleWord+kurdishAlphabet[Math.floor(Math.random() * kurdishAlphabet.length)]
      }
      singleWord=singleWord+" "
      realdummy=realdummy+singleWord
  }
  var returnString='"Simple Kurdish Dummy '+i+' Words":{"prefix":"kdt'+i+'","body": ["'+realdummy+'"],"description": "Generate '+i+' Words"},'
  realReturnString=realReturnString+returnString
}
console.log(realReturnString)
// Log to console