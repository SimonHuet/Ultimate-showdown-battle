import postal from 'postal';
class PostalMainChannel{
  constructor(){
    this.mainChannel=postal.channel('main');
  }
}
console.log('INSTANCE');
const instance =new PostalMainChannel();
export default instance;
