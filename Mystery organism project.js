// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

console.log(mockUpStrand())

const pAequorFactory = (specimenNum, dna)=>{
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const index = Math.floor(Math.random()*this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[index] === newBase){
        newBase = returnRandBase()
      }
      this.dna[index] = newBase;
      return this.dna
     },
     compareDNA(pAequor){
      let identicalBases = 0
      for(let i=0; i< this.dna.length; i++){
        if (this.dna[i] === pAequor.dna[i]){
          identicalBases++
        }

      }
      const percentage = (identicalBases / this.dna.length) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
      console.log(compare)

     },
     willLikelySurvive(){
      let count = 0
      for (let i = 0; i< this.dna.length; i++){
        if (this.dna[i]=== 'C'|| this.dna[i]==='G'){
          count++
        }
        }
        const percentage=(count/this.dna.length)*100;
        if (percentage >= 60){
          return true
        }
        else {
          return false
        }
        },
        complementStrand(){
      return this.dna.map(base => {
        switch (base) {
          case 'A': return 'T';
          case 'T': return 'A';
          case 'C': return 'G';
          case 'G': return 'C'
      }
      })
      }
      
}
const survivingPAequor = [];
let newSpecimenNum = 1;
while (survivingPAequor.length < 30) {
  const newDNA = mockUpStrand();
  const newPAequor = pAequorFactory(newSpecimenNum, newDNA);
  if (newPAequor.willLikelySurvive()) {
    survivingPAequor.push(newPAequor);
  }
 newSpecimenNum++;
}
  }
  
console.log(pAequorFactory(3,'C'))






