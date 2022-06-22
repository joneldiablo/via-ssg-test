import moment from "moment";

import Controller from "dbl-components/lib/js/views/view";
import eventHandler from "dbl-components/lib/js/functions/event-handler";

const endpoint = 'https://strapi-jhve.onrender.com/api/blog-posts';

export default class extends Controller {

  static jsClass = 'HomeController';

  constructor(props) {
    super(props);
    this.events = [
      ['menuMobile', this.onMenuMobile]
    ];
    Object.assign(this.state, {
      articlesError: { active: false },
      articlesLoading: { active: false },
      articles: []
    });
  }

  componentDidMount() {
    super.componentDidMount();
    this.getData();
  }

  async getData() {
    this.setState({ articlesLoading: { active: true } });
    const payload = await fetch(endpoint).then(r => r.json());
    const newState = { articlesLoading: { active: false } };
    if (!payload.data) newState.articlesError = { active: true };
    else newState.articles = payload.data.map((a, i) => ({
      name: 'article' + a.id,
      component: 'Article',
      title: a.attributes.Title,
      subtitle: 'Published at ' + moment(a.attributes.publishedAt).format('DD/MMM/YYYY'),
      excerpt: a.attributes.Post
    }));
    this.setState(newState);
  }

  onMenuMobile = () => {
    eventHandler.dispatch('update.menuMobileModal', { open: true });
  }

  /**
   * 
   * @param {String} sn sectionName
   * @param {Object} component component object {name:'...',....}
   */
  mutations(sn, component) {
    switch (sn) {
      case 'articles':
        return { content: this.state.articles };
      case 'header':
        return {
          classes: ['xs', 'sm'].includes(this.breakpoint) ?
            'align-items-center justify-content-between py-2 shadow-sm nav-secondary sticky-top bg-white' :
            'align-items-center justify-content-between py-2 px-4 shadow-sm nav-secondary sticky-top bg-white'
        };
      case 'logo':
        return ['xs', 'sm'].includes(this.breakpoint) ?
          { height: 50, style: { marginLeft: -10 } } :
          { height: 70, style: null }
      case 'linksW':
      case 'loginW':
      case 'otherLinks':
        return { active: !['xs', 'sm'].includes(this.breakpoint) };
      case 'menuMobile':
        return { active: ['xs', 'sm'].includes(this.breakpoint) };
      default:
        break;
    }
    return this.state[sn];
  }
}