export class Utils {
  static createElement(classInstance) {
    console.log(classInstance.getTemplate());
    return classInstance.getTemplate();
  }

  static removeElement(classInstance) {
    classInstance.removeTemplate();
  }
}
