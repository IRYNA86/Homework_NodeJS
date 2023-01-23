import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const error = validFighter({...req.body}, FIGHTER);
  if (!error.error) {
    next() 
} else {
  res.status(401).send(JSON.stringify(error));
}
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const error = validFighter({...req.body}, FIGHTER);
  if(!error.error) {
    next()
  } else {
    res.status(401).send(JSON.stringify(error));
  }
  };

  const validFighter = (reqBody, modelFighter) => {
    const error = {
      error: false,
      message: ''
    }
    for (var prop in reqBody) {
      if (modelFighter[prop] !== undefined) {
        switch(prop) {
          case "power":
            if(reqBody[prop] < 0 && reqBody[prop] > 101){
              error.error = true;
              error.message += ` ${prop} is not valid`;
            } break;
            case "defense":
              if(reqBody[prop] < 0 && reqBody[prop] > 11){
                error.error = true;
                error.message += ` ${prop} is not valid`;
              } break;
              case "health":
                if(reqBody[prop] < 79 && reqBody[prop] > 121){
                  error.error = true;
                  error.message += ` ${prop} is not valid`;
                } break;
                default: break;
        }
      } else {
        error.error = true;
        error.message = "field does not in model of Fighter"
      return error;
      }
    }
    return error;
  }

export { createFighterValid, updateFighterValid };
