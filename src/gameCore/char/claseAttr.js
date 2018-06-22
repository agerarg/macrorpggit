

const classAtribute = (race,classe)=>{

    //Base
   let stats={
        lifeLimit:50,
        manaLimit:30,
        attack:5,
        magicAttack:3,
        attackSpeed:5,
        castSpeed: 5,
        defense: 15,
         magicDefense: 10,
         critical:3,
         criticalDmg:110,
         magicCritical:3,
         magicCriticalDmg: 150,

    };

    switch(race)
    {
        case 'human':
            stats.lifeLimit+=40;
            stats.defense+=5;
            stats.magicDefense+=5;
        break;
        case 'elf':
            stats.lifeLimit+=30;
            stats.critical+=2;
            stats.magicCritical+=2;
        break;
        case 'darkelf':
            stats.lifeLimit+=25;
            stats.criticalDmg+=25;
            stats.magicCriticalDmg+=25;
        break;
        case 'orc':
            stats.lifeLimit+=60;
            stats.attack+=5;
        break;
        case 'dwarf':
            stats.lifeLimit+=50;
            stats.attack-=2;
        break;
    }

    switch(classe)
    {
        case 'humanfighter':
            stats.lifeLimit+=25;
            stats.defense+=3;
            stats.attack+=7;
        break;
        case 'humanmage':
            stats.manaLimit+=25;
            stats.magicAttack+=7;
            stats.magicDefense+=5;
        break;
        case 'elffighter':
            stats.lifeLimit+=25;
            stats.defense+=3;
            stats.attack+=5;
        break;
        case 'elfmage':
            stats.manaLimit+=30;
            stats.magicAttack+=6;
            stats.magicDefense+=5;
        break;
        case 'darkelffighter':
            stats.lifeLimit+=20;
            stats.defense+=3;
            stats.attack+=8;
        break;
        case 'darkelfmage':
            stats.manaLimit+=20;
            stats.magicAttack+=9;
            stats.magicDefense+=3;
        break;
        case 'orcfighter':
            stats.lifeLimit+=25;
            stats.defense+=2;
            stats.attack+=7;
        break;
        case 'orcmage':
            stats.manaLimit+=15;
            stats.magicAttack+=5;
            stats.magicDefense+=5;
        break;
        case 'dwarffighter':
            stats.lifeLimit+=20;
            stats.defense+=2;
        break;
    }
    return stats;
}

export default classAtribute;