import { userRepository } from "../repositories/userRepository.js";


  // TODO: Implement methods to work with user

  class UserService {
    getAllUsers() {
      const users = userRepository.getAll();
      if (!users) {
          return null
      } 
      return users;
  }
  getOneUser(search) {
      const user = userRepository.getOne(search);
      if (!user) {
          return null
      } 
      return user;
  }
  create(data) {
      const user = userRepository.create(data);
      if (!user) {
          return null;
      }
      return user;
  }
  update(id, dataToUpdate) {
      const user = userRepository.update(id, dataToUpdate);
      if (!user) {
          return null;
      }
      return user;
  }
  delete(id) {
      const user = userRepository.delete(id);
      if (!user) {
          return null;
      }
      return user;
  }
  search(search) {
      const item = userRepository.getOne(search);
      if(!item) {
          return null;
      }
      return item;
  }
}

const userService = new UserService();

export { userService };
