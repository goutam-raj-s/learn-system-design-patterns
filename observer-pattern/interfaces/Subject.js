export class Subject {
  registerObserver(o) {
    throw new Error("Method 'registerObserver(o)' must be implemented.");
  }
  
  removeObserver(o) {
    throw new Error("Method 'removeObserver(o)' must be implemented.");
  }
  
  notifyObservers() {
    throw new Error("Method 'notifyObservers()' must be implemented.");
  }
}
