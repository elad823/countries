import countries from "./JCountries.json"



export const generateMockCountries=()=>{
  const data= [];
  const summary= " summary dfd ffdf asdf asdfadsf af56 56 thwth thw5y546456 5w w5tw.";
  const fullDescription=" full descripion fhsrt4et4 t4 4t3 4t4t gregthmetjvtjtvnjngj j grfgjofdg srg94t43tj rgfdjgsdflkgjsgsre945t45jergjfg 9 g9rg dfiugsdfgjsdgjsdofjg 9hgujgsjoigjoisfj gsdfggg  gdflkgjsdfkgljf 9gusfgjsjgsdfg9g9g jfgjskdflg 9fgsifgj4u90jgr eroigujaer.";
  for(let c of countries)
  {
    let country = {
      title:c.name,
      summary:c.name + summary,
      fullDescription:c.name + fullDescription
    }
    data.push(country);
  }
  return data;
}
