console.log("Open a corpus")
const {openCorpus}=require("ksana-corpus-lib");
//download taisho.cor from http://ya.ksana.tw/taisho-corpus/taisho.cor
const dbid="taisho"; 

//will look for taisho.cor on current working directory 
//or ../taisho-corpus/taisho.cor
openCorpus(dbid,function(err,cor){
	if (err) {
		console.error(err);
	} else {
		console.log(cor.meta);

		//sync after successfully open the corpus once.
		const cor2=openCorpus(dbid);
		if (cor==cor2){
			console.log("retain handle");
		}

	}
})