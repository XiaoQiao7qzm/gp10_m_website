// import {name} from './controllers/name';
// console.log(name);

const Name = require('./controllers/Name');
const aaTpl = require('./views/aa.art');

async function getName() {
  console.log(Name.name);
  const name = await Name.getName();
  console.log(name + '---');
}
getName();
console.log(template);
let newStr = template.render(aaTpl, {title: 'ni hao'});
console.log(newStr);