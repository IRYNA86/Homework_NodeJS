import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters(){
    const fighters = fighterRepository.getAll();
    if(!fighters) {
      return null
    }
    return fighters;
  }
  getOneFighter(search){
    const fighter = fighterRepository.getOne(search);
    if(!fighter) {
      return null
    }
    return fighter;
  }
  create(data){
    const fighter = fighterRepository.create(data);
    if(!fighter) {
      return null
    }
    return fighter;
  }
  update(id, dataToUpdate){
    const fighter = fighterRepository.update(id, dataToUpdate);
    if(!fighter) {
      return null
    }
    return fighter;
  }
  delete(id){
    const fighter = fighterRepository.delete(id);
    if(!fighter) {
      return null
    }
    return fighter;
  }
  }

const fighterService = new FighterService();

export { fighterService };
