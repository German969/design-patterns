// Only for languages with multiple inheritance

// class ExistingClass {
//   method(data) {}
// }

// class ExternalService {
//   serviceMethod(data) {}
// }

// class AdapterClass extends ExistingClass extends ExternalService {
//   method(data) {
//     const specialData = convertToServiceFormat(data);

//     return this.serviceMethod(specialData);
//   }

//   serviceMethod(data) {}
// }