

const classNames = (classe)=>{
    let name="";
    switch(classe)
    {
        case 'humanfighter':
            name="Human Fighter";
        break;
        case 'humanmage':
            name="Human Mage";
        break;
        case 'elffighter':
            name="Elf Fighter";
        break;
        case 'elfmage':
            name="Elf Mage";
        break;
        case 'darkelffighter':
            name="Dark Elf Fighter";
        break;
        case 'darkelfmage':
            name="Dark Elf Mage";
        break;
        case 'orcfighter':
             name="Orc Fighter";
        break;
        case 'orcmage':
            name="Orc Mage";
        break;
        case 'dwarffighter':
             name="Dwarf Fighter";
        break;
        default:
    }
    return name;
}

export default classNames;