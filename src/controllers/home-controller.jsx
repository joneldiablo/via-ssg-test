import Controller from "dbl-components/lib/js/views/view";

export default class extends Controller {
  static jsClass = 'HomeController';
  constructor(props) {
    super(props);
    console.log('HOLA mundo nerd!!!!!');
  }

  /**
   * 
   * @param {String} sn sectionName
   * @param {Object} component component object {name:'...',....}
   */
  mutations(sn, component){
    switch (sn) {
      default:
        break;
    }
    return this.state[sn];
  }
}