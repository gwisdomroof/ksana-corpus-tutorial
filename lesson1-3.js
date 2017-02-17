console.log("single phrase search")
const {openCorpus,search,excerpt}=require("ksana-corpus-lib");
const dbid="taisho"; 
/* fetch text by vol page line,caret */

const listSearchResult=function(sr,cor){
return sr.map(function(item){
	//phrasehits contains hits of each phrase
	const hits=item.phrasehits.map(function(ph){
		return cor.stringify(ph.hits);
	})
	return item.text+"==>"+hits;
})
}
openCorpus(dbid,function(err,cor){
	search(cor,"剎那定者",function(res){
		const tpos=res.matches;  //token position of all matches
		const phrasepostings=res.phrasepostings; // for highlighting

		console.log("match count",tpos.length);
		excerpt.fetchExcerpts(cor,{tpos,phrasepostings},function(ex){
			const searchResult=listSearchResult(ex,cor);
			console.log("match lines",searchResult);
		})
	})
})
