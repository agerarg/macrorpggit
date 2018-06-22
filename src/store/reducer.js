const initialState = {
    dungeonMonsters:[],
    counter:0,
    reveals:0,
    topPos:1586,
    leftPos:2054,
    dataMap:[{x:20,y:20,monstType:"none",lvl:0},{x:19,y:19,monstType:"none",lvl:0},{x:19,y:20,monstType:"none",lvl:0},
    {x:20,y:21,monstType:"none",lvl:0},{x:21,y:20,monstType:"none",lvl:0},{x:20,y:19,monstType:"none",lvl:0},{x:21,y:19,monstType:"none",lvl:0}]
}
const reducer = (state=initialState,action)=>{

    let newState = {...state};
    switch(action.type)
    {
        case 'NEWCHARACTER':
            console.log(action.char);
        break;
        case 'DUNGEONDISCOVER':
            newState.dungeonMonsters.push(action.dungeon);
        break;

     case "REVEALMAP":
        action.revArr.map((obj)=>{
            newState.dataMap.push({x:obj.x,y:obj.y,monstType:"none",lvl:0});
            return true;
        });
        newState.reveals+=1;
     break;
      case "MAPSCROLLPOS":
         newState.topPos=action.top;
         newState.leftPos=action.left;
      break;
      case "INCREMENT":
        newState.counter+=1;
       break
       case "DECREMENT":
        newState.counter-=1;
      break
      default:
        
      break;
    }
    return newState;
}
export default reducer;