import PJ from '../char/pj';


class Party {

    partyMembers = [];

    addMember = (NAME,STR,DEX,INT)=>{
        let char = new PJ(NAME,STR,DEX,INT);
        this.partyMembers.push(char);
    }
    getMember = id=>{
        return this.partyMembers[id];
    }
   

}

export default Party;