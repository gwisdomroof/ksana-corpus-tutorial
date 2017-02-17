console.log("fetching text")
const {openCorpus}=require("ksana-corpus-lib");
const dbid="taisho"; 
/* fetch text by vol page line,caret */
openCorpus(dbid,function(err,cor){
	cor.getText("1p1b0100-b1500",function(out){
		console.log("taisho volumn 1, page 1 , column b , line 1 , caret 0, to line 15 caret 0");
		console.log(out)

		const title=cor.getText("1p1b0800-b0809");
		console.log("fetching text within the range can be a sync call")
		console.log("from Cache",title);
	});
})
