// const document = () => {
const querySelector = (selector) => {
  if (selector === '.system-message') {
    return {
      innerHTML: '',
    };
  }
};
// }

exports.querySelector = querySelector;